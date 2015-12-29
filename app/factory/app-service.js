/**
 * Created by Sahir on 7/3/2015.
 */

app.factory('AppService', function AppService() {
    var users = [
        {name: "Badruddin Baleem", gender: "M", age: 20, height: 71,  currWeight: 175, goalWeight: 170, startWeight: 185,
                entries: [{date: new Date(2015, 12, 20), cal: 1750, weight: 177},
                          {date: new Date(2015, 12, 21), cal: 1650, weight: 175},
                          {date: new Date(2015, 12, 22), cal: 1800, weight: 175}]},
        {name: "Bahir Soghani", gender: "M", age: 20, height: 67,  currWeight: 150, goalWeight: 145, startWeight: 152,
            entries: [{date: new Date(2015, 11, 15), cal: 1750, weight: 154},
                {date: new Date(2015, 11, 17), cal: 1650, weight: 152},
                {date: new Date(2015, 11, 18), cal: 1800, weight: 150}]}
    ];

    var getUsers = function() {
        return users;
    };

    return {
        getUsers: getUsers
    }
});