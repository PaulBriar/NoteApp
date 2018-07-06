console.log('Starting app.js');

const fileSystem = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes.js');

const command = argv._[0];
console.log('Command: ', command);
console.log('yargs', argv);


if (command === 'add') {
    notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.remNote(argv.title);
} else {
    console.log('Command not recognized');
}