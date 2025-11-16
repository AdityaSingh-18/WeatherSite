import { useState } from 'react';
import WeatherDetails from './WeatherDetails.jsx';
import './WeatherSite.css';

export default function WeatherSite() {

    let [city, setCity] = useState('');
    let [details, setDetails] = useState(null);
    
    let handleCity = (event) => {
        event.preventDefault();
        setCity(event.target.city.value);
        event.target.reset();
    }
    
    return (
        <>
        <div className={`wContainer ${details ? 'blur' : ''}`}>
            <div className="wContent">
                <h1 className="wTitle">Weather Site</h1>
                <form className="wInputContainer" onSubmit={handleCity}>
                    <input className="wInput" type="text" name="city"
                     placeholder="Enter a City Name">
                    </input>
                    <button className="searchButton">Search</button>
                </form> 
                {city && <WeatherDetails city={city} setCity={setCity} 
                            details={details} setDetails={setDetails}/>}
            </div>
        </div>
    </>
  )
}
