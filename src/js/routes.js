(function () {

  angular.module('redditClone')
    .config(['$routeProvider', routeProvider]);


  function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'posts.html'
      })
      .when('/add', {
        controller: 'myFormCtrl',
        templateUrl: 'form.html'
      })
      .when('/favs', {
        controller: 'myFavCtrl',
        templateUrl: 'fav.html'
      });
  }

})();