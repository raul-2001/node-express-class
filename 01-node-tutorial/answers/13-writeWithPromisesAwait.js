const { rejects } = require("assert");
const { realpath } = require("fs");

const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        console.log('first')
        await writeFile('./temp.txt', "line 1\n",{flag: 'a'})

        console.log('second')
        await writeFile('./temp.txt', "Line 2\n", {flag: 'a'})

        console.log('third')
        await writeFile('./temp.txt', "Line 3\n", {flag: 'a'})

    } catch (error) {
        console.log("Error writing to file", error);
    }
};

const reader = async () => {
    try {

        const data = await readFile('./temp.txt', 'utf8');
        console.log(data);

    } catch(error) {
        
        console.error("Error reading file", error);
    }
    console.log('reading file')

};

const readWrite = async () => {
    await writer();
    await reader();
};


readWrite();


