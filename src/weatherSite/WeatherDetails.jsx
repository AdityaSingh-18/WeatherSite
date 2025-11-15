import { useEffect, useState } from 'react';
import './WeatherDetails.css';
import axios from 'axios';

export default function WeatherDetails({city}) {

    let [details, setDetails] = useState({});

    let apiKey = '5aa8e5ea2491281ae5c9479389f976a4';

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(url).then((res) => {
            setDetails({
                city: res.data.name,
                temperature: res.data.main.temp,
                description: res.data.weather[0].description,
            });
        });
    }, [city]);

    return (
        <div className="detailsContainer">
            <div className="wCity">{details.city}</div>
            <div className="wTemperature">{details.temperature}</div>
            <div className="wDescription">{details.description}</div>          
        </div>
    ) 
}
