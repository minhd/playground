'use strict';

angular.module('ngtutApp')
	.controller('MainCtrl', function($scope, Airport){
		$scope.airports = Airport.query();
		$scope.sidebar = 'views/parts/sidebar.html';
		$scope.edit_form = 'views/parts/edit.html';
		$scope.current_airport = null;
		$scope.editing = null;

		$scope.setAirport = function(code){
			$scope.current_airport = $scope.airports[code];
		};

		$scope.editAirport = function(code){
			$scope.editing = $scope.airports[code];
		};

		$scope.setActive = function(type){
			$scope.destinationsActive = null;
			$scope.flightsActive = null;
			$scope.reservationsActive = null;
			$scope[type+'Active'] = 'active';
		};
		//end controller MainCtrl
	});
