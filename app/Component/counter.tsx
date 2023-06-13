import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }
        const decrementCounter = () => {
            setCount(count - 1);
        }
    

 const resetCounter = () => {
            setCount( 0 );
        }

 return (

<div>
    <h1 className="componentHeading">Counter</h1>
    <p className= {count>10? "countLabel":''} >Count: {count}</p>
   <button className="fancyButton" onClick={() => incrementCounter()}>Increment</button>
   <button className="fancyButton" onClick={() => decrementCounter()}>Decrement</button>
   <button className="fancyButton" onClick={() => resetCounter()}>Reset</button>



</div>
   )
 } 


export default Counter;

function setCount(arg0: number) {
    throw new Error("Function not implemented.");
}
