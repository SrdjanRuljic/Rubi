app.service("tvShowService", ["appSettings", "$http", "$q", function (appSettings, $http, $q) {

    this.topReated = function (page) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "tv/top_rated?api_key=" + appSettings.apiKey + "&language=" + appSettings.language + "&page=" + page)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.getById = function (tvShowId) {
        var deferred = $q.defer();

        $http.get(appSettings.apiService + "tv/" + tvShowId + "?api_key=" + appSettings.apiKey + "&language=" + appSettings.language)
            .then(function (response) {
                deferred.resolve(response);
            },
            function (err, status) {
                deferred.reject(err);
            });

        return deferred.promise;
    };
}]);