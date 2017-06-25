/**
 * Created by azi
 */
'use strict';

module.exports = function ($scope,$rootScope,$state,loginUser) {
    // msg dropdown default close
    $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
    // login function
 $scope.login = function(user){
    loginUser.loginn(user, function(msg){
        alert(msg);
    });
 }
};