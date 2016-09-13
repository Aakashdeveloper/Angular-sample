var App = angular.module('myApp', ['ngAutocomplete']);

App.controller('MyController', function MyController($scope, $http){

	$http.get('lib/js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder="name";
	
	});
	
});
App.controller('MyController1', function MyController($scope, $http){

	$http.get('lib/js/data.json').success(function(data){
		$scope.testing = data;
	
	});
	
});