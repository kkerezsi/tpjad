testlistModule

.factory('testlistFactory', function (Restangular, $q) {
    return {
        getTests: getTests,
        addTest: addTest,
        editTest: editTest,
        beginTest: beginTest,
        getScores: getScores,
        remove: remove
    };

    function getTests() {
        return Restangular.one('GetAllTests').post();
    }

    function addTest(test) {
        console.log(test);
        return Restangular.all("/AddTest").post(test);
    }

    function editTest(test) {
        console.log(test);
        return Restangular.all("/EditTest").post(test);
    }

    function beginTest(testResults) {
        console.log(testResults);
        return Restangular.all("/Submit").post(testResults);
    }

    function getScores(username) {
        console.log(username);
        return Restangular.all("/Results").post({ username: username });
    }

    function remove(id) {
        console.log(id);
        return Restangular.all("/Remove").post({ id: id });
    }
});
