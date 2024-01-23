import { useState } from "react";

function App() {
  let [Counter, manageConter] = useState(1);

  const increaseCounter = () => {
    if (Counter > 20) return;
    manageConter((Counter = Counter + 1));
    console.log(Counter);
  };

  const decreaseCounter = () => {
    if (Counter < 1) return;
    manageConter((Counter = Counter - 1));
    console.log(Counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={increaseCounter}>{Counter}+</button>
      <button onClick={decreaseCounter}>{Counter}-</button>
    </>
  );
}

export default App;

// to sync the state mean data with the dom we need to use the useState hook

// useState hook give two values first the actuall varible and second is the function to change the value this variable

// on the using of useState updation method the react look into the dom and change the value immediately in the dom whereever need
