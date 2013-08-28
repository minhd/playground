'use strict';

// angular.module('ngtutApp', [])
// 	.config(function($routeProvider){
// 		$routeProvider
// 	  		.when('/', {
// 			templateUrl:'views/main.html',
// 			controller:'MainCtrl'
// 		})
// 	.otherwise({
// 		redirectTo:'/'
// 	})
// });

angular.module('ngtutApp', ['airlineServices'])
	.config(myRouter);

function myRouter($routeProvider){
	$routeProvider
  		.when('/', {
			templateUrl:'views/main.html',
			controller:function($scope){
				$scope.setActive('destinations');
			}
		})
		.when('/flights',{
			template:'<h3>Flights</h3>',
			controller:function($scope){
				$scope.setActive('flights');
			}
		})
		.when('/reservations', {
			template: '<h3>Your Reservations</h3>',
			controller:function($scope){
				$scope.setActive('reservations');
			}
		})
  		.otherwise({
			redirectTo:'/'
		})
	;
}