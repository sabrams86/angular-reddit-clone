var app = angular.module("rclone", []);

app.controller("NavbarController", function ($scope) {
  $scope.newPost = false;
  $scope.showPostForm = function () {
    $scope.newPost = !$scope.newPost;
  }
})

app.controller("ContentController", function ($scope) {

})
