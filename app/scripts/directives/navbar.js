'use strict';

angular.module('iconApp02App').directive('navbar',function(){
  return{
    restrict:'E',
    templateUrl:'views/navbar.html',
    controller:'NavCtrl'
  }
});
