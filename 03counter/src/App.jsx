import { useState } from "react";

function App() {
  const [Counter, manageConter] = useState(1);

  // counter is a state variable thats why i am able to change it

  const increaseCounter = () => {
    if (Counter > 20) return;
    // manageConter(Counter + 1);
    // manageConter(Counter + 1);
    // manageConter(Counter + 1);
    // manageConter(Counter + 1);

    // these will not update the counter as intended because react uses fiber to give all the these as one batch and in the one batch the counter value will be same in all calls

    manageConter((prevCounter) => prevCounter + 1);
    manageConter((prevCounter) => prevCounter + 1);

    // by doing this we take the last  updated value of the state from the state updated method and increase it
    console.log(Counter);
  };

  const decreaseCounter = () => {
    if (Counter < 1) return;
    manageConter(Counter - 1);
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
