var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope',function($scope){
		console.log($scope);
		$scope.name="mones";
}]);