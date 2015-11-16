angular.module('Hotel.Common')
    .controller('MainCtrl',
      function ($scope, $rootScope, $route, RoomModel) {
        var main = this;
        main.AllRoomsStatus = RoomModel.AllRoomsStatus();

/*        RoomModel.AllRoomsStatus()
                .then(function (allRoomStatus) {
                  main.allRoomStatus = allRoomStatus;
                });
                */
    });
