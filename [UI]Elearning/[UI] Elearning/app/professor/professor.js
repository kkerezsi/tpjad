var professorModule = angular.module('professorModule', [])

.controller('ProfessorCtrl', function ($scope, $rootScope, $filter, $sce, professorFactory, logsFactory, departmentFactory) {
    $scope.courseName = "";
    $scope.startDate = "";
    $scope.endDate = "";
    $scope.department = "";
    $scope.allCourses = [];
    $scope.allEvents = [];
    $scope.allDepartments = [];
    $scope.allTests =[];


    LoadTests();
    LoadUserCourses();
    LoadDepartments();
    //LoadCourseEvents();

    $scope.ShowCode = function ($event,test) {
        if (angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display == 'none') {
            angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display = 'block';
            angular.element(event.currentTarget.parentNode.parentNode.children)[1].innerHTML = test.test_code;
        }
        else
            angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display = 'none';
    }
    //Calendar initializer
    $scope.InitializeCalendar = function () {
        YUI().use(
                    'aui-scheduler',
                    function (Y) {
                        var events = [];

                        var agendaView = new Y.SchedulerAgendaView();
                        var dayView = new Y.SchedulerDayView();
                        var eventRecorder = new Y.SchedulerEventRecorder();
                        var monthView = new Y.SchedulerMonthView();
                        var weekView = new Y.SchedulerWeekView();

                        new Y.Scheduler(
                          {
                              activeView: weekView,
                              boundingBox: '#myScheduler',
                              date: new Date(),
                              eventRecorder: eventRecorder,
                              items: $scope.allEvents,
                              render: true,
                              views: [weekView, monthView]
                          }
                        );
                        Y.Do.after(function () {
                            this.on("save", function (data) {
                                //to create event in DB with above data + course from select
                                AddCourseEvent(data);
                            });
                        }, eventRecorder, 'showPopover');

                        Y.Do.after(function () {
                            this.on("delete", function (data) {

                                console.log("delete");
                                //to delete event in DB

                            });
                        }, eventRecorder, 'showPopover');
                    }
                    );
    }

    function LoadTests() {
        var aux = $scope.currentUser.course_held;

        //for each course
        angular.forEach(aux, function (value, key) {
            //for each lesson
            angular.forEach(value.lessons, function (value2, key) {
                //for each Test
                angular.forEach(value2.tests, function (value3, key) {
                    value3.lesson = value2.name;
                    $scope.allTests.push(value3);
                })

            })

        })

    } 


    function AddCourseEvent(data) {
        var form = document.event_form;
        var course = form.course.value;
        console.log(course.start_date);
        professorFactory.AddCourseEvent({
            'date_start': $filter('date')(data.newSchedulerEvent._state.data.startDate.value, 'yyyy-MM-dTHH:mm'),
            'date_end': $filter('date')(data.newSchedulerEvent._state.data.endDate.value, 'yyyy-MM-dTHH:mm'),
            'course': course,
            'description': data.newSchedulerEvent._state.data.content.value
        })
                    .then(function (data) {
                        $scope.successfullySavedEvent = true;
                    });

    }
    //saveCourse
    $scope.AddCourse = function () {
        var form = document.form;
        
       
        if (form.courseName.value.length > 0 && form.department.value.length > 0)
            professorFactory.SaveCourse({
                'name': form.courseName.value,
                'date_start': $filter('date')(form.startdate.value, 'yyyy-MM-dTHH:mm'),
                'date_end': $filter('date')(form.enddate.value, 'yyyy-MM-dTHH:mm'),
                'department': form.department.value,
                'content': form.content.value,	
                'contact': form.contact.value,
                'syllabus': form.syllabus.value,
                'course_holder': $rootScope.currentUser.id
            })
            .then(function (data) {
                $scope.successfullySaved = true;
                logsFactory.logEvent('Successfully saved course ' + form.courseName.value);
                LoadUserCourses();
         });
    }
    $scope.RemoveCourse = function (course, courseName) {
        professorFactory.RemoveCourse(course).then(function (data) {
            LoadUserCourses();
            logsFactory.logEvent('Successfully deleted course ' + courseName);
        });
    }
    $scope.LoadCourseEvents = function() {
        professorFactory.LoadUserCourse($rootScope.currentUser.id).then(function (result1) {
            var filterByUser = $filter('filter')(result1, { course_holder: $scope.currentUser.id }, true);

            angular.forEach(filterByUser, function (value1, key) {
                professorFactory.GetEvents().then(function (result2) {
                    var filterByCourse = $filter('filter')(result2, { course: value1.id }, true);
                    angular.forEach(filterByCourse, function (value2, key) {
                        $scope.allEvents.push({
                            content: value2.description,
                            endDate: new Date(value2.date_start.substring(0, 10)),
                            startDate: new Date(value2.date_start.substring(0,10))
                        })
                        //$scope.InitializeCalendar();
                    })
                    $scope.InitializeCalendar();
                })
            })
        })
    }
    function LoadDepartments() {
        
        departmentFactory.getAllDepartments().then(function(result){
             $scope.allDepartments = result;
        });
    }
    //get user course list
    function LoadUserCourses() {
        professorFactory.LoadUserCourse($rootScope.currentUser.id).then(function (result) {
            var filterByUser = $filter('filter')(result, { course_holder: $scope.currentUser.id }, true);

            angular.forEach(filterByUser, function (value1, key) {
                professorFactory.GetDepartment(value1.department).then(function (result) {
                    value1.department = result.name;
                    $scope.allCourses = filterByUser;
                })
            });

            //$scope.allCourses = filterByUser;
        })
    }

});
