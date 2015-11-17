angular.module('Hotel.Room')
    .controller('CheckinCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES) {
        var checkin = this;
        //总共的层数设置
        checkin.floors = FLOORS;
        //总共的房子类型
        checkin.room_types = ROOM_TYPES;
        //当前的房间板块显示的数据
        checkin.AllRooms = RoomModel.AllRooms();

    });
