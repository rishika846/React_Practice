import { useState } from "react"

function App(){
  const[text,setText]=useState("")
  function handleInputChange(e){
    setText(e.target.value);

  }
  function handleUndo(){
    

  }
  return(
    <>
    <div>
      <input type="text" placeholder="Write Your Text"  value={text} name="text"/>
    </div>
    <div>
      <button>Undo</button>
      <button>Redo</button>
    </div>
    </>
  )
}
export default App