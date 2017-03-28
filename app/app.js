let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('<h1>Greg and his Projects</h1>');
});

let server = app.listen(3000, function () {
    console.log('go to localhost:3000');
});


// let http = require('http');

// let myServer = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write('<h1>Greg\'s Profile</h1>');
//     res.end();
// });

// myServer.listen(3000);
// console.log('goto localhost: 3000!!!');