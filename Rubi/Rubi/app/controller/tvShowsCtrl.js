app.controller("tvShowsCtrl", ["$scope", "tvShowService", "searchService", "$location", function ($scope, tvShowService, searchService, $location) {

    $scope.searchInput = "";

    $scope.tvShowsData = [];

    $scope.page = 1;

    init();

    function init() {
        tvShowService.topReated($scope.page++).then(
            function (result) {
                $scope.tvShowsData = prepareData(result.data.results.slice(0, 10));
            },
            function (error) {

            });
    };

    $scope.searchEvent = function () {

        if ($scope.searchInput.length > 3) {
            searchService.searchTv($scope.searchInput)
                .then(function (result) {
                    $scope.tvShowsData = prepareData(result.data.results);
                }, function (error) {
                    $scope.error = 'has failed... ' + error;
                });
        }
    };

    $scope.previewTvShow = function (tvShowId) {
        $location.path("tvShowDetail/" + tvShowId);
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