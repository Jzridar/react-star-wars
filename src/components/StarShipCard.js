import StarShip from './Starship';

 function StarShipCard(props) {
  let starShip = props.data
  console.log(`starShip ${starShip}`)

  return (
    <div className='column'>
      <StarShip data={starShip}/>
    </div>
     
  )
}

export default StarShipCard