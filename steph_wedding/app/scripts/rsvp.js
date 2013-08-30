angular.module('site', ['firebase']).
	value('fbURL', 'https://steph-wedding.firebaseio.com/attending/').
	config(router)
;

function router($routeProvider){
	$routeProvider.
		when('/', {controller:'rsvpCtrl'}).
		when('/list',{controller:'listRSVP'})
	;
}

function rsvpCtrl($scope, fbURL, angularFireCollection){
	$scope.attending = [];
	$scope.attending['adults'] = [''];
	$scope.attending['childrens'] = [];
	$scope.attending.diet = '';
	$scope.num_adults = 1;
	$scope.num_childrens = 0;
	$scope.rsvp_id = null;

	// $scope.rsvp_id = '-J2DcFYdrTy4L0Xnxjm1';
	
	$scope.$watch('num_adults', function(){
		var adult = '';
		if($scope.num_adults > $scope.attending.adults.length){
			var add_more = $scope.num_adults - $scope.attending.adults.length;
			for (var i = 1; i <= add_more; i++){
				$scope.attending.adults.push(adult);
			}
			
		}else if($scope.num_adults < $scope.attending.adults.length){
			$scope.attending.adults = $scope.attending.adults.slice(0, $scope.num_adults);
		}
	});

	$scope.$watch('num_childrens', function(){
		var adult = '';
		if($scope.num_childrens > $scope.attending.childrens.length){
			var add_more = $scope.num_childrens - $scope.attending.childrens.length;
			for (var i = 1; i <= add_more; i++){
				$scope.attending.childrens.push(adult);
			}
		}else if($scope.num_childrens < $scope.attending.childrens.length){
			$scope.attending.childrens = $scope.attending.childrens.slice(0, $scope.num_childrens);
		}
	});

	$scope.respond = function(){
		var adults = [];
		$('.adult').each(function(){
			adults.push($(this).val());
		});
		var children = [];
		$('.child').each(function(){
			children.push($(this).val());
		});
		$scope.attending.adults = adults;
		$scope.attending.childrens = children;

		$scope.add_rsvp($scope.attending);
	}

	$scope.add_rsvp = function(details){
		var service = angularFireCollection(fbURL);
		var result = service.add($scope.attending, function(){
			$scope.rsvp_id = result.name();
			$scope.load_existing($scope.rsvp_id);
		});
	}

	$scope.remove_rsvp = function(rsvp_id){
		var service = new Firebase(fbURL+'-J2DOPyqBo7Jk9g1pRhj');
		service.remove();
	}

	$scope.reset_rsvp = function(){
		$scope.attending = [];
		$scope.attending['adults'] = [''];
		$scope.attending['childrens'] = [];
		$scope.attending.diet = '';
		$scope.num_adults = 1;
		$scope.num_childrens = 0;
		$scope.rsvp_id = null;
	}

	$scope.load_existing = function(rsvp_id){
		if($scope.rsvp_id){
			var already = angularFireCollection(fbURL+$scope.rsvp_id);
			// console.log(already);
			//$scope.attending = already;
			// $('#rsvp_form').hide();
		}
	}
	$scope.load_existing($scope.rsvp_id);
}

function listRSVP($scope, angularFire, fbURL, angularFireCollection){

	$scope.server_attending = angularFireCollection(fbURL);
	// $scope.server_attending.remove('-J2DOjLOJmO6LKksPqwh');
	console.log($scope.server_attending);
}