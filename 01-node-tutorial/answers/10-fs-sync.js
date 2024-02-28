const {readFileSync, writeFileSync} = require("fs");

const firstLine = writeFileSync('./temporary/fileA.txt', 
'We used writeFileSync from fs module to write some text into fileA.txt \n',
);

const secondLine = writeFileSync('./temporary/fileA.txt', 
'Second line for example \n',
{flag: 'a'}
);

const thirdLine = writeFileSync('./temporary/fileA.txt', 
'Third line for example \n',
{flag: 'a'}
);


const firstFile = readFileSync('./temporary/fileA.txt', 'utf8');
const secondFile = readFileSync('./temporary/fileA.txt', 'utf8');
const thirdFile = readFileSync('./temporary/fileA.txt', 'utf8');

console.log(firstFile);
console.log(secondFile);
console.log(thirdFile);