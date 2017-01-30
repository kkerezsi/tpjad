angular
    .module('userPanelModule')
    .factory('userPanelFactory', userPanelFactory)

userPanelFactory.$inject = ['Restangular'];
function userPanelFactory(Restangular) {
    return {
        getAllUsers: getAllUsers,
        editUser: editUser,
        addUser: addUser,
    };

    function getAllUsers() {
        return Restangular.one('users').get();
    }

    function addUser(user) {
        return Restangular.one('users/').post('',user);
    }

    function editUser(user) {
        return Restangular.all('users/' + user.id + '/').customPUT(user);
    }
}