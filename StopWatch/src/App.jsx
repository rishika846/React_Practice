import { useEffect, useState } from "react"

function App(){
    const [isStart ,setIsStart]=useState(false);
      const [time,setTime]=useState({
    "hour":0,
    "minute":0,
    "second":0
  })

  useEffect(()=>{
    if(time.second==0 && time.minute==0 && time.hour ==0)return

    if(isStart){
      const id=setInterval(()=>{
      setTime(prev=>{
        if(prev.second==0 && prev.minute>0){
        let copyTime={...prev};
        copyTime.second=59;
        copyTime.minute-=1;
        return copyTime

        }
        else if(prev.hour>0 && prev.minute===0 && prev.second==0){
        let copyTime={...prev};
        copyTime.second=59;
        copyTime.minute=59;
        copyTime.hour-=1
        return copyTime
       }
       else if (prev.hour==0 && prev.minute==0 && prev.second===0){
        setIsStart(false);
        return {"hour":0,"minute":0,"second":0}
       }
        else{
          return {...prev,second:prev.second-1}

        }

      }
      
      )
    },1000)
    return () => clearInterval(id);

  }

    
  },[isStart,time])

  function handleChange(e){
    if (isNaN(e.target.value)) return;
    let value=Number(e.target.value);
    let name=e.target.name;

    setTime(prev=>{
      let copyTime={...prev};
      copyTime[name]=value;
      copyTime.minute+=Math.floor(copyTime.second/60);
      copyTime.second%=60;
      copyTime.hour+=Math.floor(copyTime.minute/60);
      copyTime.minute%=60;
      return copyTime;
    })
  }

  
  function handleStart(){
    setIsStart(prev=>!prev);

  }
  function handleReset(){
    setIssta(false);
    setTime({
      "hour":0,
      "minute":0,
      "second":0
    })
  }
  return (
    <>
    <div className="Outer">
      <div>StopWatch</div>
      <div className="Container">
      <input  className="input" type="text" placeholder="HH" value={time.hour} name="hour" onChange={handleChange} />:
      <input className="input" type="text" placeholder="MM" value={time.minute} name="minute" onChange={handleChange}/>:
      <input className="input" type="text" placeholder="SS" value={time.second} name="second" onChange={handleChange}/>
    </div>
    <div >
        <button className="Button" onClick={handleStart} >{isStart?"Pause":"Start"}</button>
        <button className="Button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  
    </>
  )

}
export default App