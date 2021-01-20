import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
  const [counter, setCounter] = useState(0) ; // muutuja ja muutuja “setter”
  const updateCounter = () => { 
    if (counter <0){
      console.log("Limit reached")
    
  } else {
    setCounter(counter - props.step)
  }
   } // funktsioon
  return ( 

    
    <div class ="step">
      <h1>step: {props.step}</h1>
      <div class= "box">
        <button  onClick={() => updateCounter("-")}>-</button>
        <h1> {counter} </h1>
      <button  onClick={() => updateCounter("+")}>+</button>
      </div>
      
    </div>
    
    ) // JSX
}
 
const App = () => {
return (
  <main>
    <h1 class="title">Counters</h1>
    <Counter step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>
  </main>
);
};
 
ReactDOM.render(<App />, document.getElementById("root"));