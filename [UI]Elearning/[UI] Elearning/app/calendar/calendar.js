var calendarModule = angular
    .module('calendarModule', ['daypilot'])
    .controller('CalendarCtrl', CalendarCtrl)

CalendarCtrl.$inject = ['$scope', '$rootScope', 'calendarFactory', 'utilsService', 'utilsFactory', '$timeout', 'notifier']

function CalendarCtrl($scope, $rootScope, calendarFactory, utilsService, utilsFactory, $timeout, notifier) {

    $scope.events = [];


    $scope.weekConfig = {
        visible: true,
        viewType: "Week"
    };


    $scope.navigatorConfig = {
        selectMode: "day",
        showMonths: 3,
        skipMonths: 3,
        onTimeRangeSelected: function (args) {
            $scope.weekConfig.startDate = args.day;
            $scope.dayConfig.startDate = args.day;
        }
    };

    function notifyEvents(text) {
        var notification = {
            template: 'New Events : ' + text,
            hasDelay: true,
            delay: 3000,
            type: 'success',
            position: 'top center'
        };
        notifier.notify(notification);
    }

    getAllEvents()

    function getAllEvents() {
      
        calendarFactory.getAllEvents().then(onEventsResponse)
    }

    function onEventsResponse(result) {
        index = 0
        console.log(result)
        for (index = 0; index < result.length ; index++) {
            $scope.events.push({
               
                start: new DayPilot.Date(result[index].date_start.slice(0,19)),
                end: new DayPilot.Date(result[index].date_end.slice(0, 19)),
                id: DayPilot.guid(),
                text: "#" + result[index].description
            })
        }
    }


}
