var hotelModule = angular.module('Hotel',
    [
        'ngRoute',
        'Hotel.Common',
        'Hotel.User',
        'Hotel.Login',
        'Hotel.Room',
        'angular-storage'
    ]);

  hotelModule.value('FLOORS',[
    {name:'一楼', value:'1'},
    {name:'二楼', value:'2'},
    {name:'三楼', value:'3'}
  ]);

  hotelModule.value('ROOM_TYPES',[
    {name:'标准间', value:'1'},
    {name:'单人间', value:'2'}
  ]);

  hotelModule.value('ROOM_STATUS',[
    {name:'可租用', value:'1'},
    {name:'已入住', value:'2'},
    {name:'待收拾', value:'3'},
    {name:'待维修', value:'4'}
  ]);
