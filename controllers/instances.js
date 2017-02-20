
'use strict';

/**
 * Controller of an instance of a workshop (see global documentation on github for more information)
 * @author Alexandre Cazala <alexandre.cazala@gmail.com>
 * @module controller/instance
 */
var async = require('async');
var mongoose = require('mongoose');

var passport = require('passport');
var fs = require('fs');
var ObjectId = mongoose.Types.ObjectId;
var WorkshopInstance = require('../model/instances/workshop-instance');

var photo = require('../model/files/photo');
function UploadPhotosImpl(req, res) {
    var files;
    async.each(req.files, function(file, callback) {
        files.push({ filename: file.filename});
        callback();
    }, function(err) {
        req.files = files;
        return res.json({
            state: "success",
            data: req.files
        })
    });
    // for (var i = 0; i < req.files.length; ++i) {
    //     req.files[i] = { filename: req.files[i].filename};
    // }
    /*
     return res.json({
     state: "success",
     data: req.files
     })
     */

}

function addFeedbackToInstanceImpl (req, res) {
    var workshopInstanceId = req.params.instanceId;
    var feedback = req.body.feedback;
    var photos = feedback.photos.slice(0);
    // Clean feedback object
    delete feedback.photos;
    WorkshopInstance.addFeedback(workshopInstanceId, feedback, req.user, photos)
        .then(function (result) {
        return res.json({
            state: "success",
            data: result
        });
        })
}

exports.UploadPhotos = UploadPhotosImpl;
exports.addFeedbackToInstance = addFeedbackToInstanceImpl;
