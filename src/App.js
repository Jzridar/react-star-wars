
import './App.css';
import StarShipCard from './components/StarShipCard';
import Header from './components/Header';
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
    <>
    <Header />
    <div className='row'>
      {starShips.results &&
        starShips.results.map((starship) => (
          <StarShipCard data={starship} />
        ))}
    </div>
    </>
  );
}

export default App;
