function CalenderHeader({viewDate,setViewDate}){
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month=viewDate.getMonth();
    const year=viewDate.getFullYear();
    function Prev(){
        let month=viewDate.getMonth();
        let year=viewDate.getFullYear();
        setViewDate(new Date(year,month-1,1));

    }
return(
        <>
        <div>
            {MONTHS[month]} {year}
            <button onClick={()=>Prev()}>Prev</button>
            <button onClick={()=>{setViewDate(new Date())}}>Today</button>
            <button onClick={()=>{setViewDate(new Date(viewDate.getFullYear(),viewDate.getMonth()+1,1))}}>Next</button>
        </div>
        </>
    )
}
export default CalenderHeader