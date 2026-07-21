import { useState } from "react";
import CalenderHeader from "./CalenderHeader";
import Modal from "./Modal";

function BuildMonth(year,month){
    let fullMonth=[]
    const firstDay=new Date(year,month,1).getDay();
    for(let i=0;i<firstDay;i++){
        fullMonth.push(null);
    }
    const TotalDays=new Date(year, month+1 ,0).getDate();
    for(let i=1;i<=TotalDays;i++){
        fullMonth.push(i);
    }
    return fullMonth;


}
export default function Calendar() {
  const WeekDays=['SUN','MON','TUE','WED','THURS','FRI','SAT']
  const [events,setEvents]=useState({})
      const [title,setTitle]=useState('')

  const [viewDate,setViewDate]=useState(new Date());//today
  let year=viewDate.getFullYear();
  let month=viewDate.getMonth();
  const cells=BuildMonth(year,month);
  const [selectedDate,setSelectedDate]=useState();

  function selectedDateHandler(date){
    if(date===null){
        setSelectedDate(null)
        return
    }
    let ans =new Date(year,month,date);
    setSelectedDate(ans)
  

}
function onSave(title){
    const key = selectedDate.toISOString().split("T")[0];
    setEvents(prev=>(
        {
        ...prev,
        [key]:[...(prev[key] || []),title ]

 } ))
    setSelectedDate(null)
    setTitle('')

}
console.log(events)
  return (
    <>
    <CalenderHeader viewDate={viewDate} setViewDate={setViewDate} ></CalenderHeader>
    <div className="grid">
        {WeekDays.map(day=>{
            return <div key={day} className="weekDay">{day}</div>
        })}
    </div>
      <div className="grid">
        {cells.map((date,idx)=>{
            if(date==null)return <div></div>
            

         const key = new Date(year, month, date).toISOString().split("T")[0];
         const dateEvents=events[key] || []
         return(
            <div
            key={idx}
            className="cell"
            onClick={() => selectedDateHandler(date)}
        >
            <div>{date}</div>

            {dateEvents.map(event=>{
                    return <p>{event}</p>
                })}
            </div>


         );
        })}
      </div>
    <Modal isOpen={selectedDate!==null}  selectedDate={selectedDate} setSelectedDate={setSelectedDate}
    onSave={onSave}
    title={title}
    setTitle={setTitle}></Modal>
    </>
  
  );
}