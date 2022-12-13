const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Shreider: Main', 
        aBtn_index: '/',
        aBtn_videos: '/videos'
    });
})

module.exports = router;