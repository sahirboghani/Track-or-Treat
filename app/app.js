/**
 * Created by Sahir on 7/3/2015.
 */

var app = angular.module('TrackorTreatApp', ["ngRoute", "ui.bootstrap", "firebase"]);

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
            when('/chat', {
                templateUrl: 'chat/chat.html',
                controller: 'ChatCtrl'
            }).
            otherwise({
               redirectTo: 'home'
            });
}]);

app.controller('ChatCtrl', function($scope, $location, $firebaseArray) {

    // Firebase reference
    var url = new Firebase("https://trackortreat.firebaseio.com/");

    $scope.messages = $firebaseArray(url);

    $scope.addMessage = function(event) {
        if(event.keyCode === 13 && $scope.msg) {
            var name = $scope.name || "Anonymous";

            $scope.messages.$add({from: name, body: $scope.msg});

            $scope.msg = "  ";
        }
    };

    $scope.clear = function() {
        var i = $scope.messages.length;
        while(i-- > 0) {
            $scope.messages.$remove($scope.messages[i]);
        }
    };
});

app.controller('HomeCtrl', function($scope, $firebaseArray) {
});

app.controller('NavCtrl', function($scope, $location, $firebaseArray) {
    $scope.isActive = function(viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
    };
});


/*app.controller('HomeCtrl', ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        // Firebase reference
        var url = new Firebase("https://trackortreat.firebaseio.com/");

        $scope.messages = $firebaseArray(url);

        $scope.addMessage = function(event) {
            if(event.keyCode === 13 && $scope.msg) {
                var name = $scope.name || "Anonymous";

                $scope.messages.$add({from: name, body: $scope.msg});

                $scope.msg = "";
            }
        };
    }

]);
/*

app.controller('HomeCtrl', function($scope) {

}); */
app.controller('UsersCtrl', function($scope, AppService) {

    $scope.users = AppService.getUsers();

});


