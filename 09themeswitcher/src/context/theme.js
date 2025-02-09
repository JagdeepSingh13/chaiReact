import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // variable
  themeMode: "light",
  // method
  darkTheme: () => {},
  lightTheme: () => {},
  // jusk like useState() in 08minicontext
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
