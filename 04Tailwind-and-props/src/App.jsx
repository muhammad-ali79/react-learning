import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    userName: "hitesh",
    link: "go to darkweb",
  };

  const myArr = [1, 2, 3, 4, 5];
  const random = Math.ceil(Math.random());

  return (
    <>
      <button className="bg-blue-500 p-4 rounded-md text-white border-none outline-none">
        Click Me
      </button>
      <Card userName="Sam" link="Gotogithub" />
      <Card {...myObj} />
      <Card {...myArr} />
      <Card userName="Nix" link="go to react.dev" id={random} />
    </>
  );
}

export default App;

// to pass data between react components we use props in which we give data in the place where we use the component and pass it where we defined it using destructing and .notation because return object of
