let express = require('express');
let app = express();
let dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

let server = app.listen(app.get('port'), function () {
    console.log('listing on port: ' + app.get('port') ) ;
});


// let http = require('http');

// let myServer = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write('<h1>Greg\'s Profile</h1>');
//     res.end();
// });

// myServer.listen(3000);
// console.log('goto localhost: 3000!!!');