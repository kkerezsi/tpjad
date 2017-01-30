angular
    .module('elearning')
    .service('utilsService', utilsService)

utilsService.$inject = ['configs'];
function utilsService(configs) {

    return {
        getValidUrl: getValidUrl
    }

    function getValidUrl(url) {
        var newUrl = url.replace(configs.baseUrl, "");

        return newUrl;
    }
}