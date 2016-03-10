'use strict';

angular.module('goDvijApp', ['ngResource','ngRoute']).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'templates/pages/home.html', controller: 'HomePageCtrl'});
      
    }
]);