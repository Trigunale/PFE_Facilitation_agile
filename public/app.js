'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('facilitation', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'http-auth-interceptor',
    'angularNotify',
    'socketio.service',
    'facilitation.qrcode',
    'moment-picker',
    'ui.calendar',
    'simditor',
    'angular-svg-round-progress'
]);

app.config(function($routeProvider) {
  $routeProvider
      .when("/", {
          templateUrl: "components/home/home.html"
      })
      .when("/importer", {
          templateUrl: "components/importer/importer.html",
          controller:"importationCtrl"
      })
      .when("/catalogue", {
          templateUrl: "components/catalogue/catalogue.html",
          controller: "catalogueCtrl"
      })
      .when("/feedback/:instanceId", {
          templateUrl: "components/feedback/feedback.html"
      })
      .when("/thankYou", {
          templateUrl: "components/feedback/thankYou.html",
          controller: "thankYouCtrl"
      })
      .when("/catalogue/:catalogueId", {
          templateUrl: "components/workshop/workshop.html",
          controller: "workshopCtrl"
      })
      .when("/favoriteWorkshops", {
          templateUrl: "components/favorite_workshops/favorite/favorite.html",
          controller: "favoriteCtrl"
      })
      .when("/instances", {
          templateUrl: "components/favorite_workshops/instances/instances.html",
          controller: "menuCtrl"
      })
      .when("/instances/:idInstance", {
          templateUrl: "components/workshop_instance/workshop-instance.html",
          controller: "instanceCtrl"
      })
      .when("/instances/:idInstance/qrcode", {
          templateUrl: "components/qrcode/qrcode.html",
          controller: "qrcodeCtrl"
      })
      .when("/profile", {
          templateUrl: "components/profil/profil.html",
          controller: "profilCtrl"
      })
      .when("/sauvage", {
          template: '<img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100"><img src="img/sauvage.jpg" alt="PFEEEEEE" height="100" width="100">'
      })
      .when("/calendar", {
          templateUrl: "components/favorite_workshops/calendar/calendar.html",
          controller: "calendarCtrl"
      })
      .when("/instances/:idInstance/detail", {
          templateUrl: "components/workshop_instance/workshop-instance-detail.html",
          controller: "instanceCtrl"
      });
});

app.run(function ($rootScope, $location, Auth) {
    $rootScope.$watch('currentUser', function(currentUser) {
        if (!currentUser && (['/'].indexOf($location.path()) == -1 )) {
            Auth.currentUser();
        }
    });
});