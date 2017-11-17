/**
 *
 * Database Config
 */

/*
 * MongoDB Examples
 * You need to install mongoose yourself first!
 * import mongoose from 'mongoose';
 * import env from './env';
 * const dbHost = {
 *  dev: 'xxxxxx',
 *  production: 'xxxxx'
 * };
 * mongoose.connect(dbHost[env.name]);
 * mongoose.Promise = require('bluebird');
 */

/*
 * Mysql
 * sequelize.js and mysql2 are already in package.json.
 * It's better to add the mysql connection info in ./env and the import the info here to use
 * For exmaple, env.database should be something like:
 * {
 *   host: 'xxx',
 *   database: 'xxx',
 *   user: 'xxx',
 *   password: 'xxxx',
 *   port: 'xxx'
 * }
 */

import Sequelize from 'sequelize';
import env from './env';

const sequelize = new Sequelize(env.database, {
  host: env.database.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// init connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Mysql connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the mysql:', err);
  });
