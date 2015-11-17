angular.module('Hotel.Room')
    .controller('RoomManageCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES) {
        var roommanage = this;
        //总共的层数设置
        roommanage.floors = FLOORS;
        //总共的房子类型
        roommanage.room_types = ROOM_TYPES;
        //当前的房间板块显示的数据
        roommanage.AllRooms = RoomModel.AllRooms();
    });
