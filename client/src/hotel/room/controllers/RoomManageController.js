angular.module('Hotel.Room')
    .controller('RoomManageCtrl',
    function (RoomModel, RoomService) {
        var roommanage = this;
        //总共的层数设置
        roommanage.floors = RoomService.getAllFloorTypes();
        //总共的房子类型
        roommanage.room_types = RoomService.getAllRoomTypes();
        //当前的房间板块显示的数据
        roommanage.AllRooms = RoomModel.AllRooms();
    });
