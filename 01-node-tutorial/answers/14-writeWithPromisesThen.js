const { writeFile, readFile } = require('fs').promises;


writeFile('./temp.txt', 'Line 1 with then\n', {flag: 'a'})
    .then(() => {

        console.log("First line written successfully");

        return writeFile('./temp.txt', 'Line 2 with then\n', {flag: 'a'})
    })
    .then(() => {

        console.log("Second line written successfully");

        return writeFile('./temp.txt', 'Line 3 with then\n', {flag: 'a'})
    })
    .then(() => {

        console.log("Third line written successfully");

        return readFile('./temp.txt', 'utf8')
    })
    .then((data) => {

        console.log("File content: ");
        console.log(data);

    })
    .catch((error) => {
        console.log("An error occured: ", error)
    })
