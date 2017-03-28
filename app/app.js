let express = require('express');
let app = express();
let dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send(`
        <h1>Welcome to Greg's Projects</h1>
        <p>Hi - this is a work in progress to show my Projects</p>
    `);
});

app.get('/speakers', function (req, res) {
    let info = '';
    dataFile.speakers.forEach(item => {
        info += `
            <li>
                <h2>${item.name}</h2>
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <h1>Greg and his Projects</h1>
        ${info}
    `);
});

app.get('/speakers/:speakerid', function (req, res) {
    let speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1>Here is your speaker</h1>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
    `);
});

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