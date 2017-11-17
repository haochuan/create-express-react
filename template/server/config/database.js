const config = {
  development: {
    username: 'root',
    password: null,
    database: 'Test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'Test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'myDatabase',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};

export default JSON.stringify(config);
