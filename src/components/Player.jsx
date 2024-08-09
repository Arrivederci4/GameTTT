import { useState } from "react";
//
export default function Player({initialName,symbol,isActive,onChangeName}){
    //one useState for player name change, 1 for edit button toggle
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    // handleEditButton
    function handleEdit(){
        //setIsEditing(isEditing?false:true)
        //setIsEditing(!isEditing) //scheduled event instead of instant
        setIsEditing((editing)=>!editing)
        if(isEditing){
            onChangeName(symbol,playerName)
        }
    }
    //handle NameChange Save
    function handleNameChange(event){
        setPlayerName(event.target.value)
    }
    let editableName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editableName=
            <input type="text" required value={playerName} onChange={handleNameChange}/>
    }
    //Return ALL
    return(
        <li className={isActive?'active':""}>
            <span className="player">
              {editableName}
              <span className="player-symbol">{symbol}</span>
              <button onClick={handleEdit}>{isEditing?'Save':"Edit"}</button>
            </span>
          </li>
    )
}