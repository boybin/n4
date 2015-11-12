angular.module('Hotel.Room')
    .controller('RoomboardCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES, ROOM_STATUS) {
        var roomboard = this;
        roomboard.floors = FLOORS;
        roomboard.room_types = ROOM_TYPES;
        roomboard.room_status = ROOM_STATUS;

        
    });
