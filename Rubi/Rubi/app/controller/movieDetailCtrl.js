app.controller("movieDetailCtrl", ["$rootScope", "$scope", "movieService", "searchService", "$routeParams", "$location",
    function ($rootScope, $scope, movieService, searchService, $routeParams, $location) {

    $scope.movieData = [];

    init();

    function init() {

        $rootScope.showTab = false;

        movieService.getById($routeParams.movieId).then(
            function(result) {
                $scope.movieData = result.data;
                $scope.movieData.imgLink = "http://image.tmdb.org/t/p/w320//" + result.data.poster_path;
            },
            function (error) {

            });
    };

    $scope.back = function () {
        $rootScope.showTab = true;
        $location.path("movies");
    };
}]);