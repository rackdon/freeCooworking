var freeWorkingApp = angular.module('freeWorkingApp', []);

freeWorkingApp.factory('SearchSpaces', function($http) {
  var api = {};

  api.searchByFields = function(fields, values) {
    // return $http.get("http://192.168.1.103:8080/todo-rest/rest/play/flaixfm");
    return Promise.resolve()
      .then(function() {
        return {
          name: 'bla bla bla'
        };
      });
  };

  return api;
});

freeWorkingApp.controller('SearchController', function($scope, SearchSpaces) {
  $scope.results = [];

  $scope.search = function() {
    return SearchSpaces
      .searchByFields(null, null)
      .then(function(data) {
        for (var i = 0; i < 10; i++) {
          $scope.results.push(data);
        }
        return;
      })
      .catch(function(err) {
        console.dir(err);
      });
  };
});