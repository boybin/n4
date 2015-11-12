angular.module('Hotel.Common')
    .controller('MainCtrl',
      function ($scope, RoomModel) {
        var main = this;
        main.currentUser = '郭建民';
        main.AllRoomsStatus = RoomModel.AllRoomsStatus();
/*        RoomModel.AllRoomsStatus()
                .then(function (allRoomStatus) {
                  main.allRoomStatus = allRoomStatus;
                });
                */
    });
