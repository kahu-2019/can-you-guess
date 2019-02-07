const express = require('express')
const router = express.Router()
const request = require('superagent')

const geoDataAPI = `https://api.opencagedata.com/geocode/v1/json?key=b53078ada62e421992e1cb70df7558e3&q=${input.city}+${input.country}&abbrev=1&limit=1`
const darkSkyAPI = `https://api.darksky.net/forecast/a9dfec139f2489c8d9b399ccbe55db3c/${place.lat},${place.long}?units=ca`


router.use(express.json())

router.post('/', (req, res) => {
    return getCity(req.body)
    .then(place => {
        return getWeather(place)
    })
    .catch(err => {
        res.status(500).send('Server error')
    })
})

function getCity(input){
    return request.get(geoDataAPI)
    .then(data => {
        var coords = {}
        coords.lat = data.results[0].annotations.geometry.lat
        coords.long = data.results[0].annotations.geometry.long
        return coords
    })
    .catch(err => {
        res.status(500).send('Server error')
    })
}

function getWeather(place){
    return request.get(darkSkyAPI)
    .then(data => {
        return res.json(data)
    })
    .catch(err => {
        res.status(500).send('Server error')
    })
}

module.exports = router