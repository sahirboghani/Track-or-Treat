/**
 * Created by Sahir on 7/3/2015.
 */

app.factory('AppService', function AppService() {
    var users = [
        {name: "Samuel Jackson", beginningWeight: 135, currentWeight: 140},
        {name: "Robert Copperworth-Antonio", beginningWeight: 235, currentWeight: 236},
        {name: "Jackson Holmes", beginningWeight: 35, currentWeight: 40}
    ];

    var getUsers = function() {
        return users;
    };

    return {
        getUsers: getUsers
    }
});