"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "All Items"}, {name: "New Items"}, {name: "Logout"}];
});


app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
});



// We are using $-scoped notation, which is deprecated, but it's still found in 90% of the code
