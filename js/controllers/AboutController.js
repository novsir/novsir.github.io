app.controller('AboutController',
    function AboutController($scope,dataService){
      var promiseObj=dataService.getAbout();
        promiseObj.then(function(value) { $scope.about=value; });
      var contObj =dataService.getContacts();
      contObj.then(function(value) { $scope.contacts=value; });
	var actionsObj =dataService.getActions();
      actionsObj.then(function(value) { $scope.actions=value; });
    }
)