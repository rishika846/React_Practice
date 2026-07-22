function Button({text ,toasts,setToasts ,color}){
    function handleClick(){
        let newToasts=toasts;
        let id=new Date().getTime();
        newToasts=[...newToasts,{"id":id,"text":text ,"color":color}]
        setToasts(newToasts);
        setTimeout(()=>{
            setToasts(prev=>prev.filter(toast=>toast.id!=id))

        },4000);


    }
    return(
        <>
        <button  style={{backgroundColor:`${color}`}}className="Button" onClick={handleClick}>{text}</button>
        </>
    )

}
export default Button