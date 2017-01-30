var chatModule = angular
    .module('chatModule', [])
    .controller('ChatCtrl', ChatCtrl)
//i call cheese
ChatCtrl.$inject = ['$scope', '$rootScope', 'chatFactory', '$interval', '$filter']
function ChatCtrl($scope, $rootScope, chatFactory, $interval, $filter) {
    $scope.allUsers = [];
    $scope.Messages = [];
    
    $scope.currentUser = $rootScope.currentUser;
    //Reciever of messages, Hail the default empty string
    $scope.reciever = { id: 0, username: "" };

    $scope.MsgInputModel;

    //Used in getAllMessages func.......no I dont
    var NEWMessages = [];
    var Recieved = [];

    //Kings change
    //On click new user to chat
    $scope.setReciever = function (param) {
        $scope.reciever = param;
        getAllMessages();
    }

    //Returns user list
    getAllUsers();
    function getAllUsers() {
        chatFactory.getAllUsers().then(function (result) {
            $scope.allUsers = result;
            console.log($scope);
        })
    };

    //On message send button
    $scope.send = function () {
        var json = { sender: $scope.currentUser.id, receiver: $scope.reciever.id, text: $scope.MsgInputModel };
        $scope.Messages.push(json);
        chatFactory.sendMessage(json);
        $scope.MsgInputModel = "";
    }

    //Returns all Messages, add to scope those we are interrested in
    getAllMessages();
    function getAllMessages() {
        chatFactory.getMessages().then(function (result) {
            NEWMessages = result;
        });
        //console.log("GOT: ");
        //console.log(NEWMessages);
        Recieved = [];
        for (i = 0; i < NEWMessages.length; i++) {
            if (NEWMessages[i].sender == $scope.currentUser.id && NEWMessages[i].receiver == $scope.reciever.id) {

                Recieved.push(NEWMessages[i]);
                //console.log("SENT: "+NEWMessages[i].text);
            } else if (NEWMessages[i].sender == $scope.reciever.id && NEWMessages[i].receiver == $scope.currentUser.id) {
                Recieved.push(NEWMessages[i]);
                //console.log("RECEIVED: "+NEWMessages[i].text);
            } else {
                //console.log("NOT FOR THIS CONVERSATION");
            }
        }
        if (Recieved.length == $scope.Messages) {
            //console.log("NO NEED TO UPDATE");
        } else {
            $scope.Messages = Recieved;
            //console.log("MESSAGES UPDATED");
        }
    };

    //Updates Message list
    var refresher = $interval(function () {
        //Fuck this shit--^
        getAllMessages();
    }, 2000, 0, false);


    $scope.$on('$destroy', function () {
        // So that it wont DDOS the django server
        // PS: will do it anyway
        $interval.cancel(refresher);
    });
};