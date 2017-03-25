/**
 * Created by UO232510 on 22/03/2017.
 */
angular.module('multichatApp')
    .controller('messagesFileModalCtrl', function($scope, $uibModalInstance) {
        //This will prevent Dropzone to instantiate on it's own unless you are using
        // dropzone class for styling
        Dropzone.autoDiscover = false;
        $scope.dzCallbacks = {
            'addedfile' : function(file){
                if (file.size < config.maxSizeAttachment)
                    $uibModalInstance.close(file);
                else
                    $uibModalInstance.close("Too big");
            },
        };
    });
