'use strict';

angular.module('propertiesEditor', [])
	.directive('wak-widgetproperties', function() {
    	return {
    		restrict: 'E',
			scope: {
				props: '=properties'
			},
      		templateUrl: 'properties-template.html'
    	};
	});