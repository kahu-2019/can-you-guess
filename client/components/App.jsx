import React from 'react'

import Form from './Form'
import LocationDisplay from './LocationDisplay'
import WeatherDisplay from './WeatherDisplay'

const dbData = [
  {id: 1, city: 'Auckland', country: 'New Zealand'}
]

const apiData = {
  "latitude": -41.1751,
  "longitude": 174.4625,
  "timezone": "Pacific/Auckland",
  "currently": {
    "time": 1549577229,
    "summary": "Clear",
    "icon": "clear-day",
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 17.57,
    "apparentTemperature": 17.57,
    "dewPoint": 8.78,
    "humidity": 0.56,
    "pressure": 1024.26,
    "windSpeed": 16.32,
    "windGust": 16.53,
    "windBearing": 355,
    "cloudCover": 0,
    "uvIndex": 7,
    "visibility": 12.87,
    "ozone": 287.03
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       locations: []
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Form />
        <LocationDisplay locations={dbData}/>
        <WeatherDisplay weather={apiData}/>
      </div>
    )
  }
}

export default App