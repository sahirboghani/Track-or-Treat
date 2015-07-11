/**
 * Created by Sahir on 7/3/2015.
 */

var app = angular.module('TrackorTreatApp', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            // comment
            when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            }).
            when('/users', {
                templateUrl: 'users/users.html',
                controller: 'UsersCtrl'
            }).
            otherwise({
               redirectTo: 'home'
            });
}]);
