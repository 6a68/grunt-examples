angular.module("app").filter("now", function () {
  return function (value) {
    return value + ": " + new Date().toLocaleDateString();
  };
});
