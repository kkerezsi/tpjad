groupsModule

.factory('groupsFactory', function (Restangular, $filter) {
    return {
        LoadGroups: function () {

            return Restangular.one('forum-groups').get();
        },
        LoadGroupDetails: function (id) {

            return Restangular.one('forum-group-pages/' + id).get();
        },
        SaveGroup: function (groupToSave) {
            return Restangular.one('forum-groups/').post("", groupToSave);
        },
        LoadDiscussion: function (id) {
            return Restangular.one('discussions/' + id).get();
        },
        SaveForumPost: function (postToSave) {
            return Restangular.one('forum-posts/').post("", postToSave);
        },
        GetUserName: function (id) {
            return Restangular.one('users/' + id).get();
        },
        SaveGroupPage: function (pageGroup) {
            return Restangular.one("forum-group-pages/").post("", pageGroup);
        },
        CreateTopic: function (topic) {
            return Restangular.one('discussions/').post("", topic);
        }
    }
});




