angular.module('Hotel.Room')
    .controller('AddRoomCtrl',
      function (RoomService) {
        var addroom = this;
        addroom.floors = RoomService.getAllFloorTypes();
        addroom.room_types = RoomService.getAllRoomTypes();
        addroom.room_prices = RoomService.getAllRoomPrices();
    });
