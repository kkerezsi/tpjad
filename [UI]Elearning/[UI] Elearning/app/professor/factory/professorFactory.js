professorModule

.factory('professorFactory', function (Restangular, $filter) {
    return {
        SaveCourse: function (courseToSave) {
            return Restangular.one('courses/').post('', courseToSave);
        },
        AddCourseEvent: function (eventToSave) {
            return Restangular.one('events/').post('', eventToSave);
        },
        RemoveCourse: function(course){
            return Restangular.one('courses/' + course + '/').remove();
        },
        GetEvents: function(){
            return Restangular.one('events/').get();
        },
        GetDepartment: function(department){
            return Restangular.one('departments/' + department + '/').get();
        },
        LoadUserCourse: function (user) {
            courses = [];
            departments = [];
            return Restangular.one('courses').get();       
           
        }
    }
});




