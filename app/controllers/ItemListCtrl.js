"use strict";

app.controller("ItemListCtrl", function($scope){
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
});
