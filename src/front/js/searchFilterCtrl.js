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

  api.getSpace = function(id) {
     return $http.get(endpoint + '/spaces/' + id)
    .catch(function(err) {
      console.dir(err)
    })
  };

  return api;
});

freeWorkingApp.controller('SearchController', function($scope, $location, Api) {
  $scope.results = [];
    var loc = $location.$$absUrl;
    console.dir(loc);
  $scope.list = function () {
    return Api.getSpaces()
      .then(function(spaces) {
        $scope.results = spaces.data
        return
      })
  }

  $scope.getSpace = function() {
    console.dir('asdasd' + loc);
    var id = loc.substr(loc.indexOf('=')+1);
    console.dir(id);
    return Api.getSpace(id)
    .then(function(space){
        console.dir(space);
        $scope.results = [];
        $scope.results.push(space.data);
        return;
    });
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
  if (loc.indexOf('space-file') > -1) {
    $scope.getSpace();
  } else {
    console.log(11111);
    $scope.list();
  } 
});
