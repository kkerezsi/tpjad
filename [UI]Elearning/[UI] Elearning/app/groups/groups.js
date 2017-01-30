var groupsModule = angular.module('groupsModule', [])

.controller('GroupsCtrl', function ($scope, $rootScope, $filter, groupsFactory) {
    
    /* cum is organizate grupurile & forums 

        Forum Group -> contine Forum Group page -> contine Discussions -> contine Forum Post
        
    */


    AllGroups();
    $scope.groupSelected = false;
    $scope.discussionClosed = true;
    $scope.theDiscussion = {};
    $scope.forumReply = "";
    $scope.newGroupName = "";
    $scope.newGroupType = "";
    $scope.newGroupTitle = "";
    $scope.newTopic = "";
    function AllGroups() {
        groupsFactory.LoadGroups().then(function (result) {
            $scope.groupsList = result;
            
        })
    }

    $scope.theGroup = {};

    $scope.selectGroup = function (groupId, groupName) {
        groupsFactory.LoadGroupDetails(groupId).then(function (result) {
            $scope.theGroup.name = groupName;
            $scope.theGroup.info = result;
            $scope.groupSelected = true;
        });
        
    }

    $scope.deselectGroup = function () {
        $scope.groupSelected = false;
    }
    
    $scope.deselectDiscussion = function () {
        $scope.discussionClosed = true;
    }

    $scope.selectDiscussion = function (discussionId) {
        groupsFactory.LoadDiscussion(discussionId).then(function (result) {
            $scope.theDiscussion = result;
            $scope.discussionClosed = false;
            angular.forEach($scope.theDiscussion.forum_posts, function (value, key) {
                groupsFactory.GetUserName(value.poster).then(function (result) {
                    $scope.theDiscussion.forum_posts[key].posterName = result.username;
                })
            });
        })
    }
    $scope.saveReply = function () {
        var forumPost = {
            "poster": $scope.currentUser.id,
            "discussion": $scope.theDiscussion.id,
            "type": "auto",
            "text": $scope.forumReply
        }
        groupsFactory.SaveForumPost(forumPost).then(function (result) {
            $scope.selectDiscussion(result.discussion);
            $scope.forumReply = "";
        })
    }

    $scope.createGroup = function () {
        var newGroup = {
            "name": $scope.newGroupName,
            "type": $scope.newGroupType
        };
        groupsFactory.SaveGroup(newGroup).then(function (result) {
            AllGroups();
            $scope.newGroupName = "";
            $scope.newGroupType = "";
            
            var pageDetails = {
                "forum_group": result.id,
                "title": $scope.newGroupTitle
            }
            groupsFactory.SaveGroupPage(pageDetails).then(function () {
                $scope.newGroupTitle = "";
            })
            
        })
    }

    $scope.createTopic = function () {
        var topic = {
            "forum_group_page": $scope.theGroup.info.id,
            "poster": $scope.currentUser.id,
            "title": $scope.newTopic
        };
        groupsFactory.CreateTopic(topic).then(function () {
            $scope.selectGroup($scope.theGroup.info.id, $scope.theGroup.name);
            $scope.newTopic = "";
        })
    }

    

});
