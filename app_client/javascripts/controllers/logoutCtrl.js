/**
 * Created by UO232510 on 21/03/2017.
 */
angular.module('multichatApp')
    .controller('logoutCtrl', function($cookies) {
        $cookies.remove('token');
    });
