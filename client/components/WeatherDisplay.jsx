import React from 'react'

const WeatherDisplay = (props) => {
    const values = props.weather.currently
    return (
        <div>
            <h1>Weather</h1>
            <p>{values.summary}</p>
            <p>{values.temperature}</p>
        </div>
    )
}

export default WeatherDisplay 