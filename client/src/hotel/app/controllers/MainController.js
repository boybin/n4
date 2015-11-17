angular.module('Hotel.Common')
    .controller('MainCtrl',
      function ($scope, $rootScope, $route, store, RoomModel) {
        //Tab hightlight
        $scope.$route = $route;
        var main = this;
        main.AllRoomsStatus = RoomModel.AllRoomsStatus();

/*        RoomModel.AllRoomsStatus()
                .then(function (allRoomStatus) {
                  main.allRoomStatus = allRoomStatus;
                });
                */

        main.logout = function(){
            $rootScope.globals = null;
            store.set("globals", null);
        };

    });
