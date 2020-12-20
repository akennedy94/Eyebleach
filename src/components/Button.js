import React from 'react';
import '../cssSheets/componentStyling.css';

const Button = ({displayState, handleClick, dog}) => {
    
    if (displayState){
        return (
            <div>
                <div className="image-container">
                    <div className="dog-image-wrapper">
                        <img className="dog-image" src={dog} alt="Cute doggy"></img> 
                    </div>
                </div>
                <div className="get-dog-button-wrapper">
                    <button type="button" onClick={handleClick} className="get-dog-button">Show me another dog!</button>
                </div>
            </div>
            
        )
    } else return (
        <div className="get-dog-button-wrapper">
            <button type="button" className="get-dog-button" onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default Button;