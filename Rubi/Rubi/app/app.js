var app = angular.module("app", ["ngRoute", "ngAnimate", "ngResource", "ui.bootstrap"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            controller: "basePageCtrl",
            templateUrl: "app/views/basePage.html"
        })
        .when("/movies", {
            templateUrl: "app/views/movies.html",
            controller: "moviesCtrl"
        })
        .when("/movieDetail/:movieId", {
            templateUrl: "app/views/movieDetail.html",
            controller: "movieDetailCtrl"
        })
        .when("/tvshows", {
            templateUrl: "app/views/tvShows.html",
            controller: "tvShowsCtrl"
        })
        .when("/tvShowDetail/:tvShowId", {
            templateUrl: "app/views/tvShowDetail.html",
            controller: "tvShowDetailCtrl"
        })
        .otherwise('/');

    $locationProvider.html5Mode(false).hashPrefix('!');

}]);

app.constant("appSettings", {
    apiService: 'https://api.themoviedb.org/3/',
    apiKey: "675fb59c587f4177eb56a9f6afb471df",
    language: "en-US"
});