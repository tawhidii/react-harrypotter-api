import React, { useEffect, useState } from 'react';
import CharCard from '../CharCard/CharCard';
import './Character.css'
const Character = () => {
    const [character,setCharacter] = useState([])
    useEffect(()=>{
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response=>response.json())
        .then(data=>setCharacter(data))
    },[])
    return (
        <div className="wrapper">
            {
                character.map(char=><CharCard key={char.actor} chars={char}></CharCard>)
            }
        </div>
    );
};

export default Character;