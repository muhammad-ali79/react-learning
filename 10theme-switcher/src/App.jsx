import { useEffect, useState } from "react";
import { Themeprovider } from "./Contexts/themeContext";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  // here i am manipulating the context
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    // here i destructure the values that is give in the context and by extracting noting will happen so i have to also defined these in the upper before they are destrucure
    <Themeprovider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  );
}

export default App;

// here in App component story is that i need to update themeMode variable so in react we will only able to update the variable when we use the useState

// in Themerprovider we destructure the values and definded their reference upper before jsx. i set the lightTheme method to change the state variable (themeMode) to light and set the darkTheme to set the themeMode to dark

// and whenever the themeMode will change the useEffect callback will be called here we will give classes to the html

// and themeMode will change on the basic of checkbox checked or unchecked stauts
