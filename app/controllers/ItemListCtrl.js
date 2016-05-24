"use strict";

app.controller("ItemListCtrl", function($scope, $http, itemStorage){
  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    console.log(itemCollection);
    $scope.items = itemCollection;
  });

  $scope.itemDelete = function(itemId) {

    itemStorage.deleteItem(itemId).then(function(reponse){
      itemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
      });
    });
  }
});
