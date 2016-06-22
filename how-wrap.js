// JavaScript source code
var DigitalOcean = require('do-wrapper'),
    api = new DigitalOcean('you_api_key', 1);

var droplet_ID = ########;

var query = {
    "type": "resize",
    "disk": true,
    "size": "1gb"
}

api.dropletsresize(droplet_ID, query, function (error, body) {
    if(error){
        console.log(error);
    }
    else {
        console.log(body);
    }
});


