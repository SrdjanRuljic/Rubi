app.controller("moviesCtrl", ["$scope", "movieService", "searchService", "$location", function ($scope, movieService, searchService, $location) {

    $scope.searchInput = "";

    $scope.moviesData = [];

    $scope.page = 1;

    init();

    function init() {
        movieService.topReated($scope.page++).then(
        function (result) {
            $scope.moviesData = prepareData(result.data.results.slice(0, 10));
        },
        function (error) {

        });
    };

    $scope.previewMovie = function (movieId) {
        $location.path("movieDetail/" + movieId);
    };

    $scope.searchEvent = function () {

        if ($scope.searchInput.length > 3) {
            searchService.searchMovie($scope.searchInput)
            .then(function (result) {
                $scope.moviesData = prepareData(result.data.results);
            }, function (error) {
                $scope.error = 'has failed... ' + error;
            });
        }
    };

    function prepareData(data) {
        angular.forEach(data, function (item) {
            item.imgLink = null;
            if (item.poster_path !== null) {
                item.imgLink = "http://image.tmdb.org/t/p/w320//" + item.poster_path;
            }
        });

        return data;
    }

}]);