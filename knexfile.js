module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/preschoolDB'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};