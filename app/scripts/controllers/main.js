'use strict';

/**
 * @ngdoc function
 * @name iconApp02App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iconApp02App
 */
angular.module('iconApp02App')
  .controller('MainCtrl', function ($scope,Mongo) {
$scope.members = Mongo.database.query();
  $scope.addDbMem = function(){
    var fName = $scope.FName;
    var lName = $scope.LName;
    var Title = $scope.Title;
    var NewMem = Mongo.database({fname:fName,lname:lName,title:Title});
    NewMem.$save();
    $scope.members.push(NewMem);
  }
  });
