import { useState } from "react"

const Card = ({el}) => {
    
    const [displayStatus, SetDisplayStatus] = useState(false)

    const show = () =>{
        SetDisplayStatus(true)
    }

    const hide = () =>{
        SetDisplayStatus(false)
    }

    const displayHandler = () =>{
        if(displayStatus=== true){
            hide()

        }else{
            show()
        }
    }

   if (displayStatus) {
    return ( 
        <div className="card">
            <img src={el.image} alt={el.name} />
            <h2>{el.name}</h2>
            <button onClick={()=>{
                displayHandler()
            }}>hide</button>
        </div>
     );
   } else {
    return (
        <div className="HiddenCard">
            <button onClick={()=>{
                displayHandler()
            }}>show</button>
        </div>
    )
   }
}
 
export default Card;