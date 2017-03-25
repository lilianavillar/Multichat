/**
 * Created by UO232510 on 21/03/2017.
 */
var config = {};
//Heroku assigns the value through the PORT environment variable. You cannot choose
config.port = process.env.HTTP_PORT || process.env.PORT || 3000;
config.videoUrl = 'https://156-35-98-21.8662660338b14906b4a394cf2f6c2438.plex.direct:32400/video/:/transcode/universal/start?hasMDE=1&path=%2Flibrary%2Fmetadata%2F7&mediaIndex=0&partIndex=0&protocol=http&fastSeek=1&directPlay=0&directStream=1&subtitleSize=100&audioBoost=100&location=wan&maxVideoBitrate=4000&videoQuality=100&videoResolution=1280x720&session=a0km3t0du9ick8zl3ruep68o&offset=0&subtitles=burn&copyts=1&Accept-Language=es&X-Plex-Session-Identifier=kkln25b2ng8ijti24rnv3c7h&X-Plex-Chunked=1&X-Plex-Product=Plex%20Web&X-Plex-Version=3.1.1&X-Plex-Client-Identifier=eiw5lt8hontf61ykmhd9cc1s&X-Plex-Platform=Chrome&X-Plex-Platform-Version=57.0&X-Plex-Device=Windows&X-Plex-Device-Name=Plex%20Web%20%28Chrome%29&X-Plex-Device-Screen-Resolution=1920x950%2C1920x1080&X-Plex-Token=ua1Jb1BFziSs5GtV5cRG';
config.audioUrl = 'http://156.35.98.21:8001/;' //shoutcast (in .pls file)
config.presentationUrl = 'reveal-js/index.html';

module.exports = config;