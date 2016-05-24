"use strict";

app.controller("ItemViewCtrl", function($scope, $http, $routeParams){

  $scope.items = [];

  $scope.selectedItem = {};

  console.log($routeParams.itemId);

  $http.get("https://ba-todo.firebaseio.com/items/.json")
  .success(function(itemCollection){
    Object.keys(itemCollection).forEach(function(key){
      itemCollection[key].id = key;
      $scope.items.push(itemCollection[key]);

      $scope.selectedItem = $scope.items.filter(function(item){
        return item.id === $routeParams.itemId;
      })[0];


    });
      console.log($scope.selectedItem);
  });

});
