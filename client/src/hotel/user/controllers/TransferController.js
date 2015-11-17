
angular.module('Hotel.User')
  .controller('TransferCtrl',
    function($scope, $rootScope, $uibModal, $location, store) {
      //we can use store to keep login information
      var login = this;
        var modalInstance = $uibModal.open({
          templateUrl: "client/src/hotel/user/tmpl/transfer.html",
          backdrop: "static",
          keyboard: false,
          animation: true,
          controller: "TransferModalCtrl",
          controllerAs: "transferModal",
          resolve: {
            a: function() {
              return "aaaa";
            }
          }
        });
    });

angular.module('Hotel.User')
  .controller('TransferModalCtrl', function($scope, $rootScope, $location, $uibModalInstance, store, a) {
    $scope.a = a;
    $scope.close = function () {
      $uibModalInstance.close();
      $location.path("/roomboard");
    }
  });
