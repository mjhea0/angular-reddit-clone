app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'posts.html'
    })
    .when('/add', {
      controller: 'myFormCtrl',
      templateUrl: 'form.html'
    });
}]);