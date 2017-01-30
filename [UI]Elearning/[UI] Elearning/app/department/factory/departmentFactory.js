departmentModule

.factory('departmentFactory', function (Restangular) {
    return {
        SaveDepartment: function (departmentToSave) {
            return Restangular.one('departments/').post('',departmentToSave);
        },
        getAllDepartments: function () {
            return Restangular.one('departments').get();
        }
    }
});

