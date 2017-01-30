angular
    .module('elearning')
    .service('utilsFactory', utilsFactory)

utilsFactory.$inject = ['Restangular'];
function utilsFactory(Restangular) {

    return {
        generateGetUrl: generateGetUrl
    }

    function generateGetUrl(url) {
        return Restangular.one(url).get();
    }
}