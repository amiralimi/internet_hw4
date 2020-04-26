const axios = require('axios');

const url = "http://covid19api.xapix.io/v2/locations";

axios.get(url).then(resp => {
    console.log('got the data.');
    return resp.data;
}).then(data => {
    console.log(data.latest);
}).catch(function (error) {
    console.log('error in getting the data.');
});