angular.module('Hotel.Room')
    .controller('ExchangeCtrl',
    function (RoomModel, RoomService) {
        var exchangeroom = this;
        //总共的层数设置
        exchangeroom.floors = RoomService.getAllFloorTypes();
        //总共的房子类型
        exchangeroom.room_types = RoomService.getAllRoomTypes();
        //当前的房间板块显示的数据
        exchangeroom.AllRooms = RoomModel.AllRooms();

    });
