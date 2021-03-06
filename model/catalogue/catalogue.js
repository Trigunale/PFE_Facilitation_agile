/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var mongoose = require('mongoose');
var Workshop = mongoose.model('Workshop');
var ObjectID = require('mongodb').ObjectID;
var WorkshopInstance = mongoose.model("WorkshopInstance");
var Promise = require('promise');
var async = require('async');

function saveWorkshopFct (workshop) {
    var test = workshop;
    return new Promise(function (resolve, reject) {
        var newWorkshop = new Workshop(test);
        newWorkshop.save(function(err, data) {
            if (err) {
                console.error(err);
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}

function getWorkshopsFct () {
    return new Promise(function (resolve) {
        Workshop.find({}, function(req, res) {
            async.forEach(Object.keys(res),function (item, cb) {
                res[item].computeGrades(function(gradeRes) {
                    res[item].grade = gradeRes;
                    cb();
                })
            }, function() {
                resolve(res);
            });
        });
    })
}

function getWorkshopFct (id) {
    return new Promise(function (resolve) {
        var object = new ObjectID(id);
        Workshop.findOne({_id: object}, function(req, res) {
            res.computeGrades(function(gradeRes) {
                res.grade = gradeRes;
                resolve(res);
            });
        });
    })
}

/**
 * Supprime le Workshop correspondant à l'id en paramètre de la database
 * @param id
 */
function deleteWorkshopFct (id) {
    return new Promise(function (resolve, reject) {
        var object = new ObjectID(id);
        Workshop.findOne(object, function (req, res) {
            res.remove(function(err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res);
                }
            });
        });
    })
}

module.exports = {
    saveWorkshop: saveWorkshopFct,
    getWorkshops: getWorkshopsFct,
    getWorkshop: getWorkshopFct,
    deleteWorkshop: deleteWorkshopFct
};