"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
  .constant("firebaseURL", "https://ba-todo.firebaseio.com/items/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("User is auth'ed")
    resolve();
  } else {
    console.log("User is NOT auth'ed")
    reject();
  }
})

// $routeProvider is a method in ngRoute
app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/items/list", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/items/new", {
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl",
      resolve: {isAuth}
    }).
    when("/items/:itemId", {
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl",
      resolve: {isAuth}
    }).
    when("/items/:itemId/edit", {
      templateUrl: "partials/item-new.html",
      controller: "ItemEditCtrl",
      resolve: {isAuth}
    }).
    when("/login", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});

app.run( ($location) => {
  let todoRef = new Firebase("https://ba-todo.firebaseio.com/items/");
  todoRef.onAuth(authData => {
    if (!authData) {
      $location.path("/login");
    }
  })
})
