exports.seed = function(knex, Promise){

  return Promise.join(
    //Deletes all existing entries
    knex('users').del(),

    // inserts seed entries
    knex('products').insert(
      {
          email: 'millsmcilroy@gmail.com',
          admin: true
      }),
    knex('products').insert(
      {
          email: 'shoelova@hotmail.com',
          admin: false
      })
);};
