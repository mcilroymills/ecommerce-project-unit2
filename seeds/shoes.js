exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('shoes').del(),//clears the table

    // Inserts seed entries
    knex('shoes').insert(
      {
        style: '',
        color: 'To Pimp A Butterfly',
        price: 'Hip-hop',
        stars: 5,
        explicit: true
      }),
    knex('shoes').insert(
      {
        artist: 'J. Cole',
        name: '2014 Forest Hill Drive',
        genre: 'Hip-hop',
        stars: 4,
        explicit: true
      }),
    knex('shoes').insert(
      {
        artist: 'James Cole',
        name: '2014 st Hill Drive',
        genre: 'Hip-hop',
        stars: 2,
        explicit: true
      })


);};