/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  23/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
'use strict';

angular.module('facilitation')
    .factory('Favorites', function () {
        return {
            addToFavorite: function (email, password, callback) {
                var cb = callback || angular.noop;
                User.delete({
                    email: email,
                    password: password
                }, function () {
                    return cb();
                }, function (err) {
                    return cb(err.data);
                });
            }
        }
    });