var courseListModule = angular
    .module('courseListModule', [])
    .controller('CourseListCtrl', CourseListCtrl)

CourseListCtrl.$inject = ['$scope', '$rootScope', '$cookieStore', 'courseListFactory', 'utilsService', 'utilsFactory', '$timeout', 'notifier', 'logsFactory']

function CourseListCtrl($scope, $rootScope, $cookieStore, courseListFactory, utilsService, utilsFactory, $timeout, notifier, logsFactory) {

    var ENROLL_LABEL = 'Enroll'
    var GOTO_LABEL = 'Go to'

    $scope.courses = []
    var enrollments = []

    getAllCourses()

    function getAllCourses() {
        courseListFactory.getAllCourses().then(onCoursesResponse)
    }

    function getAllEnrollments() {
        courseListFactory.getAllEnrollments().then(onEnrollmentsResponse)
    }

    function onCoursesResponse(result) {
        $scope.courses = result
        computeCourseEnrollmentsForCurrentUser()
    }


    function computeCourseEnrollmentsForCurrentUser() {

        var courseIndex
        var enrollmentIndex
        var enrollments

        for (courseIndex = 0; courseIndex < $scope.courses.length; courseIndex++) {

            enrollments = $rootScope.currentUser.enrollments
            if (enrollments.length == 0) {
                labelCourseAsAvailable($scope.courses[courseIndex])
            }

            for (enrollmentIndex = 0; enrollmentIndex < enrollments.length; enrollmentIndex++) {

                if ($scope.courses[courseIndex].id == enrollments[enrollmentIndex].course) {
                    labelCourseAsEnrolled($scope.courses[courseIndex])
                    break;
                }
                labelCourseAsAvailable($scope.courses[courseIndex])
            }
        }
    }

    function labelCourseAsEnrolled(course) {
        course.label = GOTO_LABEL
    }

    function labelCourseAsAvailable(course) {
        course.label = ENROLL_LABEL
    }

    $scope.enroll = function ($index, id) {
        var course = $scope.courses[$index]

        if (course.label != ENROLL_LABEL) {
            $cookieStore.put('currentCourse', id);
            return;
        }
        var enrollmentJson = {
            course: course.id,
            user: $rootScope.currentUser.id,
            grade: 0
        }
        courseListFactory.enrollUserToCourse(enrollmentJson).then(function (result) {
            notifyEnrollment(course);
            labelCourseAsEnrolled($scope.courses[$index]);
            logsFactory.logEvent('Enrolled to course' + course.name);
        })
    }

    function notifyEnrollment(course) {
        var notification = {
            template: 'Enrolled to ' + course.name,
            hasDelay: true,
            delay: 3000,
            type: 'success',
            position: 'center'
        };
        notifier.notify(notification);

    }

}


