import React from 'react'

const WeatherDisplay = (props) => {
    const values = props.weather.data.currently
    return (
        <div>
            <h1>Weather</h1>
            <p>The temperature is {values.temperature} degrees and the wind-speed is {values.windSpeed}km/h</p>
        </div>
    )
}

export default WeatherDisplay 