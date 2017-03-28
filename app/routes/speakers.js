let express = require('express');
let router = express.Router();

router.get('/speakers', function (req, res) {
    let info = '';
    let dataFile = req.app.get('appData');
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

router.get('/speakers/:speakerid', function (req, res) {
    let dataFile = req.app.get('appData');
    let speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1>Here is your speaker</h1>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
    `);
});

module.exports = router;