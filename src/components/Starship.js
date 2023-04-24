

function StarShip(props) {
  let starship = props.data
  console.log(`starShips ${starship}`)

  return (
   
      <>{starship.name}</>
 
  )
}

export default StarShip