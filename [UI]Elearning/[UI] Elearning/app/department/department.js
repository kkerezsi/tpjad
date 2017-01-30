departmentModule
    
var departmentModule = angular.module('departmentModule', [])

.controller('DepartmentCtrl', function ($scope, $rootScope, departmentFactory, logsFactory) {
    $scope.allDepartments = [];

    getAllDepartments();

    function getAllDepartments() {
        departmentFactory.getAllDepartments().then(function (result) {
            $scope.allDepartments = result;
        })
    }
    //saveDepartment
    $scope.AddDepartment = function () {
        var form = document.form;
        var departmentName = form.departmentName.value;

        if (departmentName.length > 0)
            departmentFactory.SaveDepartment({
                name: departmentName
            })
            .then(function (data) {
                $scope.successfullySaved = true;
                logsFactory.logEvent('Added departament : ' + departmentName);
            });
    }
});
