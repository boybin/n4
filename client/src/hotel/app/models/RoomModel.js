angular.module('Hotel.Common')
    .service('RoomModel',
        function ($http) {
            var service = this;
            service.AllRoomsStatus = function() {
              return {
                'rentable'  : '30',
                'rented'    : '50',
                'needclean' : '20',
                'needFix'   : '25'
              };
            }

            service.AllRooms = function(){
                return [
                  {roomId:'1',number:'101',type:'1',status:'1',title:'房间101',s_img:'client/res/images/Single-Bed-green.png',l_img:'client/res/images/Single-Bed-green.png'},
                  {roomId:'2',number:'201',type:'2',status:'2',title:'房间201',s_img:'client/res/images/Two-Beds-grey.png',l_img:'client/res/images/Two-Beds-grey.png'},
                  {roomId:'3',number:'301',type:'3',status:'3',title:'房间301',s_img:'client/res/images/Three-Beds-yellow.png',l_img:'client/res/images/Three-Beds-yellow.png'},
                  {roomId:'4',number:'302',type:'2',status:'4',title:'房间302',s_img:'client/res/images/Two-Beds-red.png',l_img:'client/res/images/Two-Beds-red.png'},
                  {roomId:'5',number:'303',type:'4',status:'2',title:'房间303',s_img:'client/res/images/Four-Beds-grey.png',l_img:'client/res/images/Four-Beds-grey.png'},
                  {roomId:'5',number:'304',type:'2',status:'3',title:'房间304',s_img:'client/res/images/Two-Beds-yellow.png',l_img:'client/res/images/Two-Beds-yellow.png'},        {roomId:'6',number:'204',type:'2',status:'3',title:'房间204',s_img:'client/res/images/Two-Beds-yellow.png',l_img:'client/res/images/Two-Beds-yellow.png'}
                ];
          };
        });
