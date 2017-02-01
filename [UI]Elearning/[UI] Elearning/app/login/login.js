var loginModule = angular.module('loginModule', [])

.controller('LoginCtrl', LoginCtrl)

LoginCtrl.$inject = ['$scope', '$rootScope', 'loginFactory', '$location', '$route', '$filter', '$cookieStore', 'authorizationService', 'logsFactory']
function LoginCtrl($scope, $rootScope, loginFactory, $location, $route, $filter, $cookieStore, authorizationService, logsFactory) {
    $scope.isSubmited = false;
    $scope.failedLogin = false;


    $scope.login = login;

    function login() {
        var username = form.username.value;
        var password = form.password.value;

        if (username && password) {
            //loginFactory.getAllUsers().then(function (data) {
            //    var filterByUsername = $filter('filter')(data,{ username : username , password : password }, true);
            //    if (filterByUsername.length > 0) {
            //        $cookieStore.put('currentUser', filterByUsername[0]);
            //        authorizationService.resetPermissionModel();
            //        $rootScope.currentUser = filterByUsername[0];
            //        logsFactory.logEvent("Successfully authentificated");
            //        $location.path('/');
            //    }
            //    else {
            //        form.$invalid = true;
            //        $scope.failedLogin = true;
            //        logsFactory.logEvent("Failed to authentificated");
            //    }
            //})

            loginFactory.login(username, password).then(function (data) {
                data.username = data.fullName;
                $cookieStore.put('currentUser', data);
                authorizationService.resetPermissionModel();
                $rootScope.currentUser = data
                logsFactory.logEvent("Successfully authentificated");
                $location.path('/');
            })
        }
    }
}
