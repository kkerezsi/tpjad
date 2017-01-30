angular
.module('testlistModule')
.controller('beginTestCtrl', beginTestCtrl)

beginTestCtrl.$inject = ['test', '$scope', '$rootScope', '$modalInstance'];
function beginTestCtrl(test, $scope, $rootScope, $modalInstance) {
    $scope.test = test;

    $scope.cancel = cancel;
    $scope.saveTest = saveTest;
    $scope.clear = clear;

    function clear() {
    };

    function cancel() {
        $modalInstance.dismiss('cancel');
    }

    function saveTest(isValid) {
        $scope.testForm.submitted = true;

        if ($scope.testForm.$valid) {
            $modalInstance.close(test);
        }
    }
}