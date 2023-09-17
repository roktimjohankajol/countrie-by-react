import { useState } from 'react';
import './Countrie.css';
const Countrie = ({countrie}) => {
    console.log(countrie)

    const {flags, name, cca3} = countrie;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className="countrieStyle">
                <img src={flags.png} alt="" />
                <h2>{name.common}</h2>
                <h2>{cca3}</h2>
                <button onClick={handleVisited}>{visited ? 'Visited' : 'visit'}</button>
                {visited ? 'I am visited this area' : 'I want visit this area'}
        </div>
    );
};

export default Countrie;