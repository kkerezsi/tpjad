announcementModule

.factory('announcementFactory', function (Restangular) {
    return {
        GetAnnouncements: function () {
            return Restangular.one('announcements').get();
        },

        AddAnnouncement: function (addAnnouncement) {
            debugger
            var x = {
                x:addAnnouncement
            }
            return Restangular.one('announcements/').post('', addAnnouncement);
        }
    }
});
