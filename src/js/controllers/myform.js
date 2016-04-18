(function () {

  angular.module('redditClone')
    .controller('myFormCtrl', [
      '$scope', '$location', 'postFactory', myFormCtrl
    ]);

  function myFormCtrl($scope, $location, postFactory) {

    $scope.article = {};

    $scope.postArticle = function() {
      if ($scope.postForm.$valid) {
        postFactory.addPost($scope.article);
        $location.path('/');
      }
    };

  }

})();