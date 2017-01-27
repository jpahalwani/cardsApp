var eCardsApp = angular.module('eCardsApp', ['ngRoute']);

eCardsApp.controller('eCardsAppCtrl', function($scope, $location) {

    $scope.navigateClick = function(){
    	$location.path('/page2');
    }

});
eCardsApp.controller('eCardsAppCtrl2', function($scope, $http) {

    $scope.saveAsDraft = function(){
    	var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }
		var data = {
			 		 id: 2,
			 		 nameOnCard: $scope.bdayname,
			 		 hostName: $scope.hostName,
			 		 venue: $scope.venue
			 		 }

		$http.post('127.0.0.1:3000/newDraft', data, config)
            .success(function (data, status, headers, config) {
                console.log("inside success");
            })
            .error(function (data, status, header, config) {
               console.log("inside failure");
            });
    };

});