import { useState } from "react"

export default  function Likebutton(){
    let [change , setChange] = useState(false)
        let toggleButton = () => {
            setChange(!change);
        }

        // console.log("clicked");


    return(
        <div >
            <p onClick={toggleButton}>
                {
                    change ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    )
}