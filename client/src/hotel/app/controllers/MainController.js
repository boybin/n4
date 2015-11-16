angular.module('Hotel.Common')
    .controller('MainCtrl',
      function ($scope, $route, RoomModel) {
        //expose route to scope for navigation
        $scope.$route = $route;

        var main = this;
        main.currentUser = '郭建民';
        main.AllRoomsStatus = RoomModel.AllRoomsStatus();

/*        RoomModel.AllRoomsStatus()
                .then(function (allRoomStatus) {
                  main.allRoomStatus = allRoomStatus;
                });
                */
    });
