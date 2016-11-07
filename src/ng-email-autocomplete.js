(function() {

	'use strict';

	function emailAutocomplete($window) {

		function link(scope, element, attrs, controller, undefined) {

			var domainsList = [
				'bol.com.br',
				'email.com',
				'globo.com.br',
				'globomail.com.br',
				'gmail.com',
				'hotmail.com',
				'hotmail.com.br',
				'icloud.com',
				'ig.com.br',
				'live.com',
				'mail.com',
				'me.com',
				'msn.com',
				'outlook.com',
				'pop.com.br',
				'protonmail.com',
				'r7.com.br',
				'terra.com.br',
				'yahoo.com',
				'yandex.com',
				'ymail.com',
				'zipmail.com',
				$window.location.host
			];

			angular
				.element(element)
				.emailautocomplete({
					suggClass: attrs.suggClass || 'email-suggestion',
					domains: (attrs.domains ? angular.merge(domainsList, scope.domains) : domainsList)
				})
				.on('blur', function(event) {

					scope.$apply(function() {
						controller.$setViewValue(event.target.value);
					});

				});

		}

		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				domains: '='
			},
			link: link
		};

	}

	angular
		.module('ngEmailAutocomplete', [])
		.directive('emailAutocomplete', emailAutocomplete);

}());
