import { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => { },
  lightTheme: () => { },
});

 const useTheme = () => useContext(ThemeContext);

 const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider, useTheme };
