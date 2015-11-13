var hotelModule = angular.module('Hotel',
    [
        'ngRoute',
        'Hotel.Common',
        'Hotel.User',
        'Hotel.Login',
        'Hotel.Room',
        'angular-storage',
        'angular.filter',
        'ui.select',
        'ngSanitize'
    ]);

  hotelModule.config(function($routeProvider){
    $routeProvider
    //route for the home page
    .when('/roomboard',{
      templateUrl : 'client/src/hotel/room/tmpl/roomsboard.html',
      controller  : 'RoomboardCtrl',
      controllerAs: 'roomboard',
      activeTab   : 'roomboard'
    })
    .when('/login',{
      templateUrl : 'client/src/hotel/login/tmpl/login.html',
      controller  : 'LoginCtrl',
      controllerAs: 'login',
      activeTab   : 'login'
    })
    .when('/roommanage',{
      templateUrl : 'client/src/hotel/room/tmpl/roommanage.html',
      controller  : 'LoginCtrl',
      controllerAs: 'roommanage',
      activeTab   : 'roommanage'
    })
    .when('/exchangeroom',{
      templateUrl : 'client/src/hotel/room/tmpl/roommanage.html',
      controller  : 'LoginCtrl',
      controllerAs: 'exchangeroom',
      activeTab   : 'exchangeroom'
    })
    .otherwise({redirectTo:'/roomboard'});
  });



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
