import { useState } from "react";

//card component create where id,image ,price,name,information from data,js ,and removeTour
function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);    {/*useState used coz ui upadte b/w readmore and setreadmore(showless), readmore is text when you clcik then show extra information about city,setReadmode is showless when click Readmore text hide , At starting its false dts y false pass as a parameter*/}
    
    {/*if readmore is True then full info about city written in info array loc in data.js loc 7,14 etc, if not ${info.substring(0,200)} - only 200 character show of info*/}
    const description = readmore ? info :`${info.substring(0,200)}....`;
    
    function readmoreHandler() {
        setReadmore(!readmore);       {/*its switch b/w readmore and setReadmore(showless) To make TRue or false when click*/}
    }


    return (
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>    {/*tour Price heading container*/}
                    <h4 className="tour-name">{name}</h4>        {/*city name display here*/} 
                </div>

               {/*City information contain in this div*/}
                <div className="description">
                    {description}                                  {/*description is starting information show about city*/}
                    <span className="read-more" onClick={readmoreHandler}>   {/*when click to span Text readmoreHandler() eventlistner called loc10 */}
                        {readmore ? `Show Less`: `Read More`}           {/*Terniary Opeartor use*/}
    {/*if Readmore is true(when click) then showLess span text show if not readmore span text show*/}
                    </span>
                </div>
            </div>
            
          {/*NOt Interested Button Red button, */}
        <button className="btn-red" onClick={() => removeTour(id)}> {/*when u click on this button removeTour fucntion call wch is in App.js loc12 , id pass coz jis city id pe click karenge only this city card remove from screen*/ }
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;