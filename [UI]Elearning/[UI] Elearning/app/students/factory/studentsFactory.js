studentsModule

.factory('studentsFactory', function (Restangular) {
    return {
        GetTests: function (user) {
            return Restangular.one('users/'+user+"/").get();
        },
        SubmitTestAnswer: function (test) {
            return Restangular.one('tests').post('', test);
        }
    }
});

