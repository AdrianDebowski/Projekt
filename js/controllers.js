var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl',function($scope, $http) {

$http.get('img/galleries.json').then(function(response) {
	$scope.galleries=response.data.galleries;

});

$http.get('img/sort.json').then(function(response) {
	$scope.sortList=response.data.sortList;
	$scope.orderProp = 'when';
});
}); 

