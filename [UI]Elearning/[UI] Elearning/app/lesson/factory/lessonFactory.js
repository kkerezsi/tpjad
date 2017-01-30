lessonModule

.factory('lessonFactory', function (Restangular) {
    return {
        LoadUserCourse: function (user) {
            courses = [];
            departments = [];
            return Restangular.one('courses').get();
        },
        RemoveLesson: function (lesson) {
            return Restangular.one('lessons/' + lesson + '/').remove();
        },
        GetLessons: function () {
            return Restangular.one('lessons').get();
        },
        AddLesson: function (lesson) {
            return Restangular.one('lessons/').post('', lesson);
        }

    }
});

