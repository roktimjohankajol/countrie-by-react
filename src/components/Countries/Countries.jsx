import { useEffect, useState } from "react";
import Countrie from "./Countrie";
import './Countrie.css'

const Countries = () => {
    const [countries, setCountries] = useState([]); 
    const [visitedCountries, setVisitedCountries]= useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountries = (countrie) => {
        console.log('add this visited countries')
        // console.log(countrie)
        const newVisitedCountries = [...visitedCountries, countrie]; 
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>Roktim Johan Kajol : {countries.length}</h1>
            <h2>Visited Countrie list : {visitedCountries.length} </h2>
            <ul className="flagStyle">
                {
                    visitedCountries.map( countrie => <img src={countrie.flags.png}></img>)
                }
            </ul>
            <div className="countrie-container">
                {
                    countries.map(countrie => <Countrie key={countrie.cca3} 
                        countrie={countrie}
                        handleVisitedCountries={handleVisitedCountries}
                        ></Countrie>)
                }
            </div>
        </div>
    );
};

export default Countries;