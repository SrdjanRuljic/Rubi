app.service("movieService", ["appSettings", "$http", "$q", function (appSettings, $http, $q) {

    this.topReated = function (page) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "movie/top_rated?api_key=" + appSettings.apiKey + "&language=" + appSettings.language + "&page=" + page)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.getById = function (movieId) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "movie/" + movieId + "?api_key=" + appSettings.apiKey + "&language=" + appSettings.language)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    };
}]);