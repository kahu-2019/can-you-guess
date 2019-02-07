import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
    }

  render(){
      return(
      <form>
          <label>Country: <input type="text" name="country" /></label>
          <label>City: <input type="text" name="city"/></label>
          <button>Submit</button>
      </form>  
      )  
  }  
}

export default Form