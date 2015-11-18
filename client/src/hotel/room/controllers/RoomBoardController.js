angular.module('Hotel.Room')
  .controller('RoomboardCtrl',
    function($uibModal, RoomModel, RoomService) {
      var roomboard = this;

      //总共的层数设置
      roomboard.floors = RoomService.getAllFloorTypes();
      //总共的房子类型
      roomboard.room_types = RoomService.getAllRoomTypes();
      //总共的房子状态
      roomboard.room_status = RoomService.getAllRoomStatus();

      //当前的房间板块显示的数据
      roomboard.AllRooms = RoomModel.AllRooms();

      //房间列表过滤器
      roomboard.roomFilter = function(room) {
        // return (room.number == 101)
        return true;
      };

      roomboard.handleRoom = function(room) {
        var tmplLocation = "client/src/hotel/room/tmpl/modal_status_" + room.status + ".html";
        var roomModal = $uibModal.open({
          templateUrl: tmplLocation,
          backdrop: "static",
          keyboard: false,
          animation: true,
          controller: "RoomModalCtrl",
          controllerAs: "roomModal",
          resolve: {
            roomdata: function() {
              return room;
            }
          }
        });
      }

    });

angular.module('Hotel.Room')
  .controller('RoomModalCtrl', function($scope, $rootScope, $location, $uibModalInstance, store, roomdata) {
    $scope.roomdata = roomdata;
    $scope.close = function() {
      $uibModalInstance.close();
    }
  });
