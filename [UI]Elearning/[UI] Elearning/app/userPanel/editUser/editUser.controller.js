angular
.module('userPanelModule')
.controller('EditUserCtrl', EditUserCtrl)

EditUserCtrl.$inject = ['user', '$scope', '$rootScope', '$modalInstance'];
function EditUserCtrl(user, $scope, $rootScope, $modalInstance) {
    $scope.user = user;
    $scope.openedLogin = false;
    $scope.openedJoined = false;

    $scope.format = 'yyyy-mm-dd';
    $scope.dateOptions = {
        'year-format': "'yy'",
        'show-weeks': false
    };

    $scope.cancel = cancel;
    $scope.saveUser = saveUser;
    $scope.openDateLogin = openDateLogin;
    $scope.openDateJoined = openDateJoined;
    $scope.clear = clear;

    function openDateLogin(event) {
        event.preventDefault();
        event.stopPropagation();
        $scope.openedLogin = true;
    };

    function openDateJoined(event) {
        event.preventDefault();
        event.stopPropagation();
        $scope.openedJoined = true;
    };

    function clear() {
    };

    function cancel() {
        $modalInstance.dismiss('cancel');
    }

    function saveUser(isValid) {
        $scope.userForm.submitted = true;

        if ($scope.userForm.$valid) {
            $modalInstance.close(user);
        }

    }
}