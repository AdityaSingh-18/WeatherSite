import './WeatherSite.css';

export default function WeatherSite() {
  return (
    <>
        <div className="weatherContainer">
            <h1 className="weatherTitle">Weather Site</h1>
            <form>
                <input type="text" className="weatherInput"></input>
                <button className="searchButton">Search</button> 
            </form>
            <div className="detailsContainer">
                <h3>City</h3>
                <p>Temp: 26C</p>
                <p>Sunny</p>
            </div>
        </div>
    </>
  )
}
