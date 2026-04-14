import { useState } from "react"

export default function Counter(){
    let [count , setcount] = useState(0);  // initialization

    function incCount(){
        setcount(count + 1);
    }
    
    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={incCount}>Increase the count</button>
        </div>
    )
}