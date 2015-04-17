var app = angular.module('myApp', []);

app.config(function($httpProvider){
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});
 
app.controller('TodosCtrl', function($scope, $http) {
 
  var apiUrl = "/api/todos/"
  $scope.todos = [];
 
  $scope.init = function() {
    $scope.loading = true;
    $http.get(apiUrl).success(function(data, status, headers, config) {
      $scope.todos = data;
      console.log(data);
    });
  };

  $scope.init();
 
  $scope.addTodo = function() {
    $http.post(apiUrl, {
      name: $scope.todo.name,
      iscompleted: $scope.todo.iscompleted
      }).success(function(data, status, headers, config) {
        $scope.todos.push(data);
        $scope.todo = '';
      });
  };
 
  $scope.updateTodo = function(todo) {
    $http.put(apiUrl + todo.id, {
      name: todo.name,
      iscompleted: todo.iscompleted
      }).success(function(data, status, headers, config) {
        todo = data;
      });;
  };
 
  $scope.deleteTodo = function(index) { 
    var todo = $scope.todos[index];
 
    $http.delete(apiUrl + todo.id).success(function() {
      $scope.todos.splice(index, 1);
    });;
  };
 
});
 
 