"use strict";

app.controller("LoginCtrl", function($scope, firebaseURL){
  let ref = new Firebase(firebaseURL);
  console.log("ref", ref);

  $scope.account = {
    email: "",
    password: ""
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

  }

});