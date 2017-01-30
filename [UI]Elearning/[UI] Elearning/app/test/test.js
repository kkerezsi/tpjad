testModule

var testModule = angular.module('testModule', [])

.controller('TestCtrl', function ($scope, $rootScope, testFactory, $filter) {

    $scope.allCourses = [];
    $scope.allLessons = [];

    $scope.question = { 'title': '', 'type': '' };
    $scope.options = [];
    $scope.test_code = '';
    $scope.question_count = 1;
    $scope.successfullySaved = false;

    LoadUserCourses();

    $scope.AddTest = function () {
        var form = document.form;

        

        finalCode = '<div class="jumbotron" style="width:600px;text-align:center;margin-left:200px;float:left;">' +
                    '<div class="container"><h2>Test</h2><form class="form-horizontal" name="test_form" novalidate>'+
                     $scope.test_code;

        console.log(finalCode);
        //finalCode = $scope.test_code;

        testFactory.AddTest({
            'title': form.testTitle.value,
            'description': form.testDescription.value,
            'deadline_date': $filter('date')(form.deadlineDate.value, 'yyyy-MM-dTHH:mm'),
            'test_type': '1',
            'password': form.testPassword.value,
            'max_grade':0,
            'test_code': finalCode,
            'last_grade': 0,
            'lesson': form.lesson.value

        }).then(function (data) {
            $scope.successfullySaved = true;
        });

        $scope.test_code = ' ';
    }
    $scope.AddQuestion = function(){

        var form = document.form;
        title = form.questionText.value;
        type = form.questionType.value;

        $scope.question.title = title;
        $scope.question.type = type;

        angular.element(document.querySelector('#testFormat')).html(angular.element(document.querySelector('#testFormat')).html() + $scope.question.title + '  of type ' + $scope.question.type + '<br> with options ' + $scope.options + '<br>');

        $scope.test_code = $scope.test_code + $scope.GenerateTestCode();

        $scope.options = [];
    }

    $scope.AddOption = function (param) {
        var form = document.form;

        if(param == 'S')
            text = form.questionOptionS.value;
        else
            text = form.questionOptionM.value;

        $scope.options.push(text);
    }
    $scope.GenerateTestCode = function () {

        //when addQuestion I have a question's title, type, and list of options

        code = "";

        if ($scope.question.type == 'TA')
            code = code + '<div class="form-group"><label>' + $scope.question.title + '</label><input type="text" class="form-control" id="question' + $scope.question_count + '" placeholder="Enter answer"></div>';
        if($scope.question.type == 'SA'){
            code = code + '<div class="form-group"><label>' + $scope.question.title + '</label>';
            $scope.options.forEach(function (entry) {
                code = code + '<div class="radio"><label><input type="radio" class="question" name="' + $scope.question_count + '">' + entry + '</label></div>'
            })
        }
        if ($scope.question.type == 'MA') {
            code = code + '<div class="form-group"><label>' + $scope.question.title + '</label>';
            $scope.options.forEach(function (entry) {
                code = code + '<div class="checkbox"><label><input type="checkbox"  class="question" name="question'+ $scope.question_count + '" value="">' + entry + '</label></div>';
            })
        }
        $scope.question_count += 1;

        return code;
    }
    //get user course list
    function LoadUserCourses() {
        testFactory.LoadUserCourse($rootScope.currentUser.id).then(function (result) {
            var filterByUser = $filter('filter')(result, { course_holder: $scope.currentUser.id }, true);

            $scope.allCourses = filterByUser;

            angular.forEach(filterByUser, function (value1, key) {
                angular.forEach(value1.lessons, function (value2, key) {
                    $scope.allLessons.push(value2);
                })
            })
        })
    }
});
