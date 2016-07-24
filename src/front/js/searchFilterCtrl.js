var freeWorkingApp = angular.module('freeWorkingApp', []);

freeWorkingApp.factory('Api', function($http) {
  var endpoint = 'http://192.168.1.134:8082'
  var api = {};

  api.getSpaces = function() {
     return $http.get(endpoint + '/spaces')
    .catch(function(err) {
      console.dir(err)
    })
  };

  return api;
});

freeWorkingApp.controller('SearchController', function($scope, Api) {
  $scope.results = [];
  $scope.list = function () {
    return Api.getSpaces()
      .then(function(spaces) {
        $scope.results = spaces.data
        return
      })
  }

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
  $scope.list()
});
