app.controller("tvShowDetailCtrl", ["$rootScope", "$scope", "tvShowService", "searchService", "$routeParams", "$location",
    function ($rootScope, $scope, tvShowService, searchService, $routeParams, $location) {

    $scope.tvShowData = [];

    init();

    function init() {

        $rootScope.showTab = false;

        tvShowService.getById($routeParams.tvShowId).then(
            function (result) {
                $scope.tvShowData = result.data;
                $scope.tvShowData.imgLink = "http://image.tmdb.org/t/p/w320//" + result.data.poster_path;
            },
            function (error) {

            });
    };

    $scope.back = function () {
        $rootScope.showTab = true;
        $location.path("tvshows");
    };

}]);