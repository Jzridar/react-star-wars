

 function StarShipCard(props) {
  let starShips = props.data
  console.log(`starShips.count ${starShips.count}`)

  return (
    <div className='StarShipCard'>
    { starShips.results &&
      starShips.results.map((starship) => (
        <div>{starship.name}</div>
    ))}
     </div>
  )
}

export default StarShipCard