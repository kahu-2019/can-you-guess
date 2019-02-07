import React from 'react'
import Form from './Form'
import LocationDisplay from './LocationDisplay'
import WeatherDisplay from './WeatherDisplay'

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
    this.setState({
      city: inputCity,
      country: inputCountry,
      data: inputData
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Hello World!</h1>
        <Form sendData={this.getData}/>
        {/* <LocationDisplay locations={dbData}/>
        <WeatherDisplay weather={apiData}/> */}
      </div>
    )
  }
}

export default App