import { useState } from "react"

export default function Team(){
  const [team , setTeam] = useState(11);
  const handleAdd = () =>{
    setTeam(team + 1);
  }
  const handleReduce = () =>{
    setTeam(team - 1);
  }
  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '20px'
  }
  return(
    <div style={teamStyle}>
      <h3>Team: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}