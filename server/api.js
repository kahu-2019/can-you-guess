const express = require('express')
const router = express.Router()
const request = require('superagent')


router.use(express.json())

router.post('/', (req, res) => {
    return getCity(req.body)
    .then(place => {
        return getWeather(place)
        .then(data => {
            return res.json(data)
        })
    })
    .catch(err => {
        res.status(500).send('1 error')
    })
})

function getCity(input){
    var city = encodeURI(`https://api.opencagedata.com/geocode/v1/json?key=b53078ada62e421992e1cb70df7558e3&q=${input.city}+${input.country}&abbrev=1&limit=1`)
    return request.get(city)
    .then(data => {
        var coords = {}
        coords.lat = JSON.parse(data.text).results[0].geometry.lat
        coords.long = JSON.parse(data.text).results[0].geometry.lng
        return coords
    })
    .catch(err => {
        res.status(500).send('Server error')
    })
}

function getWeather(place){
    return request.get(`https://api.darksky.net/forecast/a9dfec139f2489c8d9b399ccbe55db3c/${place.lat},${place.long}?units=ca`)
    .then(data => {
        return JSON.parse(data.text)
    })
    .catch(err => {
        res.status(500).send('Server error')
    })
}

module.exports = router