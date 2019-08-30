require('dotenv').config();
var request = require('request'); 
var comet = process.env.COMET;

const rootURL = 'https://api.nasa.gov/neo/rest/v1/feed?api_key='

module.exports = {
    index
};

function index(req, res, next) {
    request(rootURL + comet, function(err, response, comet) {
        var cometData = JSON.parse(comet);
        var asteroids = cometData.near_earth_objects
        var firstDate = Object.keys(asteroids)[0]
        var theDay = asteroids[firstDate][0].nasa_jpl_url + ';old=0;orb=1;cov=0;log=0;cad=0#orb';
        res.render('nearearthobject/index', {
            theDay,
            user: req.user
        });
    });
};
 