import Card from "./Card";
import cards from "../db/db";


const CardList = () => {

    return ( 
        <div className="cards">
            {
                cards.map((el,index)=>{
                    return <Card key={index} el={el}  ></Card>
                })
            }
        </div>
     );
}
 
export default CardList;