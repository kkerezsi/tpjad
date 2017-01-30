var logsModule = angular.module('logsModule', [])
    .controller('LogsCtrl', LogsCtrl )

LogsCtrl.$inject = ['$scope', '$rootScope', 'logsFactory']
function LogsCtrl($scope, $rootScope, logsFactory) {
    
    $scope.logs = [];

    getLogs();

    function getLogs() {
        logsFactory.getLogs().then(function (data) {
            $scope.logs = data;
        })
    }
}
