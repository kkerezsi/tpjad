angular
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
            text: "Default",
            isAnswer: false
        })
    }

    function addQuestion(test) {
        if (!test.questions)
            test.questions = [];

        test.questions.push(
            {
                id: null,
                value: "Default question",
                options: [
                {
                    text: "Default",
                    isAnswer: true
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