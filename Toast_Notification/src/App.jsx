import { useState } from "react"
import Button from "./Button"
import Toast from "./Toast"
function App(){
  const [toasts,setToasts]=useState([])
  return(
    <>
    <div className="AppContainer">
   <Toast toasts={toasts} setToasts={setToasts} ></Toast>
   <Button text="Sucess" toasts={toasts} setToasts={setToasts} color="green"></Button>
   <Button text="Info" toasts={toasts} setToasts={setToasts} color="blue"></Button>
   <Button text="Warning" toasts={toasts} setToasts={setToasts} color="orange"></Button>
   <Button text="Error"  toasts={toasts} setToasts={setToasts} color="red"></Button>

    </div>
 
   
    </>
  )
}
export default App