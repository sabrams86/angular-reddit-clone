var app = angular.module("rclone", ['angularMoment']);


var posts = [
  {
    title: "Cat Attack",
    author: "Steve",
    url: "http://img07.deviantart.net/43cc/i/2002/34/1/d/clumsy_cat.jpg",
    description: "Vicious cat attack on innocent sleeping dog",
    date: Date.now()-500000000,
    votes: 5,
    comments: [{name: "Steve", content: "This is a comment"}, {name: "Guy", content: "What are you talking about!"}],
  },
  {
    title: "Dino-Myte",
    author: "Guy",
    url: "http://www.margothovley.com/wp-content/uploads/2012/03/homework-class-test-school-of-fail-the-thesaurus-was-the-mightiest-beast-of-the-dinosaur-kingdom.jpg",
    description: "Breaking news!  It's a new dinosaur!",
    date: Date.now(),
    votes: 1,
    comments: [{name: "Steve", content: "Angular Rocks"}, {name: "Dinoman", content: "Hah, that's hilarious"}],
  },
  {
    title: "Silicon Valley",
    author: "Pied Piper",
    url: "https://media2.giphy.com/media/dbHS31nm21uAU/200.gif",
    description: "Welcome and hey",
    date: Date.now()-300000000,
    votes: -4,
    comments: [{name: "Steve", content: "Angular Rocks"}],
  },
  {
    title: "New Dino",
    author: "Guy",
    url: "http://www.margothovley.com/wp-content/uploads/2012/03/homework-class-test-school-of-fail-the-thesaurus-was-the-mightiest-beast-of-the-dinosaur-kingdom.jpg",
    description: "Breaking news!  It's a new dinosaur!",
    date: Date.now()-509900000,
    votes: 0,
    comments: [],
  },
  {
    title: "New Dinosaur Discovered",
    author: "Guy",
    url: "http://www.margothovley.com/wp-content/uploads/2012/03/homework-class-test-school-of-fail-the-thesaurus-was-the-mightiest-beast-of-the-dinosaur-kingdom.jpg",
    description: "Breaking news!  It's a new dinosaur!",
    date: Date.now()-100000000,
    votes: 4,
    comments: [{name: "Steve", content: "Angular Rocks"}, {name: "Dinoman", content: "Hah, that's hilarious"}, {name: "Dinoman", content: "But really, it's great"}],
  },
];


app.controller("NavbarController", function ($scope) {
  $scope.sortOrder = "Sort By Votes"
  $scope.newPost = false;
  $scope.showComments = false;
  $scope.showCommentForm = false;
  $scope.showPostForm = function () {
    $scope.newPost = !$scope.newPost;
  }
  $scope.createPost = function () {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.url = $scope.url;
    post.description = $scope.description;
    post.date = Date.now();
    post.votes = 0;
    post.comments = [];
    posts.push(post);
    $scope.showPostForm();
    $scope.title = '';
    $scope.author = '';
    $scope.url = '';
    $scope.description = '';
    $scope.userForm.$setPristine();
  }
  $scope.postComment = function () {
    var comment = {};
    comment.name = this.comments.name;
    comment.content = this.comments.content;
    this.post.comments.push(comment);
    this.showCommentForm = !this.showCommentForm;
    this.comments.name = '';
    this.comments.content = '';
    this.showComments = true;
    $scope.commentForm.$setPristine();
  }
  $scope.orderVotes = function () {
    $scope.sortOrder = "Sort By Votes";
    $scope.order = 'votes';
    $scope.orderDir = 'reverse';
  }
  $scope.orderDates = function () {
    $scope.sortOrder = "Sort By Dates";
    $scope.order = 'date';
    $scope.orderDir = 'reverse';
  }
  $scope.orderTitles = function () {
    $scope.sortOrder = "Sort By Titles";
    $scope.order = 'title';
    $scope.orderDir = '';
  }
  $scope.order = 'votes';
  $scope.orderDir = 'reverse';
  $scope.posts = posts;
  $scope.upVote = function () {
    this.post.votes += 1;
  }
  $scope.downVote = function () {
    this.post.votes -= 1;
  }
  $scope.commentShow = function () {
    this.showComments = !this.showComments;
  }
  $scope.commentFormShow = function () {
    this.showCommentForm = !this.showCommentForm;
  }
})

app.controller("ContentController", function ($scope) {

})
