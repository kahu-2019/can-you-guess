import React from 'react'
import Form from './Form'

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

  render(){
    console.log(this.state)
    return (
      <div>
      <Form sendData={this.getData}/>
      </div>
    )
  }
}

export default App