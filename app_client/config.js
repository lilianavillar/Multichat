/**
 * Created by UO232510 on 21/03/2017.
 */
angular.module('multichatApp', ['angular-websocket', 'ngMaterial', 'angular-growl',
    'ui.bootstrap', 'ngCookies', 'ngSanitize', 'thatisuday.dropzone', '720kb.tooltips']);
var config = {};
config.maxSizeAttachment = 500000; //500 KB
