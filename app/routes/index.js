
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'home'
    });
});

module.exports = router;
