angular.module('todoApp', ['restangular', 'ngRoute']).
  config(function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl, 
        templateUrl:'list.html'
      }).
      when('/edit/:id', {
        controller:EditCtrl, 
        templateUrl:'detail.html',
        resolve: {
          todo: function(Restangular, $route){
            return Restangular.one('todos', $route.current.params.projectId).get();
          }
        }
      }).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
      
      RestangularProvider.setBaseUrl('/api/');
      RestangularProvider.setDefaultRequestParams({ apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2UiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6Impvc2VtYXJpYS5taWNvbGlAZ21haWwuY29tIiwiZXhwIjoxNDMwMzUxNTg0fQ.p1JckF-W7hwEL5rhR0WycziypqsjVXMCsoEAKO_FSuY' })
      RestangularProvider.setRestangularFields({
        id: '$id'
      });
      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
        if (operation === 'put') {
          elem.id = undefined;
          return elem;
        }
        return elem;
      })
  });


function ListCtrl($scope, Restangular) {
   $scope.todos = Restangular.all("todos").getList().$object;
}


function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('todos').post($scope.todo).then(function(todo) {
      $location.path('/list');
    });
  }
}

function EditCtrl($scope, $location, Restangular, todo) {
  var original = todo;
  $scope.todo = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.todo);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.todo.put().then(function() {
      $location.path('/');
    });
  };
}