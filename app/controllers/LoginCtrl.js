"use strict";

app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory){
  let ref = new Firebase(firebaseURL);
  console.log("ref", ref);

  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === "/logout") {
    ref.unauth(); // Firebase method that gets rid of your login token
  };

  $scope.register = () => {
    console.log("Register");
    ref.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    }, (error, userData) => {
      if (error) {
          console.log(`Error creating error ${error}`);
      } else {
        console.log(`Created User account with uid: ${userData.uid}`)
        $scope.login();
      }
    });
  }

  $scope.login = () => {
    console.log("Login");
    AuthFactory.authenticate($scope.account)
    .then(() => {
      $location.path("/");
      $scope.$apply();
    })
  }

});
