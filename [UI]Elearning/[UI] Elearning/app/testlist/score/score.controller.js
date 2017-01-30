angular
.module('testlistModule')
.controller('scoreTestCtrl', scoreTestCtrl)

scoreTestCtrl.$inject = ['$scope', '$rootScope', '$modalInstance'];
function scoreTestCtrl($scope, $rootScope, $modalInstance) {
    $scope.cancel = cancel;

    function clear() {
    };

    function cancel() {
        $modalInstance.dismiss('cancel');
    }
}