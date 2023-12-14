import { useState, useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { baseTheme, warmTheme } from "./themes/themes";
import { ThemeContext } from "./themes/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { routes } from "./routes";

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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={contextValue}>
            <RouterProvider router={router} />
          </ThemeContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
