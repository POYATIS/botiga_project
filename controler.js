app.controller('controller_product', function($scope, $http) {
    $http.get('/api/producto').then(function(response) {
      $scope.productos = response.data;
      console.log($scope.productos);
    });
  });
  