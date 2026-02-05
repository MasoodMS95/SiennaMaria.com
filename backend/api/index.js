const router = require('express').Router();
const youtubeRouter = require('./youtube');

router.use('/youtube', youtubeRouter);

router.get('/youtube', (req, res) => {
    res.status(404).json({
        error:'No youtube route defined.'
    })
});

module.exports = router;