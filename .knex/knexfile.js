module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/shoe_store',
    seeds: {
      directory: './seeds/'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
