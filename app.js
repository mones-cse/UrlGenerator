//create an an object that hold angular module
var myApp = angular.module('myApp',[]);

myApp.controller('mainController',['$scope',function($scope){
	console.log($scope);
	mixpanel.track("Video play");
	$scope.user;
	$scope.links={};
	
	$scope.getLink= function(user){
	angular.copy(user,$scope.links);
		$scope.links.slash="/";
		$scope.links.http="http://";
		$scope.links.git=".github.io/";
		mixpanel.track("button click");
	}

}]);