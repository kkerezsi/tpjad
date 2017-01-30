angular
    .module('courseListModule',[])
    .factory('courseListFactory', courseListFactory)

courseListFactory.$inject = ['Restangular'];
function courseListFactory(Restangular) {

    return {
        getAllCourses: getAllCourses,
        enrollUserToCourse: enrollUserToCourse
    };

    function getAllCourses() {
        return Restangular.one('courses').get();
    }

    function enrollUserToCourse(json) {
        return Restangular.one('enrollments/').post('',json)
    }


   
}