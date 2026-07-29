import { use, useEffect, useState } from "react"

function App(){
  const [time,setTime]=useState({
    "hour":0,
    "minute":0,
    "seconds":0
  })
  const[isStart,setisStart]=useState(false);
  useEffect(()=>{ 
    if(!isStart)return
    let id=setInterval(()=>{
      setTime(prev=>{
        let copy={...prev}
        copy.seconds++
        if(copy.seconds>59){
          copy.minute++
          copy.seconds=0;
        }
        if(copy.minute>59){
          copy.hour++
          copy.minute=0
        }
        return copy
      })
    },1000)
    return ()=>clearInterval(id)
   

  },[isStart])
  function handleInput(e){
    let name=e.target.name;
    let value=Number(e.target.value);
    setTime(prev=>(
      {...prev,[name]:value}
    ))

  }
  function handleStart(){
    setisStart(prev=>!prev);

  }
  function handleReset(){
    setisStart(false)
    setTime({
      "hour":0,
      "minute":0,
      "seconds":0
    })
  }
  return(
    <>
    <input type="text" value={time.hour} onChange={handleInput} name="hour"/>:
    <input type="text" value={time.minute} onChange={handleInput} name="minute"/>:
    <input type="text"  value={time.seconds} onChange={handleInput} name="seconds"/>:
    <div>
      <button onClick={handleStart}>{!isStart?"Start":"Pause"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )

}
export default App