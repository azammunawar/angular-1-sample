/**
 * Created by azi
 */
'use strict';

module.exports = function ($scope,$rootScope,$state,loginUser) {
    $rootScope.menustatus = true;
    // msg dropdown default close
    $scope.isNavCollapsed = true;
    $scope.msgdropdown = true;
    $scope.logout = function(){
        loginUser.logout();
    }
    $scope.sidemenu_toggle = function(){
        $rootScope.menustatus = !$scope.menustatus;
    }

};