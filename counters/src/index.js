import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props,sign) => {
  const [counter, setCounter] = useState(0) ; // muutuja ja muutuja “setter”
  const updateCounter = () => { 
    if (sign == "+") {
      if (counter >=10){
        console.log("Limit reached")
      } else if ( counter <10) {
        setCounter(counter + props.step)
      }

    } else if (sign == "-") {
      if (counter <=0){
        console.log("Limit reached")
      } else if ( counter > 0) {
        setCounter(counter - props.step)
      }
    }
    
   } // funktsioon
  return ( 

    
    <div class ="step">
      <h1>step: {props.step}</h1>
      <div class= "box">
        <button  onClick={() => updateCounter(sign= ["-"] )}>-</button>
        <h1> {counter} </h1>
      <button  onClick={() => updateCounter(sign= ["+"])}>+</button>
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