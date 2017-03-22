var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('#' + Math.floor(Math.random() * 67428190)
      .toString(16))
});

module.exports = router;
