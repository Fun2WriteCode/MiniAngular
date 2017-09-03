'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('userSignupCtr', ['$scope', '$timeout', 'Restangular','growl', function ($scope, $timeout, Restangular, growl) {
    	$scope.signup = function(){
    		var data ={
					firstname:$scope.firstname,
					lastname:$scope.lastname,
					username:$scope.username,
					email:$scope.email,
					password:$scope.password
				};

		if(!data.firstname || !data.lastname || !data.username || !data.email || !data.password){
					growl.warning('Any field should not contain Empty.',{title: 'Fill All Fields!'});
				}else{
					Restangular.allUrl('userregister' , 'http://localhost:3000/userregister').post(data).then(function(res){

						growl.warning(res.msg,{title: 'Successful Registerd!'});

					});

				}

    	}
}]);