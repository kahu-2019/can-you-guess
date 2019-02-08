import request from 'superagent'

export function getWeather(inputCity, inputCountry) {
  return request.post('/api/getWeather')
    .send({city: inputCity, country: inputCountry})
    .then(res => {
      return res.body
    })
    .catch(err => {
        return res.status(500).send('API error')
    })
}

export function getLocations(){
    return request.get('/api/getLocations')
        .then(res => {
            return res.body
        })
        .catch(err => {
            return res.status(500).send('API error')
        })
}

export function addLocation(inputCity, inputCountry) {
    return request.post('/api/getLocations')
      .send({city: inputCity, country: inputCountry})
      .then(res => {
        return
      })
  }