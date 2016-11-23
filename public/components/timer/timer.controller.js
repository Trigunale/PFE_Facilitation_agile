/**
 * Created by user on 22/11/16.
 */
'use strict';

var app = angular.module('facilitation.timer', ['socketio.service']);

app.controller('timerCtrl', function($scope, $interval, socket){

    $scope.joinRoom = function(){
        socket.emit('join_room', 'roomTest');
    };

    $scope.leaveRoom = function(){
        socket.emit('leave_room', 'roomTest');
    };

    socket.on('new_user', function(msg){
        console.log(msg);
    });

    socket.on('lost_user', function(msg){
        console.log(msg);
    });

    var timer;
    $scope.startTimer = function (timeAmount) {
        if(angular.isDefined(timer)) return;
        $scope.countDown = timeAmount;
        timer = $interval(function(){
            $scope.countDown--;
            if($scope.countDown == 0) $scope.stopTimer();
            $scope.$apply();
        }, 1000);
    };

    $scope.stopTimer = function() {
        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        }
    };

    $scope.humanizeDurationTimer = function(input, units) {
        // units is a string with possible values of y, M, w, d, h, m, s, ms
        if (input == 0) {
            return 0;
        } else {
            var duration = moment().startOf('day').add(input, units);
            var format = "";
            if (duration.hour() > 0) {
                format += "H[h] ";
            }
            if (duration.minute() > 0) {
                format += "m[m] ";
            }
            if (duration.second() > 0) {
                format += "s[s] ";
            }
            return duration.format(format);
        }
    };
});