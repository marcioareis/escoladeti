module = angular.module("App", []);

module.controller("DisciplinaController", ["$scope","$http", function($scope,$http) {
        
    function novo(){
        $scope.disciplina={
            id: "",
            nome: "",
            cargaHoraria: "",
            peso: ""
        };
        $scope.isNovo = true;
    };    
    

    $scope.carregar = function(){
        $http.get("/disciplinas").success(function(data){
            $scope.disciplinas = data;
        }).error(function(){
            alert("Deu erro!");
        });
    };
    
    $scope.salvar = function(data){
        if(isNovo){
            $http.post(data, $scope.disciplina)
                .success(function(){
                    $scope.carregar();
                }).error(function(){
                    alert("Deu erro!");
                });
        }else{
           $http.post(data, $scope.disciplina, $scope.disciplina.id)
                .success(function(){
                    $scope.carregar();
                }).error(function(){
                    alert("Deu erro!"); 
                }); 
        };
    };
    
    $scope.excluir = function(disciplina){
        $http.remove("/discplinas"+disciplina.id)
             .success(function(){  
                 $scope.carregar();     
             }).error(function(){
                 alert("Deu erro!");
             });
    };
    
    $scope.alterar = function(disciplina){
        $scope.disciplina = angular.copy(disciplina);
        $scope.isNovo = false;
    };
        
}]);


