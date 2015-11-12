angular.module('Hotel.Common')
    .service('RoomModel',
        function ($http) {
            var service = this;
            service.AllRoomsStatus = function() {
              return {
                'rentable'  : '30',
                'rented'    : '50',
                'needclean' : '20',
                'needFix'   : '25'
              };
            }
        });
