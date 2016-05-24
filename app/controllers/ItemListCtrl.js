"use strict";

app.controller("ItemListCtrl", function($scope, $http){
  $scope.items = [];

  var getItems = function() {
    $http.get("https://ba-todo.firebaseio.com/items/.json")
    .success(function(itemCollection){
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id = key;
        $scope.items.push(itemCollection[key]);
      });
    });
  }

  getItems();

  $scope.itemDelete = function(itemId) {
    $http.delete(`https://ba-todo.firebaseio.com/items/${itemId}.json`)
    .success(function(response) {
      console.log(response);
      $scope.items = [];
      getItems();
    });
  }

});
