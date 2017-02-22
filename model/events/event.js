/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/02/17                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var mongoose = require('mongoose');
var Event = mongoose.model('Event');

function createEvent(event, callback) {
    var tmp = new Event(event);
    tmp.save(function(err, data) {
        console.log(event);
        if (err) {
            console.log("ERROR");
            console.log(err);
            callback(err)
        } else {
            callback(null,data)
        }
    })
}

module.exports = {
    createEvent: createEvent
};