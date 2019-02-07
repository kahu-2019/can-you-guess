const knex = require ('knex')
const config = require ('../../../knexfile').development
const db = knex(config)

function getLocations() {
    console.log('Hitting getLocations()')
    return db('locations').select()
}

module.exports = {
    getLocations
}