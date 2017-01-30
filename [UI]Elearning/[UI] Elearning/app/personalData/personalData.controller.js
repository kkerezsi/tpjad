var personalDataModule = angular
.module('personalDataModule', [])
.controller('PersonalDataCtrl', PersonalDataCtrl)

PersonalDataCtrl.$inject = ['$scope', '$rootScope', 'personalDataFactory', 'utilsService', 'utilsFactory', '$timeout', 'notifier', 'logsFactory']
function PersonalDataCtrl($scope, $rootScope, personalDataFactory, utilsService, utilsFactory, $timeout, notifier, logsFactory) {
    $scope.allUsers = [];
    $scope.isPasswordEdit = false;
    $scope.confirmPassword = "";

    $scope.savePersonalChanges = savePersonalChanges;
    $scope.setIsPasswordEdit = setIsPasswordEdit;

    getCurrentUser();

    function setIsPasswordEdit() {
        $scope.isPasswordEdit = true;
    }

    function getAllUsers() {
        personalDataFactory.getAllUsers().then(function (result) {
            $scope.allUsers = result;
        })
    }

    function getCurrentUser() {
        personalDataFactory.getPersonalData($rootScope.currentUser.id).then(function (result) {
            $scope.currentUser = result;
            $scope.personalForm.submitted = false;
            $scope.isPasswordEdit = false;
        })
    }

    function savePersonalChanges() {
        $scope.personalForm.submitted = true;

        if ($scope.isPasswordEdit) {
            if ($scope.personalForm.confirmPassword.$modelValue != $scope.currentUser.password) {
                $scope.personalForm.$valid = false;
                $scope.personalForm.password.$valid = false;
                $scope.personalForm.confirmPassword.$valid = false;

                return;
            } else {
                $scope.currentUser.password = $scope.personalForm.confirmPassword.$modelValue;
            }
        }

        if ($scope.personalForm.submitted && $scope.personalForm.$valid) {
            personalDataFactory.savePersonalChanges($scope.currentUser).then(function () {
                notifier.notify("Personal data saved successfully");
                logsFactory.logEvent('Changed personal data');
            }, function () {
                notifier.notify("There was an error in saving your personal data");
            })
        }
    }
}