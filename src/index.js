#!/usr/bin/env node
var genPassOfDay = require('arrispwod');
var argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .example('$0 YYYY-MM-YY --seed CUSTOM_SEED')
  .alias('seed', 's')
  .nargs('seed', 1)
  .describe('seed', 'Seed for generate password')
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v')
  .argv
;

const date = argv._.length
  ? new Date(`${argv._[0]} 00:00:00`)
  : new Date()
;

const pass = argv.seed
  ? genPassOfDay(date, argv.seed)
  : genPassOfDay(date)
;

console.log(pass);
