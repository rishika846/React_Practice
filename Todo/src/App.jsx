import { useState } from "react"

function App(){
  const [task,setTask]=useState("");
  const [todoList,setTodoList]=useState([]);
  function handleInput(e){
    e.preventDefault();
    setTask(e.target.value);
  }
  function handleAdd(){
    setTodoList(prev=>([...prev,task]));
    setTask("")

  }
  function handleDelete(index){

    let res=[]
    for(let i=0;i<todoList.length;i++){
      if(i===index)continue
      res.push(todoList[i]);
    }
    console.log(res);
    setTodoList(res);




  }
  return(
    <>
    <div>
     <input type="text" placeholder="write your tasks " value={task} name="task" onChange={handleInput}/>
    </div>
    <button onClick={handleAdd}>Add</button>
    {todoList.length>0 && 
    <ul>
      {todoList.map((task,i)=>{
      return <div key={i}>
        <li>{task}</li>
        <button onClick={()=>handleDelete(i)} > { "Delete"}</button>
      </div>
      
    })
  }</ul>}
    </>
  )
}
export default App