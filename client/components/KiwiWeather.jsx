import React from 'react'

const KiwiWeather = (props) => {
    const values = props.weather.data.currently
    const temp = values.temperature;
    const wind = values.windSpeed
    console.log(typeof(temp))

    let tempRes = '';
    let windRes = '';

    if (temp > 25) {
        tempRes = 'Strewth shes a blood scorcher today mate!'
    } else if (temp > 20) {
        tempRes = 'Great day for it mate!'
    } else if (temp > 15) {
        tempRes = 'Not a bad one out there today bro'
    } else if (temp > 10) {
        tempRes = 'Mate its colder than my Mother-in-laws heart out there!'
    }

    if (wind > 30) {
        windRes = 'Make sure you batten down the hatches, its blowing a bloody gale!'
    } else if (wind > 20) {
        windRes = 'Its  a classic Wellington breezer!'
    } else if (wind > 10) {
        'Its as calm as a millpond.'
    }

    return (
        <div>
            <h1> Kiwi Weather</h1>
            <p>{tempRes} {windRes}</p>
        </div>
    )
}

export default KiwiWeather 