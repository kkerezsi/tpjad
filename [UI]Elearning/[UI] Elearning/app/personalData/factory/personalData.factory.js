angular
    .module('personalDataModule')
    .factory('personalDataFactory', personalDataFactory)

personalDataFactory.$inject = ['Restangular'];
function personalDataFactory(Restangular) {
    return {
        getPersonalData: getPersonalData,
        getAllUsers: getAllUsers,
        savePersonalChanges: savePersonalChanges
    };

    function getPersonalData(userId) {
        return Restangular.one('users', userId).get();
    }

    function getAllUsers() {
        return Restangular.one('users').get();
    }

    function savePersonalChanges(data) {
        return Restangular.all('users/' + data.id + '/').customPUT(data);
    }
}