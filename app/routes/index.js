
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];

    data.speakers.forEach(item => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });
});

module.exports = router;
