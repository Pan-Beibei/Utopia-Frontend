import { useState, useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";

import { TextProvider } from "./contexts/TextContext";
import { warmTheme, coolTheme } from "./themes/themes";
import { ThemeContext } from "./themes/ThemeContext";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
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
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={contextValue}>
          <TextProvider>
            <RouterProvider router={router} />
          </TextProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
