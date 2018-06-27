console.log('Starting app.js');

const fileSystem = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(1,2);
console.log(res);

console.log(`Result: ${notes.add(2,3)}`);



// fileSystem.appendFile('greetings.txt',`your number is ${res}`,  (err) =>    {
//     if(err) {
//         console.log('Error!');
//     }
// });