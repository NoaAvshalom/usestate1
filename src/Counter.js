import { useState, useEffect } from "react";

function Counter(props) {
    const {delta,maxCounter, getReset,needToReset,getMax} = props
    const [count, setCount] = useState(1)
    
    useEffect(()=>{
      if (needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset, getReset])


    function incr(){
        setCount(
            function(oldCount){
                if (oldCount+ delta > maxCounter) return 0
                getMax(oldCount+ delta)
                return oldCount + delta
            
          
            }    
        )
    }
    function reset(){
        getReset(true)
        //setCount(0)
        
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
  
