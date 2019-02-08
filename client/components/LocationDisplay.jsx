import React from 'react'
import {getLocations} from '../api'

// const LocationDisplay = (props) => {
//     return (
//         <div>
//             <h1>Locations</h1>
//             {/* {props.locations.map((item, i) => <p key={i}>{item.city}, {item.country}</p>)} */}
//         </div>
//     )
// }


class LocationDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        getLocations()
        .then()
        this.setState({
        })
    }

    render() {
        console.log('values', getLocations())
        return(
            <div>
                <h1>Locations</h1>
            </div>
        )
    }
}

export default LocationDisplay