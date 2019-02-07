
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, city: 'Wellington', country: 'New Zealand'},
        {id: 2, city: 'Auckland', country: 'New Zealand'},
        {id: 3, city: 'Melbourne', country: 'Australia'}
      ]);
    });
};
