app.controller('allPostsCtrl', ['$scope', 'postFactory',
  function($scope, postFactory) {

  $scope.posts = postFactory.getAllPosts();
  $scope.newComment = {};

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

  $scope.addComment = function(id, comment) {
    var post = postFactory.getPost(id)[0];
    postFactory.addComment(post, comment);
    $scope.newComment = {};
  };

}]);

app.controller('myFormCtrl', ['$scope', '$location', 'postFactory',
  function($scope, $location, postFactory) {

  $scope.article = {};

  $scope.postArticle = function() {
    if ($scope.postForm.$valid) {
      postFactory.addPost($scope.article);
      $location.path('/');
    }
  };

}]);