angular.module('Hotel.Room')
    .controller('CheckoutCtrl',
    function (RoomModel, RoomService) {
        var checkout = this;
        //总共的层数设置
        checkout.floors = RoomService.getAllFloorTypes();
        //总共的房子类型
        checkout.room_types = RoomService.getAllRoomTypes();
        //当前的房间板块显示的数据
        checkout.AllRooms = RoomModel.AllRooms();

    });
