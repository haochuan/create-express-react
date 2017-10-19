#! /usr/bin/env node

var program = require('commander'),
  gs = require('../lib/copy');

program
  .version(require('../package.json').version)
  .usage('[project name]')
  .parse(process.argv);

var pname = program.args[0];

if (!pname) {
  program.help();
} else {
  gs(pname);
}
