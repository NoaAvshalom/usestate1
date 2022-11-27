import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const [count, setCount] = useState(1)
    const {max} = props
    function incr(){
        setCount(
            function(oldCount){
                if ((oldCount+ delta)<= max){
                return oldCount + delta
            }
            else {return 0}
        }    
        )
    }
    function reset(){
        setCount(0)
        
    }
    
    return (
      <div >
      <h1>Counter</h1>
      <p>Counter is at {count}</p>
      <button onClick={incr}> Click to add {delta} to Counter</button>
      <button onClick={reset}> Click to reset Counter</button>
      </div>
    );
  }
  
  export default Counter;
  