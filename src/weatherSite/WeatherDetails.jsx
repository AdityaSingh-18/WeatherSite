import { useEffect, useState } from 'react';
import './WeatherDetails.css';
import axios from 'axios';

export default function WeatherDetails({city}) {

    let [details, setDetails] = useState({});
    let [error, setError] = useState(null);

    let apiKey = '5aa8e5ea2491281ae5c9479389f976a4';

    useEffect(() => {
        if (!city.trim()) {
            setError('Please enter a valid city name.');
            setDetails({});
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(url).then((res) => {
            setDetails({
                city: res.data.name,
                temperature: res.data.main.temp,
                description: res.data.weather[0].description,
            });
            setError(null);
        })
        .catch((err) => {
            err.response && err.response.status === 404
                ? setError('City not found.')
                : setError('An error occurred. Please try again later.');
            setDetails(null);
        });
    }, [city]);

    return (
        <>
            {error  
                ?<div className="wError">{error}</div> 
                :<div className="detailsContainer">
                    <div className="wCity">{details.city}</div>
                    <div className="wTemperature">{details.temperature}</div>
                    <div className="wDescription">{details.description}</div>
                </div>
            }
        </>          
    ) 
}
