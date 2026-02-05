const router = require('express').Router();
const dotenv = require('dotenv');
const { json } = require('express');

dotenv.config();
const API_KEY = process.env.API_KEY;

router.get('/latest', async (req, res) => {
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv6v8RgrQYdBN1EYXvPw5UA&order=date&type=video&maxResults=1&key=${API_KEY}`, {
        method: 'GET',
        headers: {
                "Content-Type": "application/json",
            }
    })
    .then(async (fetchedResponse) => {
        let parsedResponse = await fetchedResponse.json();
        if(fetchedResponse.ok){
            res.status(200).json({videoID:`${parsedResponse.items[0].id.videoId}`})
        }
        else{
            if(parsedResponse.error){
                return res.status(400).json({
                    error: `Bad API Request, found this error: ${parsedResponse.error.message}`
                })
            }
            return res.status(502).json({error:'Something went wrong with the fetch'})
        }
    })
});

module.exports = router;