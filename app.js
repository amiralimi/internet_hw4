const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const url = "http://covid19api.xapix.io/v2/locations";
const port = process.env.PORT || 3000;

let app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    axios.get(url).then(resp => {
        console.log('got the data.');
        return resp.data;
    }).then(data => {
        res.render('home', {locations: data.locations, latest: data.latest});
    }).catch(function (error) {
        console.log('error in getting the data.');
    });
});

app.listen(port);
console.log(`listening on port ${port}`);
