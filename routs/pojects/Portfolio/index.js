let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('In the portfolio router');
})

module.exports = router;