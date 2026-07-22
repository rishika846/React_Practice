function Toast({setToasts,toasts}){
    function handleClick(id){
        let newToasts=toasts.filter((toast)=>(toast.id!=id));
        setToasts(newToasts);
    }
    return(
        <>
        {toasts.length!=0 &&
        <div className="ToastContainer">
           {toasts.map(toast=>{
            return <div style={{backgroundColor:`${toast.color}`}} className="Toast" key={toast.id}>{toast.text} <span onClick={()=>handleClick(toast.id)}>x</span></div>
        })}

        </div>
}
        
        </>
    )
}
export default Toast