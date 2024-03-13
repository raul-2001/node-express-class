const express = require("express");
const app = express();

const STYLE = `<style>
*{ font-family: Arial; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center;}
main { max-width: 70ch; }
strong, em{ background: LawnGreen;
</style>`;


// home page
app.get('/', (_, res) => {
    res.send(
        `
        ${STYLE}
        ${"<style>* { background: Yellow }</style>"}
        <body>
        <main>
        <h1>Hi!
        This is my first program. I'm going answer some questions which are more improtant for us.</h1>
        <hr>
        <ul>
            <li> What is a server?</li>
            <li> Why do we need servers?</li>
            <li> How do web pages work?</li>
            <li> What is the difference between HTML and JSON?</li>
            <li> What is JSON good for?</li>
        </ul>

         Start by cklicking next link >> 
        <a href="/whatisaserver/">What is a server</a>
        </main>
        </body>`);
})

// what is server
app.get('/whatisaserver/', (req, res) => {
    res.send(`
        ${STYLE}
        ${"<style>* { background: Orange }  </style>"}
        <body><main>
        <h1>The Questions</h1>
        <ul>
            <li><strong><em>What is a server?</em></strong></li>
            <li>Why do we need servers?</li>
            <li>How do web pages work?</li>
            <li>What is the difference between HTML and JSON?</li>
            <li>What is JSON good for?</li>
        </ul>
        <hr>
        <h1>To get quikly to the next question click the link bellow >>></h1>
        <a href="why" >Why do we need servers?</a>
        <br>
        <hr>
        <p>
            <h1>What is a server?</h1>
            In computing, a server is a piece of computer hardware or software (computer program) that provides functionality for 
            other programs or devices, called "clients". This architecture is called the client–server model. Servers can provide 
            various functionalities, often called "services", such as sharing data or resources among multiple clients or performing 
            computations for a client. A single server can serve multiple clients, and a single client can use multiple servers. 
            A client process may run on the same device or may connect over a network to a server on a different device.
            Typical servers are database servers, file servers, mail servers, print servers, web servers, game servers, and application 
            servers.
        </p>    
        <p>    
            Client–server systems are usually most frequently implemented by (and often identified with) the request–response model: 
            a client sends a request to the server, which performs some action and sends a response back to the client, typically with 
            a result or acknowledgment. Designating a computer as "server-class hardware" implies that it is specialized for running servers 
            on it. This often implies that it is more powerful and reliable than standard personal computers, but alternatively, 
            large computing clusters may be composed of many relatively simple, replaceable server components.
        </p>
        <h1>To get to the next question click the link bellow >>></h1>
        <em><a href="why" >Why do we need servers?</a></em>
        </main>
        </body>
    `)
})


// Why do we need servers?
app.get('/whatisaserver/why/', (req, res) => {
    res.send(`
        ${STYLE}
        ${"<style>* { background: tan }  </style>"}
        
        <body><main>
        <h1>The Questions</h1>
        <ul>
            <del><li>What is a server?</li></del>
            <li><strong><em>Why do we need servers?</em></strong></li>
            <li>How do web pages work?</li>
            <li>What is the difference between HTML and JSON?</li>
            <li>What is JSON good for?</li>
        </ul>
        <hr>
        <h1>To get quikly to the next question click the link bellow >>></h1>
        <a href="webpages" >How do web pages work?</a>
        <br>
        <hr>
        <p>
            <h1>Why do we need servers?</h1>
            There are a lot of purposes for a server to serve. For example, a user may set up a server to control access to a network, 
            send/receive e-mail, manage print jobs, or host a website. It can used as one of the function as mentioned above in the 
            types of servers. Some servers are committed to a specific task, often referred to as dedicated. However, 
            many servers today are shared servers which can take on the responsibility of e-mail, DNS, FTP, and even host multiple websites 
            in the case of a web server.

            A server can be setup based on your different needs and function, it can also be setup for private access or shared with others. 
            Server can help human connect and communicate from far apart, it can also help us to perform intensive calculation task or 
            be up 24 hours a day to maintain a connection. That is something that we human could not actually be doing.
        </p>
        <h1>To get to the next question click the link bellow >>></h1>
        <em><a href="webpages" >How do web pages work?</a></em>
        </main>
        </body>
    `)
})

// How do web pages work?
app.get('/whatisaserver/webpages', (req, res)=> {
    res.send(`
        ${STYLE}
        ${"<style>* { background: silver }  </style>"}
        
        <body><main>
        <h1>The Questions</h1>
        <ul>
            <del><li>What is a server?</li></del>
            <del><li>Why do we need servers?</li></del>
            <li><strong><em>How do web pages work?</em></strong></li>
            <li>What is the difference between HTML and JSON?</li>
            <li>What is JSON good for?</li>
        </ul>
        <hr>
        <h4>To get quikly to the next question click the link bellow >>></h4>
        <a href="htmljson" >What is the difference between HTML and JSON?</a>
        <br>
        <hr>
        <p>
            <h1>How do web pages work?</h1>
            There are a lot of purposes for a server to serve. For example, a user may set up a server to control access to a network, 
            send/receive e-mail, manage print jobs, or host a website. It can used as one of the function as mentioned above in the 
            types of servers. Some servers are committed to a specific task, often referred to as dedicated. However, 
            many servers today are shared servers which can take on the responsibility of e-mail, DNS, FTP, and even host multiple websites 
            in the case of a web server.

            A server can be setup based on your different needs and function, it can also be setup for private access or shared with others. 
            Server can help human connect and communicate from far apart, it can also help us to perform intensive calculation task or 
            be up 24 hours a day to maintain a connection. That is something that we human could not actually be doing.
        </p>
        <h4>To get to the next question click the link bellow >>></h4>
        <em><a href="htmljson" >What is the difference between HTML and JSON?</a></em>
        </main>
        </body>
    `)
})


// What is the difference between HTML and JSON?
app.get('/whatisaserver/htmljson', (req, res)=> {
    res.send(`
        ${STYLE}
        ${"<style>* { background: aqua }  </style>"}
        
        <body><main>
        <h1>The Questions</h1>
        <ul>
            <del><li>What is a server?</li></del>
            <del><li>Why do we need servers?</li></del>
            <del><li>How do web pages work?</li></del>
            <li><strong><em>What is the difference between HTML and JSON?</em></strong></li>
            <li>What is JSON good for?</li>
        </ul>
        <hr>
        <h4>To get quikly to the next question click the link bellow >>></h4>
        <a href="jsonfor" >What is JSON good for?</a>
        <br>
        <hr>
        <p>
            <h1>What is the difference between HTML and JSON?</h1>
            The fundamental difference between these three formats is that <a href="https://www.json.org/json-en.html">JSON</a> 
            are used for the storage and transmission of data, while <a href="https://en.wikipedia.org/wiki/HTML" >HTML</a> is 
            used to describe how that data is displayed.
        </p>
        <h4>To get to the next question click the link bellow >>></h4>
        <em><a href="jsonfor" >What is JSON good for?</a></em>
        </main>
        </body>
    `)
})


// What is JSON good for?
app.get('/whatisaserver/jsonfor', (req, res)=> {
    res.send(`
        ${STYLE}
        ${"<style>* { background: dodgerblue }  </style>"}
        
        <body><main>
        <h1>The Questions</h1>
        <ul>
            <del><li>What is a server?</li></del>
            <del><li>Why do we need servers?</li></del>
            <del><li>How do web pages work?</li></del>
            <del><li>What is the difference between HTML and JSON?</em></strong></li></del>
            <li><strong><em>What is JSON good for?</em></strong></li>
        </ul>
  
        <hr>
        <p>
            <h1>What is JSON good for?</h1>

            1.  Generating a JSON object from user-generated data

            JSON is perfect for storing temporary data. For example, temporary data can be user-generated data, 
            such as a submitted form on a website. JSON can also be used as a serialization data format for any programming language 
            to provide a high level of interoperability.
        </p>
        <p>
            2.  Transferring data between systems
            
            A website database has a customer’s mailing address, but it needs to be verified via an API to ensure it’s valid. 
            Send the address data in JSON format to the address validation service API.
        </p>
        <p>
            3.  Configuring data for applications
            
            When developing applications, each application needs the credentials to connect to a database as well as a log file path. 
            The credentials and the log file path can be specified in a JSON file to be read and available.
        </p>
        <p>
            4.  Simplifying complex data models
            
            JSON simplifies complex documents down to the components identified as being meaningful by converting the data 
            extraction process to a predictable and human-readable JSON file.
            
        </p>
        <h4>To get to Home page click the link bellow >>></h4>
        <em><a href="/" >Home</a></em>
        </main>
        </body>
    `)
})




app.listen(3000);