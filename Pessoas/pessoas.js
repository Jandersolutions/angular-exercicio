var pessoasApp = angular
  .module('pessoas' , ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/' , {
        templateUrl: 'listar.html'
      });
  })
  .controller('CtrlPessoas', function($scope){
    $scope.pessoas = [
      {nome:"Maria" , cidade:"São Paulo"},
      {nome:"João" , cidade:"Pirapora"},
      {nome:"Joana" , cidade:"Salvador"},
      {nome:"Marcio" , cidade:"Londrina"},
      {nome:"Ana" , cidade:"São Paulo"},
      {nome:"Marta" , cidade:"Patos De Minas"},
      {nome:"Sergio" , cidade:"Curvelo"}
    ];

  });
