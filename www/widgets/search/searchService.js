(function () {

	'use strict';

	angular.module('WB.Services.Search', [])

		.factory('wbSearch', wbSearch);

	wbSearch.$inject = ['$http'];


	function wbSearch($http) {

		var service = {};

		service.findAllWines = function () {
			return $http.get('https://wine-brain.herokuapp.com/wines');
		};

        service.findAllWineNames = function () {
            return $http.get('https://wine-brain.herokuapp.com/wines/names');
        };

		service.findByName = function (name) {
			return $http.get('https://wine-brain.herokuapp.com/wines/names/' + name);
		};

        service.findById = function (id) {
            return $http.get('https://wine-brain.herokuapp.com/wines/' + id);
        };

		service.addNewWine = function (wine) {
			wine = JSON.stringify(wine);
			return $http.post('https://wine-brain.herokuapp.com/wines', wine);
		};

		return service;
	}


}());
