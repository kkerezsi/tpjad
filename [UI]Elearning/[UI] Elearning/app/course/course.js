var courseModule = angular.module('courseModule', [])
.controller('CourseCtrl',
 function ($scope, $rootScope,$routeParams,$cookieStore,$filter, courseFactory) {


     document.getElementById("itemTitle").textContent =$routeParams.courseName;


     $scope.sideBarItems = [];
     $scope.allLessons = [];
     $scope.allTests = [];
     $scope.currentTest;

     getCourse();

     $scope.taketest = function (test) {

         $scope.currentTest = test;

         document.getElementById("description").style.display = "none";
         document.getElementById("test_content").style.display = "block";
        
         if (test.password != '' && test.password != null) {
             document.getElementById("test_content").innerHTML = '<div class="form-group" style="margin-top:60px;"><label class="col-sm-2 control-label">Course Password</label><div class="col-sm-10"><input class="form-control" id="password" type="text" required></div></div><br><br><div class="col-lg-4 text-center" style="margin-left:40%;"><button class="btn btn-primary col-lg-11" ng-click="SubmitPassword()" style="height:30px">SUBMIT</button></div></form></div></div>';
         }
         else {
             document.getElementById("test_content").innerHTML = test.test_code + '<div class="col-lg-4 text-center" style="margin-left:40%;"><button class="btn btn-primary col-lg-11" ng-click="SubmitTest()" style="height:30px">SUBMIT</button></div></form></div></div>';
         }
     }
     $scope.SubmitTest = function () {
         console.log("heey");

     }
     $scope.SubmitPassword = function () {
         console.log(document.getElementById("password").nodeValue);
         if (document.form.password.value == $scope.currentTest.password) {
             document.getElementById("test_content").innerHTML = test.test_code + '<div class="col-lg-4 text-center" style="margin-left:40%;"><button class="btn btn-primary col-lg-11" ng-click="AddCourse()" style="height:30px">SUBMIT</button></div></form></div></div>';
         }
     }
     $scope.showLesson = function (lesson) {
         
         var filterLesson = $filter('filter')($scope.allLessons, { id: lesson }, true);

         document.getElementById("description").innerHTML = '<h3>Description</h3><br>' + filterLesson.description +
                                                     '<h3>Content</h3><br>' + filterLesson.content;
         $scope.allTests = filterLesson[0].tests;
     }
     $scope.change = function ($index) {
         if ($index == 4) {
             document.getElementById("main").style.display ="none";
             document.getElementById("list").style.display="block";
         }
         else {
             document.getElementById("description").style.display = "none";
             document.getElementById("test_content").style.display = "none";
             document.getElementById("main").style.display = "block";
             document.getElementById("list").style.display = "none";
             document.getElementById("itemTitle").textContent = $scope.sideBarItems[$index].itemName;
             document.getElementById("itemContent").textContent = $scope.sideBarItems[$index].content;
         }
     }

     function getCourse() {
         var courseId = $cookieStore.get('currentCourse');
         console.log(courseId);
         courseFactory.GetCourse(courseId).then(function (result) {

             $scope.allLessons = result.lessons;

             $scope.sideBarItems = [{
                 itemName: result.name,
                 content: result.description +
                          "Start date:" + result.date_start +
                          "End date:" + result.date_end
             },
             {
                 itemName: 'Syllabus',
                 content: result.syllabus
             },
             {
                 itemName: 'Content',
                 content: result.content
             },
             {
                 itemName: 'Contact',
                 content: result.contact
             },
             {
                 itemName: 'Lessons',
                 content: ''
             }]
                 })
     }


 });
