(function() {

	'use strict';

	angular
		.module('DemoApp', [
			'ngEmailAutocomplete'
		])
		.controller('DemoController', ['$scope', function($scope) {

			$scope.domainsList = [
				'magnobiet.com'
			];

		}]);

}());
