angular
.module('testlistModule')
.controller('beginTestCtrl', beginTestCtrl)

beginTestCtrl.$inject = ['test', '$scope', '$rootScope', '$modalInstance'];
function beginTestCtrl(test, $scope, $rootScope, $modalInstance) {
    $scope.test = test;

    $scope.cancel = cancel;
    $scope.saveTest = saveTest;
    $scope.clear = clear;
    $scope.submitTest = submitTest;

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

    function submitTest() {
        var testSubmit = {};

        testSubmit.id = test.id;
        testSubmit.userId = $rootScope.currentUser.id;
        testSubmit.submit = [];

        for (var question in test.questionses) {
            var answered = false;
            for (var answerOption in test.questionses[question].answeres) {
                
                if (test.questionses[question].answeres[answerOption].answer) {
                    testSubmit.submit.push({ question: test.questionses[question].id, answere: test.questionses[question].answeres[answerOption].id });
                    answered = true;
                    break;
                }
            }
        }

        console.log(testSubmit);
        $modalInstance.close(testSubmit);
    }

}