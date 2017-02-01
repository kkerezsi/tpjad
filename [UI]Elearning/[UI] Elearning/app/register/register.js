var registerModule = angular.module('registerModule', [])

.controller('RegisterCtrl', function ($scope, $rootScope, $location, registerFactory) {

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.password = "";
    $scope.options = [];
    $scope.option = "";

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }

    if ($scope.promise != null) {
        $scope.options = $scope.promise;
    }

    $scope.changeOption = function (option) {
        $scope.option = option;
    }

    $scope.SaveUser = function (form) {
        var username = form.username.$modelValue;
        var password = form.password.$modelValue;
        if (username.length > 0 && password.length > 0)
            registerFactory.saveUser({
                'username': username,
                'password': password,
            })
            .then(function (data) {
                $scope.successfullyRegistred = true;
                $location.path("/Login");
            });
    }
})
