cubicalApp.controller('CubicalController',['$scope','$http', function($scope, $http){

	$scope.search = function(){
	var url;
		var data = {
                term: $scope.name,
                limit: $scope.limit
            };
	var str = jQuery.param( data );
	var url =  "http://itunes.apple.com/search?"+str;
		$http.get(url)
		  .then(function(response) {
			  $scope.result = response.data.results;
		  });

	};
	
	$scope.getData = function(name){
		var artistName = name.artistName ;
		var url = "http://itunes.apple.com/search?term="+artistName+"&limit=1";
		$http.get(url)
		  .then(function(response) {
			  $scope.output = response.data.results;
			 // console.log($scope.output);	
		  });
		
	}
	
}]);
