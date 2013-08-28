angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function($resource){
		return $resource('/airports.json/:airportCode');
	})