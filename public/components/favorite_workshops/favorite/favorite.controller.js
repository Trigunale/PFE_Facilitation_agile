/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  08/11/16                     *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
'use strict';

var app = angular.module('facilitation');

app.controller('favoriteCtrl', function ($scope, FavoriteWorkshops) {

    $scope.favoriteWorkshops = [];

    // Scope methods
    /**
     * Return the label color
     * @type {getLabelColor}
     */
    $scope.getLabelColor = getLabelColor;

    getFavoriteWorkshops();
    /**
     * Put in $scope.favoriteWorkshops the favorites workshops to display
     */
    function getFavoriteWorkshops() {
        FavoriteWorkshops.getFavoriteWorkshops()
            .success(function(data) {
            $scope.favoriteWorkshops = data;
            })
            .error(function(data) {
            console.error(JSON.stringify({data: data}));
        });
    }

    function getLabelColor(label) {
        if(label == "Travail itératif") {
            return "label-success";
        } else if(label == "Amélioration continue") {
            return "label-primary";
        } else if(label == "Prévisions") {
            return "label-info";
        } else if(label == "Rétrospective") {
            return "label-warning";
        } else if(label == "TaF - WiP") {
            return "label-purple"
        } else if(label == "Lead time vs Throughput") {
            return "label-yellow"
        } else {
            return "label-default";
        }

    }
});



