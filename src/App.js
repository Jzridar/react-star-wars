
import './App.css';
import StarShipCard from './components/StarShipCard';
import getAllStarships from './services/sw-api';
import React, { useState, useEffect } from 'react'

function App() {

  const [starShips, setStarShips] = useState([])

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getAllStarships()
      .then(ships => {
        console.log(ships)
        setStarShips(ships);
        });
  }, [])


  return (
    <div className="App">
     <StarShipCard data={starShips}/>
    </div>
  );
}

export default App;
