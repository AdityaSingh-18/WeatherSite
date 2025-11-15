import { useState } from 'react';
import WeatherDetails from './WeatherDetails.jsx';
import './WeatherSite.css';

export default function WeatherSite() {

    let [city, setCity] = useState({});
    
    let handleCity = (event) => {
        event.preventDefault();
        setCity(event.target.city.value);
        event.target.reset();
    }

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
                <WeatherDetails city={city}/>
            </div>
        </div>
    </>
  )
}
