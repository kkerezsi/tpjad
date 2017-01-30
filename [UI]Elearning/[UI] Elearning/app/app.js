///Created by Kerezsi Alex
'use strict';

var roles = {
    Blocked: 0,
    User: 1,
    SuperUser: 2,
    Staff: 3
};

var routeForUnauthorizedAccess = '/LogIn';

//Aici o sa se includa modulele create
var app = angular.module('elearning', [
    'restangular',
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'configsModule',
    'ngStorage',
    'homepageModule',
    'registerModule',
    'studentModule',
    'loginModule',
    'calendarModule',
    'courseModule',
    'courseListModule',
    'personalDataModule',
    'professorModule',
    'announcementModule',
    'departmentModule',
    'lessonModule',
    'testModule',
    'chatModule',
    'llNotifier',
    'ngAnimate',
    'userPanelModule',
    'logsModule',
    'groupsModule',
    'testlistModule',
])
.config(function config($routeProvider, RestangularProvider, $httpProvider, configs) {
    RestangularProvider.setBaseUrl(configs.baseUrl);
    $httpProvider.defaults.useXDomain = true;
    $routeProvider
        .when('/', {
            controller: 'HomepageCtrl',
            templateUrl: 'app/homepage/homepage.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    //return authorizationService.permissionCheck([
                    //    roles.User
                    //]);
                }
            }
        })

        .when('/TestList', {
            controller: 'testlistCtrl',
            templateUrl: 'app/testlist/testlist.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    //return authorizationService.permissionCheck([
                    //    roles.User
                    //]);
                }
            }
        })
         .when('/Register', {
             controller: 'RegisterCtrl',
             templateUrl: 'app/register/register.html',
             resolve: {
                 permission: function (authorizationService, $route) {
                     return authorizationService.permissionCheck([
                     ]);
                 }
             }
         })
        .when('/LogIn',
        {
            controller: 'LoginCtrl',
            templateUrl: 'app/login/login.html',
        })
        .otherwise({ redirectTo: '/LogIn' });
})

.controller('AppCtrl', function ($scope, $rootScope, $route, $cookieStore, loginFactory, $location, authorizationService, logsFactory, notifier, $modal, testlistFactory) {

    $scope.newTest = newTest;
    $scope.scoreBoard = scoreBoard;
    
    function scoreBoard() {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/testlist/score/score.html',
            controller: 'scoreTestCtrl',
            size: 'lg',
            resolve: {
                test: function () { }
            }
        });

        modalInstance.result.then(function (test) {
        }, function error() {
            //notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
        });
    }

    function newTest() {
        var test = {
            id: null,
            description: "",
            questions: [
            ],
            isNew : true
        }

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/testlist/addTest/addTest.html',
            controller: 'addTestCtrl',
            size: 'lg',
            resolve: {
                test: function () { return angular.copy(test); }
            }
        });

        modalInstance.result.then(function (test) {
            testlistFactory.addTest(test).then(function success() {
                notifier.notify("Test saved successfully");
                testlistFactory.getTests().then(function (tests) {
                    $scope.tests = tests;
                });
            }, function error() {
                notifier.notify("An error occured durring the saving process. Please review all your fields and try again");
            })
        });
    }

    $rootScope.checkPermission = function (permission) {
        if (!$rootScope.currentUser)
            return false;

        switch (permission) {
            case "User": return $rootScope.currentUser != null; break;
            case "SuperUser": return $rootScope.currentUser && $rootScope.currentUser.is_superuser; break;
            case "Staff": return $rootScope.currentUser && $rootScope.currentUser.is_staff; break;
            case "Blocked": return $rootScope.currentUser && !$rootScope.currentUser.is_active; break;
            default: return false;
        }
    }

    $scope.getCookie = function () {
        var currentUser = $cookieStore.get('currentUser');
        if (currentUser != null) {
            $rootScope.currentUser = currentUser;
            $scope.username = $rootScope.currentUser.username;
        }
    }

    $scope.setDefalut = function () {
        if ($rootScope.currentUser == null || $rootScope.currentUser == undefined)
            $rootScope.currentUser = {
            };
    };

    $scope.logout = function () {
        logsFactory.logEvent('Logged out');
        loginFactory.logout();
        $scope.username = undefined;
        $rootScope.currentUser = null;
        authorizationService.resetPermissionModel();
        $location.path('/LogIn');
    }

    $scope.getCookie();
    $scope.setDefalut();
})

.factory('authorizationService', function ($resource, $q, $rootScope, $location, configs, loginFactory, Restangular, $filter) {
    return {
        permissionModel: {
            permission: {
                Blocked: false,
                User: false,
                SuperUser: false,
                Staff: false
            },

            isPermissionLoaded: false
        },

        permissionCheck: function (roleCollection) {
            var deferred = $q.defer();
            var parentPointer = this;

            if (this.permissionModel.isPermissionLoaded) {
                this.getPermission(this.permissionModel, roleCollection, deferred);
            } else {
                Restangular.one('users').get().then(function (response) {
                    loginFactory.getAllUsers().then(function (data) {
                        var filterByUsername = [];

                        if ($rootScope.currentUser && $rootScope.currentUser.username) {
                            var filterByUsername = $filter('filter')(data,
                                {
                                    username: $rootScope.currentUser.username,
                                    password: $rootScope.currentUser.password
                                },
                            true);

                            if (filterByUsername.length > 0) {
                                parentPointer.permissionModel = loginFactory
                                    .setCredentials(filterByUsername[0], parentPointer.permissionModel);
                            }

                            parentPointer.permissionModel.isPermissionLoaded = true;
                        } else {
                            parentPointer.permissionModel.isPermissionLoaded = false;
                        }

                        parentPointer.getPermission(parentPointer.permissionModel, roleCollection, deferred);
                    });
                });
            }

            return deferred.promise;
        },

        getPermission: function (permissionModel, roleCollection, deferred) {
            var ifPermissionPassed = true;

            angular.forEach(roleCollection, function (role) {
                switch (role) {
                    case roles.Blocked:
                        ifPermissionPassed = ifPermissionPassed && permissionModel.permission.Blocked;
                        break;
                    case roles.User:
                        ifPermissionPassed = ifPermissionPassed && permissionModel.permission.User;
                        break;
                    case roles.SuperUser:
                        ifPermissionPassed = ifPermissionPassed && permissionModel.permission.SuperUser;
                        break;
                    default:
                        ifPermissionPassed = ifPermissionPassed && false;
                }
            });

            if (!ifPermissionPassed) {
                $location.path(routeForUnauthorizedAccess);
                $rootScope.$on('$locationChangeSuccess', function (next, current) {
                    deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
        },
        resetPermissionModel: function () {
            this.permissionModel = {
                permission: {
                    Blocked: false,
                    User: false,
                    SuperUser: false,
                    Staff: false
                },

                isPermissionLoaded: false
            };
        }
    };
});
