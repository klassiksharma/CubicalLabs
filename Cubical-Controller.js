cubicalApp.controller('CubicalController',['$scope','$http', function($scope, $http){

	// Search Function to request the data on the basis of input......
	$scope.search = function(){
	var url;
		var data = {
                term: $scope.name,
                limit: $scope.limit
            };
	var str = jQuery.param( data );
	var url =  "https://itunes.apple.com/search?"+str;
		$http.get(url,
			  {
		headers:{'Content-Type': 'application/json'}
		})
		  .then(function(response) {
			  $scope.result = response.data.results;
		  });

	};
	
	// getData Function to request the data for the particular artist.......
	$scope.getData = function(name){
		var artistName = name.artistName ;
		var url = "https://itunes.apple.com/search?term="+artistName+"&limit=1";
		$http.get(url,
			  {
		headers:{'Content-Type': 'application/json'}
		})
		  .then(function(response) {
			  $scope.output = response.data.results;
			 // console.log($scope.output);	
		  });
		
	}
	
}]);
