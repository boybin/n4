angular.module('Hotel.Room')
    .controller('RoomboardCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES, ROOM_STATUS) {
        var roomboard = this;

        //总共的层数设置
        roomboard.floors = FLOORS;
        //总共的房子类型
        roomboard.room_types = ROOM_TYPES;
        //总共的房子状态
        roomboard.room_status = ROOM_STATUS;

        //当前的房间板块显示的数据
        roomboard.AllRooms = RoomModel.AllRooms();

    });
