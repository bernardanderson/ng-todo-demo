"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "All Items"}, {name: "New Items"}, {name: "Logout"}];
});


app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
  $scope.showListView = true;

  $scope.newItem = function(){
    $scope.showListView = false;
  };

  $scope.allItem = function(){
    $scope.showListView = true;
  };





});



// We are using $-scoped notation, which is deprecated, but it's still found in 90% of the code
