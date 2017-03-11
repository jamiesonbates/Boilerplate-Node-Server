'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mydatabase_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/mydatabase_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
