(function () {

  angular.module('redditClone')
    .service('postFactory', postFactory);


  function postFactory() {

    var posts = {};

    allPosts = [
      {
        id: 1,
        title: 'Look at this Title',
        author: 'ClintonFan4Lyfe',
        img: 'http://i.imgur.com/kETTPXr.jpg',
        desc: 'Bicycle rights meggings umami intelligentsia wolf hoodie. Before they sold out leggings single-origin coffee, kale chips chicharrones brooklyn tote bag next level photo booth kinfolk. Raw denim irony humblebrag, schlitz brunch williamsburg pitchfork.',
        date: moment('2016 03 25', 'YYYY MM DD').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do YYYY'
        }),
        votes: 0,
        color: 'black',
        comments: [
          {
            author: 'Michael',
            text: 'Such a good post!'
          }
        ],
        favorite: false
      },
      {
        id: 2,
        title: 'Another Title',
        author: 'Carl',
        img: 'http://i.imgur.com/mpEbtMb.jpg',
        desc: 'Franzen bicycle rights chartreuse, tumblr put a bird on it viral pinterest direct trade neutra cornhole freegan post-ironic everyday carry portland lo-fi. Umami neutra ugh, listicle PBR&B microdosing hashtag kinfolk drinking vinegar tofu authentic cornhole retro ethical small batch. ',
        date: moment(new Date()).calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do YYYY'
        }),
        votes: 0,
        color: 'black',
        comments: [],
        favorite: true
      },
      {
        id: 3,
        title: 'Titles, Titles, Titles',
        author: 'HashtagMemesCatsBacon',
        img: 'http://i.imgur.com/KRxgsMQ.jpg',
        desc: 'Sustainable single-origin coffee truffaut iPhone selvage. 90\'s chia actually ennui, vegan salvia bespoke you probably haven\'t heard of them readymade selfies williamsburg ramps VHS synth.',
        date: moment('2016 03 10', 'YYYY MM DD').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do YYYY'
        }),
        votes: 0,
        color: 'black',
        comments: [],
        favorite: false
      }
    ];

    posts.getAllPosts = function() {
      return allPosts;
    };

    posts.getPost = function(postID) {
      return allPosts.filter(function(post) {
        return post.id === parseInt(postID);
      });
    };

    posts.updateVotes = function(post, voteCount) {
      allPosts[post.id-1].votes = parseInt(voteCount);
    };

    posts.addPost = function(postObj) {
      var currentID = allPosts[allPosts.length-1].id;
      postObj.id = currentID+1;
      postObj.date = moment(new Date()).calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do YYYY'
        });
      postObj.votes = 0;
      postObj.comments = [];
      postObj.favorite = false;
      allPosts.push(postObj);
    };

    posts.updateClass = function(postObj) {
      if(postObj.votes > 0) {
        postObj.color = 'green';
      } else if (postObj.votes < 0) {
        postObj.color = 'red';
      } else {
        postObj.color = 'black';
      }
    };

    posts.addComment = function(post, comment) {
      allPosts[post.id-1].comments.push(comment);
    };

    posts.toggleFavorite = function(post) {
      if(allPosts[post.id-1].favorite) {
       allPosts[post.id-1].favorite = false;
      } else {
        allPosts[post.id-1].favorite = true;
      }
    };

    return posts;

  }

})();