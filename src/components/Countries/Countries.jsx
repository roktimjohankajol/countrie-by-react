import { useEffect, useState } from "react";
import Countrie from "./Countrie";
import './Countrie.css'

const Countries = () => {
    const [countries, setCountries] = useState([]); 

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    return (
        <div>
            <h1>Roktim Johan Kajol : {countries.length}</h1>
            <div className="countrie-container">
                {
                    countries.map(countrie => <Countrie key={countrie.cca3} countrie={countrie}></Countrie>)
                }
            </div>
        </div>
    );
};

export default Countries;