import { useEffect, useState } from 'react';
import './WeatherDetails.css';
import axios from 'axios';

export default function WeatherDetails({city, setCity}) {

    let [details, setDetails] = useState(null);
    let [error, setError] = useState(null);

    let apiKey = '5aa8e5ea2491281ae5c9479389f976a4';

    useEffect(() => {
        if (!city.trim()) {
            setError('Please enter a valid city name.');
            setDetails(null);
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(url).then((res) => {
            setDetails({
                city: res.data.name,
                country: res.data.sys.country,
                temperature: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                wind_speed: res.data.wind.speed,
                sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(),
                description: res.data.weather[0].description,
                icon: res.data.weather[0].icon
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

    let clearDetails = () => {
        setDetails(null);
        setCity('');
    };

    return (
        <>
            {error && <div className="wError">{error}</div>} 
            {details && <div className="detailsContainer">
                    <button className="wcloseButton" onClick={clearDetails}>
                        &times;
                    </button>
                    <div className="wCity">
                        {details.city}, {details.country}
                    </div>
                    <div className="wTemperature">{details.temperature}°C</div>
                    <div>Feels like: {details.feels_like}°C</div>
                    <div className="wDescription">{details.description}</div>
                    <img src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                        alt={details.description} title={details.description}
                    />
                    <div className="wInfo">
                        <div>Humidity: {details.humidity}%</div>
                        <div>Wind speed: {details.wind_speed} m/s</div>
                    </div>
                    <div className="wInfo">
                        <div>Sunrise: {details.sunrise}</div>
                        <div>Sunset: {details.sunset}</div>
                    </div>
                </div>
            }
        </>          
    ) 
}
