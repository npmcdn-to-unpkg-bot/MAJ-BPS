var app = angular.module('Calco', []);

app.controller('calculController', function($scope) {

    $scope.expr = "";
    $scope.resultat = "";

    $scope.funcalcul = function(){
        try{
            $scope.resultat = eval($scope.expr);
        }
        catch(e){
            $scope.resultat = "";
        }
    }
});