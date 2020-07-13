const router = require('express').Router();

router.route('/form').get((req, res) => {
    const { query } = req;

    res.json({
        name: 'sunil',
        age: '24'
    });
})

module.exports = router;