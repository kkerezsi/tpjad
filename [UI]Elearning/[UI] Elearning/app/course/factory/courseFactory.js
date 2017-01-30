courseModule

.factory('courseFactory', function (Restangular, $cookieStore, Base64, $http, $rootScope, $timeout,configs) {
    return {
        GetCourse:function(courseId){
            return Restangular.one('courses/' + courseId + '/').get();
        }
    }

})
