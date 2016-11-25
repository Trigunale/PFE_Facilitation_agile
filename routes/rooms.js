/**
 * Created by user on 23/11/16.
 */

module.exports = function (io) {
    'use strict';

    io.on('connection', function (socket) {

        // Join the specified room (workshop)
        socket.on('join_room', function(room){
            console.log('JOIN ROOM');
            socket.join(room);
            io.to(room).emit('new_user','New user logged in !');
        });

        // Leave the specified room (workshop)
        socket.on('leave_room', function(room){
            console.log('LEAVE ROOM');
            socket.leave(room);
            io.to(room).emit('lost_user','A user has been lost !');
        });

        // Dispatch in the specified room the order to LAUNCH the timer
        socket.on('launch_timer', function(room){
            console.log("LAUNCH TIMER");
            io.to(room).emit('start_timer');
        });

        // Dispatch in the specified room the order to PAUSE the timer
        socket.on('pause_timer', function(room){
            console.log("PAUSE TIMER");
            io.to(room).emit('pause_timer');
        });

        // Dispatch in the specified room the order to RESUME the timer
        socket.on('resume_timer', function(room){
            console.log("RESUME TIMER");
            io.to(room).emit('resume_timer');
        });

        // Dispatch in the specified room the order to STOP the timer
        socket.on('stop_timer', function(room){
            console.log("STOP TIMER");
            io.to(room).emit('stop_timer');
        });

        // Case when the socket is disconnected
        socket.on('disconnect', function () {
            console.log('socket disconnected');
        });

    });
};
