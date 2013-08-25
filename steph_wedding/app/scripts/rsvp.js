function rsvpCtrl($scope){

	$scope.adults = [{
		name: 'Minh Duc Nguyen',
		dietry: 'none'
	}];
	$scope.num_adults = $scope.adults.length;

	$scope.$watch('num_adults', function(){
		var adult = {
			name: '',
			dietry: ''
		};
		if($scope.num_adults > $scope.adults.length){
			var add_more = $scope.num_adults - $scope.adults.length;
			for (var i = 1; i <= add_more; i++){
				$scope.adults.push(adult);
			}
			
		}else if($scope.num_adults < $scope.adults.length){
			$scope.adults = $scope.adults.slice(0, $scope.num_adults);
		}
		console.log($scope.adults);
	});

	$scope.respond = function(){
		var adults = [];
		$('.adult').each(function(){
			var name = $('input.respond_name', this).val();
			var dietry = $('input.respond_diet', this).val();
			adults.push({name:name, dietry:dietry});
		});
		$scope.adults = adults;
		console.log($scope.adults);
	}
}