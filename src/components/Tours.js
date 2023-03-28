import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>        {/*wrapper div where all content comes*/}
           
           {/*HEADING DIV */}
            <div>
                <h2 className='title'> MakeMy Trip JourNey ✈️ </h2> </div>
           
           {/*ALL CARD Under this div*/}
            <div className='cards'>
                {tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>  //removeTour is removing in App.js so card k under krane k liye ise yha pass
                    } )   
                }
            </div>
        </div>
    );
}

export default Tours;


{/*hamne cards k under all 7 card ko is tarah <card></card> 7 times naa likh kar by mapping function k through llikha loc 13,14*/}

{/*tours.map : tours wale data where all 7cities store usko map karaye and for ever single (tour) 
return a card where key is compulsory to pass and key me uniq identifier jis se recognize ho every city 
,pass always(otherwise give error), therefore key={tour.id}} , tour ki copy pass so har ek 7 tour card ki copy create to render and removeTour function for remove every single tour */}

{/* ...tour : tour copy kiye its spread opeartor*/}