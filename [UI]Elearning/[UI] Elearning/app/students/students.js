studentsModule

var studentsModule = angular.module('studentsModule', [])

.controller('StudentsCtrl', function ($scope, $rootScope, studentsFactory, $filter) {

    $scope.getTests = function () {

        studentsFactory.getTests($rootScope.currentUser.id).then(function (result) {
            result.enrollments.course;
        })
    }
});
