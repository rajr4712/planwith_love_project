import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

//App component Create 
 function App() {
  {/*useState used here ,All 7 city data in tours*/}
  const [tours, setTours] = useState(data);    {/*(data) variable pass coz all information about city is store data object in data.js in loc3*/}

  {/* its for Not iNTERESTED button loc 39 in card.js. (id) pass coz every city id is different so we remove accrding to id*/}
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);  
     setTours(newTours);  
 
 {/*loc14 : filtering(iterate and get data) from tours me se we click on jis v city id pe if its not equal tour.id (lets click on agra h id is 1 so uski tour id v 1 hai, and rest 2,3,4, to 7 not equal yo 1) so  rest allthese 6 city not so un sab ko newtours me daal denge, agara ko chor k*/}
 {/*loc 15: newtours set to setTours me to display on ui */}}
 {/* newTours to be what is left over after filtering out all of those removed ones. */}
    
  
 {/*if tour.length ===0 means All tour remove, then No Tour Left text comes and Refresh button */ }
  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>   {/*refresh button click pe wapas function create whr setTours(data) me all city data set kr k ui pe show*/}
            Refresh                                           
          </button>                     
        </div>
    );
  }
  {/*Tour componets pass*/}
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>    {/*Tours component render here,where tours variable me tours pass as a props(all 7city ka data*/}
    </div>
  )
};

export default App;
