"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "All Items"}, {name: "New Items"}, {name: "Logout"}];
});


app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
  $scope.showListView = false;
  $scope.task = "";
  $scope.newTask = {};

  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "Greg",
      location: "Zoe's House",
      urgency: "Low",
      dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
      id: 1,
      task: "Grade Quizzes",
      isCompleted: true,
      dueDate: "12/5/15",
      assignedTo: "Joe",
      location: "NSS",
      urgency: "High",
      dependencies: "WiFi, Tissues, Vodka"
    },
    {
      id: 2,
      task: "Take a Nap",
      isCompleted: false,
      dueDate: "12/5/15",
      assignedTo: "Zoe",
      location: "Her House",
      urgency: "High",
      dependencies: "Cat, Vodka"
    }
];

  $scope.newItem = function(){
    $scope.showListView = false;
  };

  $scope.allItem = function() {
    $scope.showListView = true;
  };

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("You added a new item", $scope.newTask);
    $scope.items.push($scope.newTask);
    console.log("You added a new item", $scope.items);
    $scope.newTask = "";
  };


});



// We are using $-scoped notation, which is deprecated, but it's still found in 90% of the code
