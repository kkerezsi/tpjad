loginModule

.factory('loginFactory', function (Restangular, $cookieStore, Base64, $http, $rootScope, $timeout, configs, $location) {
    return {
        getAllUsers: getAllUsers,
        setCredentials: setCredentials,
        logout : logout
    };

    function getAllUsers() {
        return Restangular.one('users').get();
    }

    function setCredentials(user, permissionModel) {
        if (user) {
            $cookieStore.put('currentUser', user);

            permissionModel.permission.User = true;

            if (user.is_superuser) {
                permissionModel.permission.SuperUser = true;
            }

            if (!user.is_active) {
                permissionModel.permission.Blocked = true;
            }

            if (user.is_staff) {
                permissionModel.permission.Staff = true;
            }
        };

        return permissionModel;
    }

    function logout() {
        $cookieStore.remove('currentUser');
    }
})
