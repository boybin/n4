angular.module('Hotel.Login')
  .controller('LoginCtrl',
    function($scope, $uibModal, store) {

      //we can use store to keep login information
      // store.set("aa","abc");
      // console.log(store.get("aa"));

      var login = this;
      // login.a = "aaa";
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
      // modalInstance.result.then(function)
/*      $scope.login = function() {
        console.log("test");
        console.log(this.username);
      }*/
    });

angular.module('Hotel.Login')
  .controller('LoginModalCtrl', function($scope, $uibModalInstance, a) {
    $scope.a = a;
    // console.log(loginModal.a);
    // console.log("tttry");
    $scope.login = function() {
      console.log("submit");
      console.log($scope.username);
      console.log($scope.password);
    }
  });
