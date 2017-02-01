angular
.module('testlistModule')
.controller('scoreTestCtrl', scoreTestCtrl)

scoreTestCtrl.$inject = ['$scope', '$rootScope', '$modalInstance', 'testlistFactory'];
function scoreTestCtrl($scope, $rootScope, $modalInstance, testlistFactory) {
    $scope.cancel = cancel;
    $scope.scores = [];

    testlistFactory.getScores($rootScope.currentUser.username).then(function (result) {
        $scope.scores = result;
    });

    function clear() {
    };

    function cancel() {
        $modalInstance.dismiss('cancel');
    }
}