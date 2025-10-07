angular.module("clienteCrud").controller("clienteController", function($scope, clienteService, $routeParams, $location){

    $scope.listaClientes = [];
    $scope.cliente = {};
    $scope.editButtonTxt = "Editar"
    $scope.VouF = true;

    var loadClients = function(){
        clienteService.getClients()
        .then(data => $scope.listaClientes = data.data)
        .catch(err => console.log(err))
    }

    var loadClientePorId = function(){
        clienteService.getClient($routeParams.id)
        .then(data => {
            $scope.cliente = data.data
            $scope.clienteSelecionado = angular.copy($scope.cliente)
        })
        .catch(err => console.log(err))
    }

    $scope.adcionarCliente = function(cliente) {
        clienteService.saveClient(cliente)
        .then(data => {
            loadClients();
            delete $scope.cliente
            $location.path("/clientes");
        })
        .catch(err => $scope.err = true)
    }

    $scope.deletarCliente = function(cliente){
        clienteService.deleteClient(cliente.id)
        .then(data => {
            loadClients();
            $location.path("/clientes");
        })
        .catch(err => console.log(err))
    }

    $scope.salvarEdicao = function() {
        clienteService.updateClient($scope.cliente.id, $scope.clienteSelecionado)
        .then(data => {
            $location.path("/clientes");
            $scope.cliente = null;
        })
    }

    $scope.editCliente = function(){
        console.log($scope.editingCliente)
        $scope.editingCliente = !$scope.editingCliente
        $scope.editButtonTxt = $scope.editingCliente ? "Cancelar Edição" : "Editar"
        $scope.clienteSelecionado = angular.copy($scope.cliente)
    }

    loadClients();
    if($routeParams.id != undefined){
        loadClientePorId();
    }

})