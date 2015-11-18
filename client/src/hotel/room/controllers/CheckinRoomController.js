angular.module('Hotel.Room')
    .controller('CheckinCtrl',
    function (RoomModel, RoomService) {
        var checkin = this;
        //总共的层数设置
        checkin.floors = RoomService.getAllFloorTypes();
        //总共的房子类型
        checkin.room_types = RoomService.getAllRoomTypes();
        //当前的房间板块显示的数据
        checkin.AllRooms = RoomModel.AllRooms();

    });
