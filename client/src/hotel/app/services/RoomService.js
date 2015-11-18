angular.module('Hotel.Common')
  .service('RoomService',
    function(FLOORS, ROOM_TYPES, ROOM_PRICES, ROOM_STATUS) {
      var service = this;

      service.getAllFloorTypes = function() {
        return FLOORS;
      };

      service.getAllRoomTypes = function() {
        return ROOM_TYPES;
      };

      service.getAllRoomPrices = function() {
        return ROOM_PRICES;
      }

      service.getAllRoomStatus = function() {
        return ROOM_PRICES;
      }
    }
  );
