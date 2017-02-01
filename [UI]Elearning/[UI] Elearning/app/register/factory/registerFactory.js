registerModule

.factory('registerFactory', function (Restangular) {
    return {
        saveUser: function (userToRegister) {
            return Restangular.all('/Register').post(userToRegister)
        }
    }
});
