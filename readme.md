# Basic Angular setup and injuction 
# in index.html 
* In this section ng-app  is the ng-app Directive. The ng-app directive defines the root element of an AngularJS application. It is need to be same name as the angular.moule string name.
```
<html lang="en" ng-app="myApp">
```
* In this section ng-controller define .there can be multiple controller in one ng-app . controller check every variable's change in dygaste proces. 
```
<div ng-controller="mainController">
	<h1>Hello world {{name}}</h1>
</div>
```

#In app.js 
* here 'myApp' string is the name of app name and [] is the dependency if we add some new angular file like route or others than it need to add in here inside []
```
var myApp = angular.module('myApp', []);
```
* here 'mainController is the controller name which is in index.html and after 'mainController [] use cause of angular.min version this version change the variable name which we do not want .So we use $scope'.
* and $scope.name="mones" use to change the value in index.html dynamicaly 
````
myApp.controller('mainController',['$scope',function($scope){
		console.log($scope);
		$scope.name="mones";
}]);
```