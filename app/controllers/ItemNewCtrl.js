"use strict";

app.controller("ItemNewCtrl", function($scope, $http, $location){
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };

  $scope.items = [];

  $scope.addNewItem = function() {

    $http.post(
      "https://ba-todo.firebaseio.com/items.json", // url
      JSON.stringify({ // data
        assignedTo: $scope.newTask.assignedTo,
        dependencies: $scope.newTask.dependencies,
        dueDate: $scope.newTask.dueDate,
        isCompleted: $scope.newTask.isCompleted,
        location: $scope.newTask.location,
        task: $scope.newTask.task,
        urgency: $scope.newTask.urgency
      })
      ).success(function(response) {
        $location.url("/items/list");
        console.log("The response is: ", response);
      })

    // $scope.newTask.isCompleted = false;
    // $scope.newTask.id = $scope.items.length;
    // console.log("You added a new item", $scope.newTask);
    // $scope.items.push($scope.newTask);
    // console.log("You added a new item", $scope.items);
    // $scope.newTask = "";
  };
});
