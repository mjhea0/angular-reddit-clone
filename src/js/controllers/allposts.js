(function () {

  angular.module('redditClone')
    .controller('allPostsCtrl', [
      '$scope', 'postFactory', allPostsCtrl]
    );


  function allPostsCtrl($scope, postFactory) {

    $scope.posts = postFactory.getAllPosts();
    $scope.newComment = {};
    $scope.filter = '-votes';

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

    $scope.updateFilter = function(order, filter) {
      var sign = '';
      if(order === 'descending') {
        sign = '-';
      } else {
        sign = '+';
      }
      $scope.filter = sign + filter;
    };

    $scope.reverseFilter = function() {
      var filterArray = $scope.filter.split('');
      var sign = filterArray.splice(0, 1);
      if(sign[0] === '+') {
        $scope.filter = '-' + filterArray.join('');
      } else {
        $scope.filter = '+' + filterArray.join('');
      }
    };

    $scope.favoritePost = function(id) {
      var post = postFactory.getPost(id)[0];
      postFactory.toggleFavorite(post);
    };

  }

})();