lessonModule

var lessonModule = angular.module('lessonModule', [])

.controller('LessonCtrl', function ($scope, $rootScope, lessonFactory, $filter) {

    $scope.allCourses = [];
    $scope.allLessons = [];
    $scope.successfullySaved;

    LoadUserCourses();
    LoadLessons();
  
    $scope.AddLesson = function () {
        var form = document.form;

        lessonFactory.AddLesson({
            'name': form.lessonName.value,
            'date_start': $filter('date')(form.startdate.value, 'yyyy-MM-dTHH:mm'),
            'date_end': $filter('date')(form.enddate.value, 'yyyy-MM-dTHH:mm'),
            'description': form.description.value,
            'content':form.content.value,
            'course': form.course.value
        }).then(function (data) {
            LoadLessons();
            $scope.successfullySaved = true;
        });
    }
    function LoadLessons() {
        lessonFactory.GetLessons().then(function (result) {
            $scope.allLessons = result;
        })
    }

    $scope.RemoveLesson = function (lesson) {
        lessonFactory.RemoveLesson(lesson).then(function (data) {
            LoadLessons();
        });
    }

    //get user course list
    function LoadUserCourses() {
        lessonFactory.LoadUserCourse($rootScope.currentUser.id).then(function (result) {
            $scope.allCourses = result;
            //$scope.allCourses = filterByUser;
        })
    }
});
