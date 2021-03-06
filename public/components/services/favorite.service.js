/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var app = angular.module('facilitation');
app.service('FavoriteWorkshops', function ($http) {

    delete $http.defaults.headers.common['X-Requested-With'];
    this.addToFavoriteWorkshops = function (username, workshopId) {
        var req = {
            method: 'POST',
            url: '/users/favorites',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {workshop: workshopId}
        };
        return $http(req);
    };


    delete $http.defaults.headers.common['X-Requested-With'];
    this.getFavoriteWorkshops = function () {
        var req = {
            method: 'GET',
            url: '/users/favorites',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return $http(req);

    };

    delete $http.defaults.headers.common['X-Requested-With'];
    this.getInstancesWorkshop = function () {
        var req = {
            method: 'GET',
            url: '/users/instances',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return $http(req);

    };

    delete $http.defaults.headers.common['X-Requested-With'];
    this.addWorkshopInstance = function (username, workshop, group, date, heure) {
        var req = {
            method: 'POST',
            url: '/users/instances',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {workshopId: workshop, user_group: group, user_date: date, user_heure: heure}
        };
        return $http(req);

    };


    this.addFeedbackToInstance = function (feedback, instanceId) {
        var req = {
            method: 'POST',
            url: '/api/v1/feedback/' + instanceId,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {feedback: feedback}
        };
        return $http(req);
    }
});

