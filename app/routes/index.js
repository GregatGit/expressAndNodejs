
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send(`
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <h1>Welcome to Greg's Projects</h1>
        <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
        <p>Hi - this is a work in progress to show my Projects</p>
    `);
});

module.exports = router;
