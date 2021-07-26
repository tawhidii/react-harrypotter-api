import React, { useEffect, useState } from 'react';
import CharCard from '../CharCard/CharCard';
import './Character.css'
const Character = () => {
    const [character,setCharacter] = useState([])
    const [follow,setFollower] = useState([])
    console.log(follow)
    useEffect(()=>{
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response=>response.json())
        .then(data=>setCharacter(data))
    },[])
    // follow button event 
    const handleFollow = (character)=>{
        let charFollower = [...follow,character]
        setFollower(charFollower)
    }

    // total of birthyear 
    let birthyearTotal = follow.reduce((sum,f)=>{
        return sum + f.yearOfBirth
    },0)
    console.log(birthyearTotal)
    return (
        <div>
            <div className="follower-cart">
                <h1>Follow  Count: {follow.length}</h1>
                <h1>Sum of year of birth : {birthyearTotal}</h1>
            </div>
            <div className="wrapper">
            
                {
                    character.map(char=><CharCard key={char.actor} chars={char} handleFollow={handleFollow}></CharCard>)
                }
            </div>
           

        </div>
    
    );
};

export default Character;