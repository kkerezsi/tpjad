testModule

.factory('testFactory', function (Restangular) {
    return {
        LoadUserCourse: function (user) {
            courses = [];
            departments = [];
            return Restangular.one('courses').get();
        },
        AddTest: function (test) {
            return Restangular.one('tests/').post('', test);
        }
    }
});

