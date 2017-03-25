/**
 * Created by UO232510 on 21/03/2017.
 */
angular.module('multichatApp')
    .controller('geolocationCtrl', function($scope, webSocketManager) {
        //Send a message to the server with the user that is connected
        var sub = $scope.sub.split("%"); //userName%name
        webSocketManager.geolocationManagement.setUser(sub[0],sub[1]);
    });