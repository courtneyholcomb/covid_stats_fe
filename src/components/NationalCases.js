import React, { useState, useEffect } from 'react';
import '../App.css';


function NationalCases() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cases, setCases] = useState(null);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/get_national_cases")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCases(result.national_cases);
          setUpdated(result.date)
        }
      );
    }, []);
  
  if (isLoaded) {
    return (
        <div className="NationalCases">
            <h4>National COVID-19 Cases:</h4>
            <br/>
            <h1>{cases}</h1>
            <br/>
            Updated {updated}
        </div>
      );
  }
  return null; 
}

export default NationalCases;
