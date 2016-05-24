"use strict";

app.factory("itemStorage", function($q, $http) {

  var getItemList = function() {

    let items = [];

    return $q(function(resolve, reject){

    $http.get("https://ba-todo.firebaseio.com/items/.json")
    .success(function(itemCollection){
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id = key;
        items.push(itemCollection[key])
      })
      resolve(items);
    })
    .error(function(error) {
      reject(error);
    });
  })
  }

  var deleteItem = function(itemId){

    return $q(function(resolve, reject){

      $http.delete(`https://ba-todo.firebaseio.com/items/${itemId}.json`)
      .success(function(objectFromFirebase) {
        resolve(objectFromFirebase)
      })
    })
  }

  return {getItemList:getItemList, deleteItem:deleteItem};

});