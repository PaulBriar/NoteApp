const fileSystem = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes.js');

const command = argv._[0];

if (command === 'add') {
   var note = notes.addNote(argv.title,argv.body);
   if(note) {
       console.log(`Note Created: ${note.title} ${note.body}`);
   } else {
       console.log(argv.title + ' already exists');
   }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log(`Note Found: ${note.title} ${note.body}`);
    } else {
        console.log("Note not found");
    };
} else if (command === 'remove') {
    notes.remNote(argv.title);
} else {
    console.log('Command not recognized');
}