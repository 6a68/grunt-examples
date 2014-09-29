angular.module("app").controller("UserController", function ($scope) {
  $scope.users = [
    {name: "John Smith", value: 29},
    {name: "Jane Doe", value: 34}
  ];
});
