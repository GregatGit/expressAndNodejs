let http = require('http');

let myServer = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<h1>Greg\'s Profile</h1>');
    res.end();
});

myServer.listen(3000);
console.log('goto localhost: 3000!!!');