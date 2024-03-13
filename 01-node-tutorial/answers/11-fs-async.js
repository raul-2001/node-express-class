const { readFile, writeFile } = require('fs');

console.log("at start");

writeFile('./temporary/fileB.txt', 'This is first line in fileB.txt \n', 
    {flag: 'a'},
    
    (err, result) => {
        console.log("at point 1");
        if (err) {
            console.log("This error happened: ", err)
            throw err;
        }else {
            console.log("Line 1 was written successfully");
            writeFile('./temporary/fileB.txt', 'This is second line in fileB.txt \n',
                {flag: 'a'},
                (err, result) => {
                    console.log("at point 2");
                    if (err) {
                        console.log("This error happened: ", err)
                        throw err
                    }else {
                        console.log("Line 2 was written successfully");
                        writeFile('./temporary/fileB.txt', 'This is third line in fileB.txt \n',
                            {flag: 'a'},
                            (err, result) => {
                                console.log("at point 3");
                                if (err) {
                                    console.log("This error happened: ", err)
                                    throw err
                                } else {
                                    console.log("Line 3 was written successfully");
                                    console.log("All lines were written successfully");
                                }
                            })
                    }
                } )
        }
        
    }
);

console.log("at end");