
import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [max , setMax] =useState(1)

function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
function handleMax(e){
  setMax(Number(e.target.value))
}
  return (
    <div className="App">
      useState
     <input type = "number" value = {delta} onChange = {handleDelta}/>
     <input type = "number" value = {max} onChange = {handleMax}/>
     <Counter delta = {delta} max ={max}/>
     <Counter delta = {delta} max ={max}/>
    </div>
  );
}

export default App;
