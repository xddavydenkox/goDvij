'use strict';

angular.module('actionTime').controller('HomePageCtrl', ['$scope', '$interval',
	function($scope, $interval) {

		        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
            console.log("HI");
        }

        // Get all images and insert the clicked image inside the modal
        // Get the content of the image description and insert it inside the modal image caption
        var images = document.getElementsByTagName('img');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        var i;
        for (i = 0; i < images.length; i++) {
           images[i].onclick = function(){
               modal.style.display = "block";
               modalImg.src = this.src;
               modalImg.alt = this.alt;
               captionText.innerHTML = this.nextElementSibling.innerHTML;
           }
        }

		// $scope.timeForEvent = {};

		// $interval(function() {
		// 	var t = getTimeRemaining("2017-02-02");
		// 		$scope.timeForEvent = {
		// 		   	total: t.total,
		// 			days: t.days,
		// 		   	hours: t.hours,
		// 		   	minutes: t.minutes,
		// 		   	seconds: t.seconds
		// 		   }
		// },1000)

		// function getTimeRemaining(endtime) {
		// 	var t = Date.parse(endtime) - Date.parse(new Date());
		// 	var seconds = Math.floor( (t/1000) % 60 );
		// 	var minutes = Math.floor( (t/1000/60) % 60 );
		// 	var hours = Math.floor( (t/(1000*60*60)) % 24 );
		// 	var days = Math.floor( t/(1000*60*60*24) );
		// 	return {
		// 	   	'total': t,
		// 	   	'days': days,
		// 	   	'hours': hours,
		// 	   	'minutes': minutes,
		// 	   	'seconds': seconds
		//   	};	
		// }

	}
]);