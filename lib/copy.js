var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs-extra')),
  chalk = require('chalk');

var root = __dirname.replace(
  /create-express-react\/lib/,
  'create-express-react/'
);

function copy(project) {
  return fs
    .copyAsync(root + 'template', project, { clobber: true })
    .then(function(err) {
      console.log('\n\n');
      console.log(chalk.green('Creating project ' + project + '.....\n'));
      if (err) {
        return console.error(err);
      } else {
        console.log(
          chalk.green(
            'Successfully generated "' +
              project +
              '" in current directory. \n\n'
          )
        );
        console.log('To start your development:');
        console.log('============================');
        console.log(chalk.yellow('cd ' + project));
        console.log(chalk.yellow('npm install'));
        console.log(chalk.yellow('npm run setup'));
        console.log(chalk.yellow('npm start'));
        console.log('============================\n\n');

        console.log('To run test:');
        console.log('============================');
        console.log(chalk.magenta('npm run test-react'));
        console.log('or');
        console.log(chalk.magenta('npm run test-server'));
        console.log('============================\n\n');

        console.log('To build and deploy:');
        console.log('============================');
        console.log(chalk.cyan('npm run build'));
        console.log('or');
        console.log(chalk.cyan('npm run deploy'));
        console.log('============================\n\n');
      }
    });
}
module.exports = copy;
