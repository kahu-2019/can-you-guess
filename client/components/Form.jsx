import React from 'react'
import {getWeather} from '../api'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            city: undefined,
            country: undefined,
            data: undefined
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        return getWeather(this.state.city, this.state.country)
        .then(result => {
            this.setState({data: result})
            this.props.sendData(this.state.city, this.state.country, this.state.data)
        })
        
    }

    render(){
      return(
      <form onSubmit={this.handleSubmit}>
          <label>City: <input type="text" name="city" onChange={this.handleChange}/></label>
          <label>Country: <input type="text" name="country" onChange={this.handleChange}/></label>
          <input type="submit" value="Submit" />
      </form>  
      )  
  }  
}

export default Form