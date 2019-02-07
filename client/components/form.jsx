import React from 'react'

class From extends React.Component {
    constructor(props) {
        super(props)
    }

  render(){
      <form>
          <label>Country: <input type="text" name="country" /></label>
          <label>City: <input type="text" name="city"/></label>
          <button>Submit</button>
      </form>    
  }  
}

export default Form