import { useState } from "react"

function Modal({isOpen ,selectedDate ,setSelectedDate,onSave,title,setTitle}){
    function onClose(){
        setSelectedDate(null);

    }
    if(!isOpen)return null

    return(
        <div className="overlay">
        <h2>Write an Event Title</h2>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} onClick={(e)=>e.stopPropagation()}   />
        <button onClick={()=>onSave(title)}>Save</button>
        <button onClick={onClose}>Cancel</button>
        </div>
    )
}
export default Modal