/*
 * Add proxy to express server after create-react-app completes
 */
import fs from 'fs';
const chalk = require('chalk');

fs.readFile('./frontend/package.json', 'utf8', (err, data) => {
  if (err) throw err;
  let obj = JSON.parse(data);
  obj.proxy = 'http://localhost:3001';
  fs.writeFile(
    './frontend/package.json',
    JSON.stringify(obj, null, '\t'),
    'utf8',
    (err, data) => {
      if (err) throw err;
      console.log(
        chalk.yellow('Express proxy has been added to create-react-app.')
      );
    }
  );
});
