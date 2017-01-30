angular.module('logsModule')
    .factory('logsFactory', logsFactory)

logsFactory.$inject = ['$rootScope', 'Restangular', '$filter'];
function logsFactory($rootScope, Restangular, $filter) {
    return {
        logEvent: logEvent,
        getLogs: getLogs
    }

    function buildEventModel(description) {
        var today = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss.sssZ');

        var event = {
            "entity_id": $rootScope.currentUser.id,
            "Entity_name": $rootScope.currentUser.username,
            "date_created": today,
            "description": description
        }

        return event;
    }

    function logEvent(description) {
        var newEvent = buildEventModel(description);
        Restangular.one('logs/').post('', newEvent);
    }

    function getLogs() {
        return Restangular.one('logs').get();
    }
}