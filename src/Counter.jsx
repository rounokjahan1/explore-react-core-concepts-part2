import { useState } from "react"

export default function Counter(){
  const [count, setCounter] = useState(0);
  const handleAdd = () =>{
    const newCount = count + 1;
    setCounter(newCount);
  }
  const handleReduce = () =>{
    const newCount = count - 1;
    setCounter(newCount);
  }
  
  return(
    <div style={{border: '2px solid yellow'}}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>

  )
}