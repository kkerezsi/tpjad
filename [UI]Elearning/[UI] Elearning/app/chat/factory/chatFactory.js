angular
    .module('chatModule')
    .factory('chatFactory', chatFactory)

chatFactory.$inject = ['Restangular'];
function chatFactory(Restangular) {
    return {
        getAllUsers: getAllUsers,
        getMessages: getMessages,
        sendMessage: sendMessage
    };

    function getAllUsers() {
        return Restangular.one('users').get();
    }
    function getMessages() {
        return Restangular.one('messages').get();
    }
    function sendMessage(msg) {
        return Restangular.one('messages/').post('', msg);
    }
}