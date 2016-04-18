(function () {

  angular.module('redditClone')
    .controller('myFavCtrl', [
      '$scope', 'postFactory', myFavCtrl
    ]);

  function myFavCtrl($scope, postFactory) {

    $scope.posts = postFactory.getAllPosts();

    $scope.unFavoritePost = function(id) {
      var post = postFactory.getPost(id)[0];
      postFactory.toggleFavorite(post);
    };

  }

})();