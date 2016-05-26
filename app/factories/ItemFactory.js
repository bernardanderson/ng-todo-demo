"use strict";

app.factory("itemStorage", function($q, $http, firebaseURL) {

  var getItemList = function() {

    let items = [];

    return $q(function(resolve, reject){

    $http.get(`${firebaseURL}.json`)
    .success(function(itemCollection){
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id = key;
        items.push(itemCollection[key]);
      });
      resolve(items);
    })
    .error(function(error) {
      reject(error);
    });
  });
  };

  var deleteItem = function(itemId){

    return $q(function(resolve, reject){

      $http.delete(`${firebaseURL}${itemId}.json`)
      .success(function(objectFromFirebase) {
        resolve(objectFromFirebase);
      });
    });
  };

  var postNewItem = function(newItem){
        return $q(function(resolve, reject) {
            $http.post(
                `${firebaseURL}.json`,
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
      };

  return {getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem};

});