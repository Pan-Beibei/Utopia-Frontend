import { useState, useMemo, useEffect, Suspense } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { baseTheme, warmTheme } from "../../themes/themes";
import { ThemeContext } from "./ThemeContext";
import GlobalStyles from "../../styles/GlobalStyles";
import { setItemsPerPage, setPaginationButtons } from "../state/globalSlice";

const StyledLoading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
`;

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState({ ...baseTheme, ...warmTheme });
  const dispatch = useDispatch();

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
      <GlobalStyles />
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={contextValue}>
            <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
              {children}
            </Suspense>
          </ThemeContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default Providers;
