'use strict';


angular.module('mytodoApp')
    .controller('RSVPCtrl', function ($scope) {
        this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.master = {
            firstName: "John",
            lastName: "Doe"
        };
        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
    }


    );
