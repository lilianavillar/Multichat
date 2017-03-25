/**
 * Created by UO232510 on 21/03/2017.
 */
var config = {};
//Heroku assigns the value through the PORT environment variable. You cannot choose
config.port = process.env.HTTP_PORT || process.env.PORT || 3000;
config.videoUrl = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
config.audioUrl = 'http://ruhit.imgradio.pro:80/RusHit48'; //shoutcast (in .pls file)
config.presentationUrl = 'reveal-js/index.html';

module.exports = config;