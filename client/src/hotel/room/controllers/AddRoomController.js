angular.module('Hotel.Room')
    .controller('AddRoomCtrl',
      function (RoomModel, FLOORS, ROOM_TYPES, ROOM_PRICES) {
        var addroom = this;
        addroom.floors = FLOORS;
        addroom.room_types = ROOM_TYPES;
        addroom.room_prices = ROOM_PRICES;

    });
