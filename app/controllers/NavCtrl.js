"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navItems = [
  {
    name: "All Items",
    url: "#/items/list"
  }, {
    name: "New Items",
    url: "#/items/new"
  },{
    name: "Logout",
    url: "#/logout"
  }];
});
