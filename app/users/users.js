/**
 * Created by Sahir on 7/3/2015.
 */

angular.module('TrackorTreatApp').controller('UsersCtrl', function($scope, AppService) {

    $scope.users = [
        {name: "Samuel Jackson", weight: 135},
        {name: "Robert Copperworth-Antonio", weight: 235},
        {name: "Jackson Holmes", weight: 35}
    ];

});