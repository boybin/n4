(function() {
  'use strict';
  var hotelModule = angular.module('Hotel', [
    'ngRoute',
    'Hotel.Common',
    'Hotel.User',
    'Hotel.Login',
    'Hotel.Room',
    'angular-storage',
    'angular.filter',
    'ui.select',
    'ngSanitize',
    'ui.bootstrap'
  ]);

  hotelModule.config(function($routeProvider) {
    $routeProvider
    //route for the home page
      .when('/roomboard', {
        templateUrl: 'client/src/hotel/room/tmpl/roomsboard.html',
        controller: 'RoomboardCtrl',
        controllerAs: 'roomboard',
        activeTab: 'roomboard'
      })
      .when('/login', {
        templateUrl: 'loginModalContainer',
        controller: 'LoginCtrl',
      //  controllerAs: 'login',
      })
      .when('/roommanage', {
        templateUrl: 'client/src/hotel/room/tmpl/roommanage.html',
        controller: 'LoginCtrl',
        controllerAs: 'roommanage',
        activeTab: 'roommanage'
      })
      .when('/exchangeroom', {
        templateUrl: 'client/src/hotel/room/tmpl/roommanage.html',
        controller: 'LoginCtrl',
        controllerAs: 'exchangeroom',
        activeTab: 'exchangeroom'
      })
      .otherwise({
        //redirectTo: '/roomboard'
        redirectTo: '/login'
      });
  });

  hotelModule.value('FLOORS', [{
    name: '所有楼层',
    value: ''
  }, {
    name: '一楼',
    value: '1'
  }, {
    name: '二楼',
    value: '2'
  }, {
    name: '三楼',
    value: '3'
  }]);

  hotelModule.value('ROOM_TYPES', [{
    name: '所有房间类',
    value: ''
  }, {
    name: '单人间',
    value: '1'
  }, {
    name: '双人间',
    value: '2'
  }, {
    name: '三人间',
    value: '3'
  }, {
    name: '四人间',
    value: '4'
  }]);

  hotelModule.value('ROOM_STATUS', [{
    name: '所有状态房间',
    value: ''
  }, {
    name: '可租用',
    value: '1'
  }, {
    name: '已入住',
    value: '2'
  }, {
    name: '待收拾',
    value: '3'
  }, {
    name: '待维修',
    value: '4'
  }]);
})();
