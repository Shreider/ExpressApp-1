const express = require('express');
const router = express.Router();

const Parser = require('rss-parser')
const parser  = new Parser();
const youtube_th = require('youtube-thumbnail');

router.get('/', (req, res) => {
    const data = parser.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCmoOSHlkVQHctAGWDX_mQ3w");
    
    data.then((element) => {
        let v_data=[];
        let v_th = [];
        element.items.forEach((item) => {
            v_data.push(item)
            v_th.push(youtube_th(item.link).high.url);
        })

        for(let i = 0;i<v_data.length;i++) {
            v_data[i].id = v_th[i]
        }
        
        res.render('videos', { 
            title: 'Shreider: videos',
            //videos:
            videos_data: v_data,
            //btn link [a]:
            aBtn_index: '/',
            aBtn_videos: '/videos'
        })
    })
});

module.exports = router;