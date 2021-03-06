let express = require('express');
let router = express.Router();

router.get('/speakers', function (req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    data.speakers.forEach(item => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerList'
    });
    // let info = '';
    // let dataFile = req.app.get('appData');
    // dataFile.speakers.forEach(item => {
    //     info += `
    //         <li>
    //             <h2>${item.name}</h2>
    //             <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker" >
    //             <p>${item.summary}</p>
    //         </li>
    //     `;
    // });
    // res.send(`
    //     <link rel="stylesheet" type="text/css" href="/css/style.css">
    //     <h1>Greg and his Projects</h1>
    //     ${info}
    //     <script src="/reload/reload.js></script>
    // `);
});

router.get('/speakers/:speakerid', function (req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach(item => {
        if (item.shortname === req.params.speakerid){
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });
    res.render('speakers', {
        pageTitle: 'Speaker Info',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerDetail'
    });
    // let dataFile = req.app.get('appData');
    // let speaker = dataFile.speakers[req.params.speakerid];
    // res.send(`
    //     <link rel="stylesheet" type="text/css" href="/css/style.css">
    //     <h1>${speaker.title}</h1>
    //     <h2>${speaker.name}</h2>
    //     <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker" >
    //     <p>${speaker.summary}</p>
    //     <script src="/reload/reload.js></script>
    // `);
});

module.exports = router;