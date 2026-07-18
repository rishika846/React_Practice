import { useState } from "react"
import Counter from "./counter";
function App(){
  //lifting space up
  const [count , setCount]=useState(0);
  function handler(){
    setCount(count+1)
  }
  return (
    <>
    <Counter count={count}  handler={handler}></Counter>
     <Counter count={count}  handler={handler}></Counter>
    </>
  )
}
export default App