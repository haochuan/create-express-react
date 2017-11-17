/**
 *
 * Example User model for sequelize
 *
 */

import sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  });
  return User;
};
