import { useEffect, useState } from "react"

function App(){
  const[isStart ,setIsStart]=useState(false);

  const[time,setTime]=useState({
    "hour":0,
    "minutes":0,
    "seconds":0
  });
  useEffect(()=>{
    if(!isStart)return
    let id=setInterval(()=>{
      setTime(prev=>{
        let copyTime={...prev}
        copyTime.seconds++
        if(copyTime.seconds>=60){
          copyTime.minutes+=1;
          copyTime.seconds=0
        
        }
        if(copyTime.minutes>=60){
          copyTime.hour+=1;
          copyTime.minutes=0;
          copyTime.seconds=0; 
        }
        return copyTime

      })
    },1000)
    return ()=>clearInterval(id)
  },[isStart])

  function handleStart(){
    setIsStart(prev=>!prev);
  }
  function handleReset(){
    setIsStart(false);
    setTime({
      "hour":0,
      "minutes":0,
      "seconds":0
    })
  }
  return(
    <>
    <div>
     <input className="input" type="text" placeholder="HH"  value={time.hour} name="hour"/>:
     <input className="input" type="text" placeholder="MM" value={time.minutes} name="minutes"/>:
     <input className="input" type="text" placeholder="SS" value={time.seconds} name="seconds" />
    </div>
    <div>
      <button className="button" onClick={handleStart}>{!isStart?"Start":"Pause"}</button>
      <button className="button" onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}
export default App