/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  22/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
'use strict';

var app = angular.module('facilitation');

app.controller('workshopCtrl', function ($scope, CatalogueDataProvider, FavoriteWorkshops, $routeParams, $http) {

    // Local vars
    var currentId = $routeParams.catalogueId;

    // Scope vars
    $scope.workshop = "";

    // Scope methods
    $scope.getLabelColor = getLabelColorFct;
    $scope.addToFavorite = addToFavoriteFct;

    CatalogueDataProvider.getWorkshop(currentId, function (dataResponse) {


            for(var i=0; i < dataResponse.data[0].content.steps.length; i++) {
                if(dataResponse.data[0].content.steps[i].duration)
                    dataResponse.data[0].content.steps[i].duration = dataResponse.data[0].content.steps[i].duration + " minutes";

                if(dataResponse.data[0].content.steps[i].timing) {
                    var d = new Date(dataResponse.data[0].content.steps[i].timing * 60000); //en miniseconde
                    var time = d.toUTCString().split(" ")
                    time = time[4].split(":")

                    dataResponse.data[0].content.steps[i].timing =  time[0]+":"+time[1];
                }
            }


        $scope.workshop = dataResponse.data[0];
    });

    function getLabelColorFct (label) {
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

    function addToFavoriteFct() {
        var res = FavoriteWorkshops.addToFavoriteWorkshops($scope.currentUser.username, currentId);
        res.success(function(data, status, headers, config) {
                $scope.message = data;
                console.log(data);
                alert("Success");
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }

});

/* To interpret HTML balise in JSON */
app.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

/*
app.controller('detailCtrl', function ($scope,$http) {

    $scope.count = 0;
    $scope.voter = function () {
        $scope.count++;
        if($scope.count > 5){
            $scope.count = 5 ;
        }
    }
});

app.controller('CommenterCtrl', function ($scope,$http) {
    $scope.showMe = false;
    $scope.commenter =function(){
        $scope.showMe = !$scope.showMe;
    }
});
*/


