import React, { useState, useEffect } from 'react';
import '../App.css';

function MostImpacted() {
    const [scale, setScale] = useState('Counties');
    const [altScale, setAltScale] = useState('States');
    const [isLoaded, setIsLoaded] = useState(false);
    const [counties, setCounties] = useState(null);
    const [states, setStates] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/get_most_impacted_counties")
          .then(res => res.json())
          .then(
              (result) => {
                setCounties(result.counties);
                setIsLoaded(true);
            }
          );
        
        fetch("http://localhost:5000/get_most_impacted_states")
          .then(res => res.json())
          .then(
              (result) => {
                setStates(result.states);
            }
          );
    }, [])

    function toggleCountiesOrStates() {
        if (scale === 'Counties') {
            setScale('States');
            setAltScale('Counties');
        } else {
            setScale('Counties');
            setAltScale('States');
        };
        
    };

    if (isLoaded) {
        let locations = (scale === 'Counties') ? counties : states;
        return (
            <div className="MostImpacted">
                <h4>Most Impacted {scale}:</h4>
                <div>
                    <ol>
                        {locations.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                    </ol>
                </div>
                <button onClick={toggleCountiesOrStates}>View Most Impacted {altScale}</button>
            </div>
        );
    }
    return null;
}

export default MostImpacted;
