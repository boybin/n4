angular.module('Hotel.Room')
    .controller('ExchangeCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES) {
        var exchangeroom = this;
        //总共的层数设置
        exchangeroom.floors = FLOORS;
        //总共的房子类型
        exchangeroom.room_types = ROOM_TYPES;
        //当前的房间板块显示的数据
        exchangeroom.AllRooms = RoomModel.AllRooms();

    });
