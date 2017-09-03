'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
        .controller('tabController', ['$scope', '$timeout', 'Restangular', '$stateParams', function ($scope, $timeout, Restangular, $stateParams) {

                //Restangular.setDefaultRequestParams(['remove', 'post'], {confirm: true});

                $scope.getAllEmployee = function () {
                    console.log("getAllEmployee");
                    Restangular.allUrl('employee', 'http://localhost:3000/employee').getList().then(function (employeees) {
                        console.log("employeees", employeees);
                        $scope.emp = employeees;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
				
				
				$scope.getAllProducts = function () {
                    Restangular.allUrl('product', 'http://localhost:3000/product').getList().then(function (product) {
                        console.log("product", product);
                        $scope.product = product;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
				
				
				
				
				
				
				
				

            }]);