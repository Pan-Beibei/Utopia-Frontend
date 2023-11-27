import { useState, useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { warmTheme, coolTheme } from "./themes/themes";
import { ThemeContext } from "./themes/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { routes } from "./routes";

function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState(warmTheme);

  const router = useMemo(() => createBrowserRouter(routes), []);
  const contextValue = useMemo(
    () => ({
      toggleTheme: () => {
        setTheme(theme === warmTheme ? coolTheme : warmTheme);
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
