angular.module('Hotel.Room')
    .controller('AddRoomCtrl',
      function (RoomModel, FLOORS, ROOM_TYPES) {
        var addroom = this;
        addroom.floors = FLOORS;
        addroom.room_types = ROOM_TYPES;

    });
