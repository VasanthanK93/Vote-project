var pollsApp = angular.module('votingapp', ['ngRoute','angularCharts']);

function pollsAppRouteConfig($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'ClassController',
            templateUrl: 'views/classselection.html'
        }).
        when('/view/:id', {
            controller: 'votingcontroller',
            templateUrl: 'views/voting.html'
        }).
        when('/view/:id/stats', {
            controller: 'resultController',
            templateUrl: 'views/result.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}
pollsApp.config(pollsAppRouteConfig);