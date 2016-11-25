/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var app = angular.module('facilitation');
app.service('FavoriteWorkshops', function ($http) {

    delete $http.defaults.headers.common['X-Requested-With'];
    this.addToFavoriteWorkshops = function(username, workshopId) {
        var req = {
            method: 'POST',
            url: '/users/favorites',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { username: username, workshop: workshopId }
        };
        return $http(req);
    };


    delete $http.defaults.headers.common['X-Requested-With'];
    this.getFavoriteWorkshops = function(callbackFunc) {
        var req = {
            method: 'GET',
            url: '/users/favorites',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return $http(req);

    };
});

