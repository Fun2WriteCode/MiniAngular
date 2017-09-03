'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
        .controller('profile', ['$scope', '$timeout', 'Restangular', '$stateParams', function ($scope, $timeout, Restangular, $stateParams) {

               
                    $scope.employeeProfile = function(){
						var url = "http://localhost:3000/employee" + "/" + $stateParams.id;
						
						Restangular.oneUrl("employee", url).get().then(function (employee) {
							$scope.employee = employee;
						});
						
					}
					
					
					
					
					
					$scope.productDetail = function(){
						var url = "http://localhost:3000/product" + "/" + $stateParams.id;
						
						Restangular.oneUrl("product", url).get().then(function (product) {
							$scope.product = product;
						});
					
					}
                
            }]);