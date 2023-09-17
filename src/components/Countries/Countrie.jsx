import { useState } from 'react';
import './Countrie.css';
const Countrie = ({countrie, handleVisitedCountries}) => {
    console.log(countrie)

    const {flags, name, cca3} = countrie;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`countrieStyle ${visited && 'visited'}`}>
                <img src={flags.png} alt="" />
                <h2 style={{color: visited ? 'blue' : 'red'}}>{name.common}</h2>
                <h2>{cca3}</h2>
                <button onClick={() => handleVisitedCountries(countrie)}>Mark Visited</button><br />
                <button onClick={handleVisited}>{visited ? 'Visited' : 'visit'}</button>
                {visited ? ' I am visited this area' : ' I want visit this area'}
        </div>
    );
};

export default Countrie;