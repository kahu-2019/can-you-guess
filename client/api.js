import request from 'superagent'

export function getWeather(inputCity, inputCountry) {
  return request.post('/api/')
    .send({city: inputCity, country: inputCountry})
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err)
    })
}