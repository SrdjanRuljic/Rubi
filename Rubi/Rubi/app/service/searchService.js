app.service("searchService", ["appSettings", "$http", "$q", function (appSettings, $http, $q) {

    this.searchMovie = function (text) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "search/movie?api_key=" + appSettings.apiKey + "&language=" + appSettings.language + "&query=" + text)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    }

    this.searchTv = function (text) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "search/tv?api_key=" + appSettings.apiKey + "&language=" + appSettings.language + "&query=" + text)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    }
}]);