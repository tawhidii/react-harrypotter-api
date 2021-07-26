import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './CharCard.css'
const CharCard = (props) => {
    const {name,image,wand,house,patronus} = props.chars
    return (

            <div className="single-character-card">
                <div className='card'>
                    <img className ="char-image"src={image} alt="" />
                    <div className="info">
                        <h3>{name}</h3>
                        <h5>Wand core : {wand.core} </h5>
                        <h5>House Name: {house}</h5>
                        <h5>Petronus : {patronus ? patronus:"Not found"}</h5>
                        <button className="follow-button"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Follow</button>
                    </div>
                </div>    
            </div>

    );
};

export default CharCard;