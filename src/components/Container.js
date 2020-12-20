import React, {useState, useEffect} from 'react';
import Button from './Button';
import axios from 'axios';
import '../cssSheets/componentStyling.css'
const apiURL = 'https://dog.ceo/api/breeds/image/random';

const Container = () => {
    const [dog, setDog] = useState();
    const [buttonClicked, setButtonClicked] = useState(false);

    async function getDog() {
        const array = 
            await axios.get(apiURL)
                .then(data => {
                    console.log(data.data.message);
                    setDog(data.data.message);
                })
                .catch(error => console.log(error))
    }

    const handleClick = () => {
        if(!buttonClicked){
            setButtonClicked(true);
        } else {
            getDog();
        }
    }

    useEffect(() => {
        getDog();
    }, [])

    return (
            <div className="get-dog-button-container"> 
                <Button displayState={buttonClicked} handleClick={handleClick} dog={dog} />
            </div>
    )
}

export default Container;