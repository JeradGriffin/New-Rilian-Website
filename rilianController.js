angular.module('ngRilian')
  .controller('rilianController', function($scope, rilianFactory){
    $scope.header = 'RILIAN';
    $scope.escaping = rilianFactory.getEsc();
    $scope.fail = rilianFactory.getFail();
    $scope.losingMyself = rilianFactory.getLM();
  });
