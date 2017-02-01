﻿angular
.module('testlistModule')
.controller('addTestCtrl', addTestCtrl)

addTestCtrl.$inject = ['test', '$scope', '$rootScope', '$modalInstance'];
function addTestCtrl(test, $scope, $rootScope, $modalInstance) {
    $scope.test = test;

    $scope.cancel = cancel;
    $scope.saveTest = saveTest;
    $scope.clear = clear;
    $scope.addOption = addOption;
    $scope.addQuestion = addQuestion;

    $scope.removeOption = removeOption;
    $scope.removeQuestion = removeQuestion;

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

    function addOption(options) {
        options.push({
            id: 0,
            text: "Default",
            corect: true
        })
    }

    function addQuestion(test) {
        if (!test.questionses)
            test.questionses = [];

        test.questionses.push(
            {
                id: 0,
                text: "Default question",
                answeres: [
                {
                    id: 0,
                    text: "Default",
                    corect: false
                }]
            }
        )
    }

    function removeOption(options, index) {
        options.splice(index, 1);
    }

    function removeQuestion(questions, index) {
        questions.splice(index, 1);
    }
}