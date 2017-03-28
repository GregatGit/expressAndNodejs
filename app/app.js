let express = require('express');
let app = express();
let dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
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