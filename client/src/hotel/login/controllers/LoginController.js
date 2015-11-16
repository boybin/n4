angular.module('Hotel.Login')
    .controller('LoginCtrl',
        function ($scope, $uibModal) {
          var login = this;
          // login.a = "aaa";
          $scope.a = "aaa";

          $uibModal.open({templateUrl:"client/src/hotel/login/tmpl/login.html",
                            backdrop : "static",
                            keyboard : true,
                            animation: true,
                            resolve: {
                              a: function () {
                                return $scope.a;
                              }
                            }
                          });
            var login = this;
      });
