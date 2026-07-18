import { useState } from "react"

function Counter({count,handler}){
    return <button onClick={handler}>Click {count}</button>
}
export default Counter