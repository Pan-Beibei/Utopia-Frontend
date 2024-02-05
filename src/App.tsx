import { useState, useMemo, useEffect, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { baseTheme, warmTheme } from "./themes/themes";
import { ThemeContext } from "./services/providers/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { routes } from "./routes";
import {
  setItemsPerPage,
  setPaginationButtons,
} from "./services/state/globalSlice";

function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState({ ...baseTheme, ...warmTheme });

  const router = useMemo(() => createBrowserRouter(routes), []);
  //暂时只有一个主题，所以不需要切换
  const contextValue = useMemo(
    () => ({
      toggleTheme: () => {
        setTheme({ ...baseTheme, ...warmTheme });
      },
      theme,
    }),
    [theme]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 1024) {
        dispatch(setPaginationButtons(10));
        dispatch(setItemsPerPage(15));
      } else {
        dispatch(setPaginationButtons(5));
        dispatch(setItemsPerPage(10));
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={contextValue}>
            <Suspense fallback={<div>Loading...</div>}>
              <RouterProvider router={router} />
            </Suspense>
          </ThemeContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
