// load libraries
const { json } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const withQuery = require('with-query').default;

// declare an instance of express
const app = express()

// declare port
const PORT = parseInt(process.env.PORT) || 4000;
const API_KEY = process.env.GIPHY_API;

// // Create link to angular build directory
// var distDir = __dirname + "/client/dist/csfmock/";
// app.use(express.static(distDir));

// direct to client side file
// app.get('/', (req, resp) => {
//     resp.sendFile('/index.html');
// })

// needed for some security CORS thingy
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

const ENDPOINT = 'https://api.giphy.com/v1/gifs/search'
const LIMIT = 20;

// api call
app.get('/api/:q/', async (req, resp) => {
    const q = req.params.q;
    const URL = withQuery(ENDPOINT,
        {
            api_key: API_KEY,
            q: q,
            limit: LIMIT,
            lang: "en"
    });
    
    console.log(URL);

    try {
        const results = await fetch(URL)
        const data = await results.json();
        console.log(data.data);
        resp.status(200)
        resp.type('application/json')
        resp.send(data.data);
    } catch (e) {
        console.error('error fetching', e)
    }
})

app.listen(PORT, () => {
    console.info(`Application is listening on port ${PORT} at ${new Date()}`);
})