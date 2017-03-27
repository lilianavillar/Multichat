/**
 * Created by UO232510 on 21/03/2017.
 */
var config = {};
//Heroku assigns the value through the PORT environment variable. You cannot choose
config.port = process.env.HTTP_PORT || process.env.PORT || 3000;
config.videoUrl = 'https://156-35-98-21.8662660338b14906b4a394cf2f6c2438.plex.direct:32400/library/parts/8/1490382748/file.webm?X-Plex-Session-Identifier=y9yl4sh34ahkx85p7icxlayv&X-Plex-Product=Plex%20Web&X-Plex-Version=3.1.1&X-Plex-Client-Identifier=u7kjxgqzc2grxujsfslb4kj4&X-Plex-Platform=Chrome&X-Plex-Platform-Version=56.0&X-Plex-Device=Windows&X-Plex-Device-Name=Plex%20Web%20%28Chrome%29&X-Plex-Device-Screen-Resolution=1366x638%2C1366x768&X-Plex-Token=bXrzqZzpBesjWH4PSdxw&Accept-Language=es';
config.audioUrl = 'http://156.35.98.21:8001/;' //shoutcast (in .pls file)
config.presentationUrl = 'reveal-js/presentacion.html';

module.exports = config;