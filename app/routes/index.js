
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send(`
        <h1>Welcome to Greg's Projects</h1>
        <p>Hi - this is a work in progress to show my Projects</p>
    `);
});

module.exports = router;
