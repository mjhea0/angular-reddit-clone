app.controller('allPostsCtrl', ['$scope', 'postFactory',
  function($scope, postFactory) {

  $scope.posts = postFactory.getAllPosts();

  $scope.upVote = function(id, votes) {
    var post = postFactory.getPost(id)[0];
    postFactory.updateVotes(post, votes+1);
    postFactory.updateClass(post);
  };

  $scope.downVote = function(id, votes) {
    var post = postFactory.getPost(id)[0];
    postFactory.updateVotes(post, votes-1);
    postFactory.updateClass(post);
  };

}]);

app.controller('myFormCtrl', ['$scope', '$location', 'postFactory',
  function($scope, $location, postFactory) {

  $scope.article = {};

  $scope.postArticle = function() {
    postFactory.addPost($scope.article);
    $location.path('/');
  };

}]);