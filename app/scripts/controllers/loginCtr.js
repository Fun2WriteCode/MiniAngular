'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('loginCtr', ['$scope', '$timeout', 'Restangular', '$state','growl', 
  				function ($scope, $timeout, Restangular, $state, growl) {
    
$scope.signin = function(){
        var user = {
          username:$scope.username,
          password:$scope.password
        }
        Restangular.allUrl('userauthenticate', 'http://localhost:3000/userauthenticate').post(user).then(function(response){
            if(response.success){
              localStorage.setItem('id_token', response.token);
              localStorage.setItem('user', JSON.stringify(response.user));
              $state.go('dashboard.home');
            }else{
              console.log(response);
              growl.warning(response.msg,{title: 'Alert!'});
              $state.go('login');
            }
                          
        });
      }
      
      
      //
      if (localStorage.getItem('id_token')) {
                            
                        $state.go('dashboard.home');
                        } else {

                           growl.warning('Please Register First ',{title: 'Register'});
                        }

}]);