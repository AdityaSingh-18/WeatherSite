import { useEffect, useState } from 'react';
import {weatherDetails} from './Weather.jsx';
import './WeatherDetails.css';

export default function WeatherDetails({city}) {

    let [details, setDetails] = useState({});

    useEffect(() => {
        let cityDetails = weatherDetails.find(v => v.city === city);
        setDetails(cityDetails || {});
    }, [city]);

    return (
        <div className="detailsContainer">
            <div className="wCity">{details.city}</div>
            <div className="wTemperature">{details.temperature}</div>
            <div className="wDescription">{details.description}</div>          
        </div>
    ) 
}
