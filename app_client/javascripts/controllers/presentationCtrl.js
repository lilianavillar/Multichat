/**
 * Created by UO232510 on 22/03/2017.
 */
angular.module('multichatApp')
    .controller('presentationCtrl', function($scope, webSocketManager) {
        //Send a message to the server with the user that is connected
        var sub = $scope.sub.split("%"); //userName%name
        webSocketManager.presentationManagement.setUser(sub[0],sub[1]);
    });