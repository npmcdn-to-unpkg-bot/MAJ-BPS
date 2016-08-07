var app = angular.module('calculApp', []);

app.controller('calculController', function($scope) {

    $scope.expression = "";
    $scope.result = "";

    $scope.calcul = function(){
        try{
            $scope.result = eval($scope.expression);
        }
        catch(e){
            $scope.result = "";
        }
    }
});