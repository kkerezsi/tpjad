var userPanelModule = angular
.module('userPanelModule', [])
.controller('UserPanelCtrl', UserPanelCtrl)

UserPanelCtrl.$inject = ['$scope', '$rootScope', 'userPanelFactory', 'utilsService', 'utilsFactory', '$timeout', 'notifier', '$modal', 'logsFactory'];
function UserPanelCtrl($scope, $rootScope, userPanelFactory, utilsService, utilsFactory, $timeout, notifier, $modal, logsFactory) {
    $scope.allUsers = [];

    $scope.editUser = editUser;
    $scope.addUser = addUser;

    getAllUsers();

    function setIsPasswordEdit() {
        $scope.isPasswordEdit = true;
    }

    function getAllUsers() {
        userPanelFactory.getAllUsers().then(function (result) {
            $scope.allUsers = result;
        })
    }

    function addUser() {
        var user = {
            "id": 0,
            "groups": [],
            "discussions": [],
            "course_held": [],
            "enrollments": [],
            "password": "",
            "last_login": null,
            "is_superuser": false,
            "username": "",
            "first_name": "",
            "last_name": "",
            "email": "",
            "is_staff": false,
            "is_active": false,
            "date_joined": null,
            "user_permissions": [],
            "isNew": true
        };

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'app/userPanel/editUser/editUser.html',
            controller: 'EditUserCtrl',
            size: 'lg',
            resolve: {
                user: function () { return angular.copy(user); }
            }
        });

        modalInstance.result.then(function (user) {
            userPanelFactory.addUser(user).then(function success() {
                notifier.notify("User saved successfully");
                logsFactory.logEvent('Successfully saved user' + user.username);
                userPanelFactory.getAllUsers().then(function (result) {
                    $scope.allUsers = result;
                });
            }, function error() {
                notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
            })
        });
    }

    function editUser(user) {
        user.isNew = false;

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'app/userPanel/editUser/editUser.html',
            controller: 'EditUserCtrl',
            size: 'lg',
            resolve: {
                user: function () { return angular.copy(user); }
            }
        });

        modalInstance.result.then(function (user) {
            userPanelFactory.editUser(user).then(function success() {
                notifier.notify("User saved successfully");
                logsFactory.logEvent('Successfully saved user' + user.username);
                userPanelFactory.getAllUsers().then(function (result) {
                    $scope.allUsers = result;
                });
            }, function error() {
                notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
            })
        });
    }
}