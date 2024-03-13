const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
// Generates random number
const randomNumber = Math.floor(Math.random() * 100) + 1; 

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = (message) => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="100" required ></input>
  <button type="submit">Submit Guess</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["guess"]) {
        const userGuess = parseInt(body["guess"]);
        let message;
        if (userGuess === randomNumber) {
          message = "Congratulations! You guessed the correct number.";
          randomNumber = Math.floor(Math.random() * 100) + 1;
        }else if (userGuess < randomNumber) {
          message = "Too low! Try a higher number.";
        } else {
          message = "Too high! Try a lower number.";
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(form(message));
      } else {
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.end("Invalid guess.");
      }


    });
  } else {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(form("Guess a number between 1 and 100: "))
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
