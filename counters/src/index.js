 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
 // const [counter, setCounter] = ... ; // muutuja ja muutuja “setter”
 // const updateCounter = () => { ... } // funktsioon
 // return ( ... ) // JSX
}
 
const App = () => {
return (
  <main>
    <h1>Counters</h1>
    <Counter step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>
  </main>
);
};
 
ReactDOM.render(<App />, document.getElementById("root"));