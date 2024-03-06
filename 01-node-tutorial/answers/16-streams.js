const { createReadStream } = require('fs')
const { Stream } = require('stream')

const stream = createReadStream("../content/big.txt", 
    {highWaterMark: 200, 
    encoding: 'utf8'}
    )
let counter = 0;
console.log(`counter => ${counter}`);

stream.on('data', (result) => {
    counter++;
    console.log(result);
})
stream.on('end', () => {
    console.log(`Total number of chunks: ${counter}`);
})
stream.on('error', (err) => {
    console.log('Error => ', err);
})