var studentModule = angular.module('studentModule', [])

.controller('StudentController', function StudentController($scope, studentFactory) {
    $scope.nrDeStudenti = 0;
    $scope.adaugaStudent = function () {
        $scope.nrDeStudenti++;
    };

    $scope.myList = ['Alex', 'Dora', 'Tudor'];

    $scope.adaugaStudentInLista = function (numeStudent) {
        $scope.myList.push(numeStudent);

        studentFactory.sendAllStudents($scope.myList);
    }
});