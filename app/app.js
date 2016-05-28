"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
  .constant("firebaseURL", "https://ba-todo.firebaseio.com/items/");

// $routeProvider is a method in ngRoute
app.config(function($routeProvider) {
  $routeProvider.
    when("/items/list", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl"
    }).
    when("/items/new", {
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl"
    }).
    when("/items/:itemId", {
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl"
    }).
    when("/items/:itemId/edit", {
      templateUrl: "partials/item-new.html",
      controller: "ItemEditCtrl"
    }).
    when("/login", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/items/list");
});
