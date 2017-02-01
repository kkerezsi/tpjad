var testlistModule = angular.module('testlistModule', [])
.controller('testlistCtrl', testlistCtrl);

testlistCtrl.$inject = ['$scope', '$rootScope', '$modal', 'testlistFactory', 'notifier'];
function testlistCtrl($scope, $rootScope, $modal, testlistFactory, notifier) {

    $scope.currentUser = $rootScope.currentUser;

    $scope.editTest = function (test) {
        test.isNew = false;
        test.userId = $rootScope.currentUser.userId;

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/testlist/addTest/addTest.html',
            controller: 'addTestCtrl',
            size: 'lg',
            resolve: {
                test: function () { return angular.copy(test); }
            }
        });

        modalInstance.result.then(function (test) {
            testlistFactory.editTest(test).then(function success() {
                notifier.notify("Test saved successfully");
                testlistFactory.getTests().then(function (tests) {
                    $scope.tests = tests;
                });
            }, function error() {
                notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
            })
        });
    }

    $scope.removeTest = function (test) {
        $scope.tests.splice($scope.tests.indexOf(test), 1);
    }

    $scope.beginTest = function (test) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/testlist/beginTest/beginTest.html',
            controller: 'beginTestCtrl',
            size: 'lg',
            resolve: {
                test: function () { return angular.copy(test); }
            }
        });

        modalInstance.result.then(function (test) {
            testlistFactory.beginTest(test).then(function success() {
                notifier.notify("Test submitted successfully");
                testlistFactory.getTests().then(function (tests) {
                    $scope.tests = tests;
                });
            }, function error() {
                notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
            })
        });
    }

    testlistFactory.getTests().then(function(tests){ $scope.tests = tests;});
};