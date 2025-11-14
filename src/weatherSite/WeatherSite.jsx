import { useState } from 'react';
import {weatherDetails} from './Weather.jsx';
import './WeatherSite.css';

export default function WeatherSite() {

    let [city, setCity] = useState("");
    let [details, setDetails] = useState({});

    let handleCity = (event) => {
        event.preventDefault();
        setCity(event.target.city.value);
        handleDetails();
    }

    let handleDetails = () => {
        let cityDetails = weatherDetails.find(v => v.city === city);
        setDetails(cityDetails || {});
    };

    return (
    <>
        <div className="wContainer">
            <div className="wContent">
                <h1 className="wTitle">Weather Site</h1>
                <form className="wInputContainer" onSubmit={handleCity}>
                    <input className="wInput" type="text" name="city"
                     placeholder="Enter a City Name">
                    </input>
                    <button className="searchButton">Search</button>
                </form> 
                <div className="detailsContainer">
                    <div className="wCity">{details.city}</div>
                    <div className="wTemperature">{details.temperature}</div>
                    <div className="wDescription">{details.description}</div>
                </div>
            </div>
        </div>
    </>
  )
}
