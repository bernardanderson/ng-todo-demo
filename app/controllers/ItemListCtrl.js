"use strict";

app.controller("ItemListCtrl", function($scope, $http){
  $scope.items = [];

  $http.get("https://ba-todo.firebaseio.com/items/.json")
  .success(function(itemCollection){
    Object.keys(itemCollection).forEach(function(key){
      itemCollection[key].id = key;
      $scope.items.push(itemCollection[key]);
    });
  });

});
