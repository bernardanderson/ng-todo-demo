"use strict";

app.controller("ItemNewCtrl", function($scope){
  $scope.newTask = {};

  $scope.items = [];

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("You added a new item", $scope.newTask);
    $scope.items.push($scope.newTask);
    console.log("You added a new item", $scope.items);
    $scope.newTask = "";
  };
});
