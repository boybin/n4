angular.module('Hotel.Login')
  .controller('LoginCtrl',
    function($scope, $rootScope, $uibModal, $location, store) {
      //we can use store to keep login information
      var login = this;
      if (!($rootScope.globals && $rootScope.globals.currentUser)) {
        var modalInstance = $uibModal.open({
          templateUrl: "client/src/hotel/login/tmpl/login.html",
          backdrop: "static",
          keyboard: true,
          animation: true,
          controller: "LoginModalCtrl",
          controllerAs: "loginModal",
          resolve: {
            a: function() {
              return "aaaa";
            }
          }
        });
      } else {
        $location.path("/roomboard");
      }

      // modalInstance.result.then(function)
      /*      $scope.login = function() {
              console.log("test");
              console.log(this.username);
            }*/
    });

angular.module('Hotel.Login')
  .controller('LoginModalCtrl', function($scope, $rootScope, $location, $uibModalInstance, store, a) {
    $scope.a = a;
    $scope.login = function() {
      if ($scope.username == "aaa" && $scope.password == "aaa") {
        $rootScope.globals = {
          currentUser: {
            username: $scope.username,
          }
        };
        store.set('globals', $rootScope.globals);

        $uibModalInstance.close();
        $location.path('/roomboard');
      } else {
        $scope.error = "用户名密码错误";
      }
    }
  });
