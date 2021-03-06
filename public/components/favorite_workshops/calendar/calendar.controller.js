/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/02/17                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
angular.module('facilitation').controller('calendarCtrl', function ($route, $timeout, EventsService, $scope, $compile, uiCalendarConfig) {
    $scope.newEvent = {};
    $scope.workshopEvents = [];
    $scope.events = {
        color: 'red',
        events: []
    };


    var retrieveAllEvents = function () {
        $scope.workshopEvents = [];
        EventsService.getEvents()
            .success(function (events) {
                events.data.forEach(function (event) {
                    var end = new Date(event.begin_at);
                    end.setMinutes(end.getMinutes() + event.duration + end.getTimezoneOffset());
                    var color;
                    var url;
                    var title = event.title;
                    var type = "standard";
                    if (event.workshopId) {
                        color = "green";
                        url = "http://" + window.location.host + "/#/instances/" + event._id;
                        title = "[" + event.group + "]\n" + title;
                        type = "workshop";
                    }
                    var u = new Date(event.begin_at);
                    u.setMinutes(u.getMinutes() + u.getTimezoneOffset());
                    $scope.workshopEvents.push({
                        _id: event._id,
                        title: title,
                        start: u,
                        end: end,
                        color: color,
                        duration: event.duration,
                        url: url,
                        type: type
                    });
                });
            });
    };

    retrieveAllEvents();

    $scope.alertOnDrop = function (event) {
        var elem = {begin_at: event.start._d};
        if (event.type === "workshop") {

            EventsService.updateWorkshopInstance(event._id, elem);
        } else {
            EventsService.updateEvent(event._id, elem);
        }
    };
    /* alert on Resize */
    $scope.alertOnResize = function (event, delta, revertFunc) {
        var newDuration = event.duration + delta / 60000;
        var elem = {duration: newDuration};
        event.duration = newDuration;
        if (event.type === "workshop") {
            revertFunc();
        } else {
            EventsService.updateEvent(event._id, elem);
        }
    };

    $scope.addEvent = function (event) {
        $scope.events.events.push(event);
    };

    $scope.remove = function (index) {
        $scope.events.splice(index, 1);
    };

    $scope.changeView = function (view, calendar) {
        retrieveAllEvents();
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        retrieveAllEvents();
    };

    $scope.renderCalender = function (calendar) {
        retrieveAllEvents();
        if (uiCalendarConfig.calendars[calendar]) {
            uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
        retrieveAllEvents();
    };


    /** When you click on an empty space **/
    $scope.addNewEvent = function (date) {
        $scope.newEvent = {};
        var tmp = date._d;
        tmp.setMinutes(tmp.getMinutes() + tmp.getTimezoneOffset());
        $scope.newEvent.hours_begin_at = "" + (tmp.getHours()) + ":" + tmp.getMinutes();
        $scope.newEvent.begin_at = tmp;
        $('#newEventModal').modal('show');
    };

    $scope.validateEvent = function () {
        var begin = $scope.newEvent.hours_begin_at.split(":");
        $scope.newEvent.begin_at.setHours(begin[0]);
        $scope.newEvent.begin_at.setMinutes(begin[1]);
        var end = $scope.newEvent.hours_end_at.split(":");
        var duration = (parseInt(end[0], 10) * 60 + parseInt(end[1], 10)) - (parseInt(begin[0], 10) * 60 + parseInt(begin[1], 10));
        var event = {
            title: $scope.newEvent.title,
            description: $scope.newEvent.description,
            duration: duration,
            begin_at: $scope.newEvent.begin_at
        };
        var end_at_date = new Date(event.begin_at);
        end_at_date.setMinutes(end_at_date.getMinutes() + event.duration);
        EventsService.addEvent(event);
        $scope.addEvent({title: event.title, start: event.begin_at, end: end_at_date});
        $('#newEventModal').modal('hide');
        $scope.newEvent = {};
        retrieveAllEvents();
        $scope.$emit('notify', {
            type: 'success',
            title: 'Évenement \"' + event.title + '\" rajouté avec succès'
        });
    };
    /* config object */
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            header: {
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            dayClick: $scope.addNewEvent
        }
    };
    $scope.eventSources = [$scope.events, $scope.workshopEvents];
});
