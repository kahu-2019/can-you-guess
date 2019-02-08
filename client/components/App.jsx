import React from 'react'
import Form from './Form'
import LocationDisplay from './LocationDisplay'
import WeatherDisplay from './WeatherDisplay'

import {addLocation} from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: undefined,
      country: undefined,
      data: undefined
    }

    this.getData = this.getData.bind(this)
  }

  getData(inputCity, inputCountry, inputData) {
    addLocation(inputCity, inputCountry)
    this.setState({
      city: inputCity,
      country: inputCountry,
      data: inputData
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Hello World!</h1>
        <Form sendData={this.getData}/>
        {(this.state.country || this.state.city) && <div>
          <LocationDisplay state={this.state}/>
          <WeatherDisplay weather={this.state}/> */}
        </div>}
      </div>
    )
  }
}

export default App