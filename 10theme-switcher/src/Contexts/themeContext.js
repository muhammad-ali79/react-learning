import { createContext, useContext } from "react";

// first we make a contex and set its initial value so that we can use this in our components everywhere
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// here we are providing the context to the elements because we will wrap elements in the ThemeProvider so that the elements can use the context
export const Themeprovider = ThemeContext.Provider;

// by wrapping along noting will happen so we also have to use the context by using the use Context hook
// here we are making a hook to use the context using the useContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
