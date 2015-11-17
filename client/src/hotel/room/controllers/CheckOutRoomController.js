angular.module('Hotel.Room')
    .controller('CheckoutCtrl',
    function (RoomModel, FLOORS, ROOM_TYPES) {
        var checkout = this;
        //总共的层数设置
        checkout.floors = FLOORS;
        //总共的房子类型
        checkout.room_types = ROOM_TYPES;
        //当前的房间板块显示的数据
        checkout.AllRooms = RoomModel.AllRooms();

    });
