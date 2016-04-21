'use strict';

angular.module('goDvijApp').controller('HomePageCtrl', ['$scope', '$interval',
	function($scope, $interval) {

		$scope.timeForEvent = {};

		$interval(function() {
			var t = getTimeRemaining("2017-02-02");
				$scope.timeForEvent = {
				   	total: t.total,
					days: t.days,
				   	hours: t.hours,
				   	minutes: t.minutes,
				   	seconds: t.seconds
				   }
		},1000)

		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {
			   	'total': t,
			   	'days': days,
			   	'hours': hours,
			   	'minutes': minutes,
			   	'seconds': seconds
		  	};	
		}

	}
]);