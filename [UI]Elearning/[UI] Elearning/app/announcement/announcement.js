
var announcementModule = angular.module('announcementModule', [])

.controller('AnnouncementCtrl', function ($scope, $rootScope, announcementFactory, logsFactory) {
    $scope.allAnnouncements = [];

    GetAnnouncements();

    $scope.Minimize = function (event) {
        if (angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display == 'none')
            angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display = 'block';
        else
            angular.element(event.currentTarget.parentNode.parentNode.children)[1].style.display = 'none';

    }
    function GetAnnouncements(){
        announcementFactory.GetAnnouncements().then(function (result) {
            $scope.allAnnouncements = result;
        })
    }
    $scope.AddAnnouncement = function () {
        var form = document.form;
        var title = form.title.value;
        var content = form.content.value;

        if (title.length > 0 && content.length > 0)
            return announcementFactory.AddAnnouncement({
                'title': title,
                'text': content
            })
            .then(function (data) {
                $scope.successfullySaved = true;
                logsFactory.logEvent('Created announcement');
            });
    }
});
