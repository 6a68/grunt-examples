angular.module("app").filter("now", function () {
  "use strict";

  return function (value) {
    return value + ": " + new Date().toLocaleDateString();
  };
});
