const knex = require ('knex')
const config = require ('../../../knexfile').development
const db = knex(config)

function getLocations() {
    return db('locations').select()
}

function addLocation(place) {
    return db('locations').insert(place)
}

module.exports = {
    getLocations,
    addLocation
}