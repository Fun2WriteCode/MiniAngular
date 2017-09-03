'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
   .controller('UserProfileSettingCtr', ['$scope', '$state', 'Restangular','growl', function ($scope, $state, Restangular, growl) {
     $scope.logout = function () {
                        localStorage.clear();
                        $state.go('login');
                    };


    $scope.userProfile = function(){
    	 var token = localStorage.getItem('id_token');
		//		console.log(token);
                Restangular.setDefaultHeaders({Authorization: token});
                //problem is here in tocken 
                Restangular.oneUrl('userProfile', 'http://localhost:3000/userProfile').get().then(function (res) {
                    console.log(res.user);
                });
    }


}]);