angular.module("clienteCrud").controller("clienteController", function($scope, clienteService){

    $scope.listaClientes = [];
    $scope.clientTbMessage = "Mostrar Clientes"

    var loadClients = function(){
        clienteService.getClients()
        .then(data => $scope.listaClientes = data.data)
        .catch(err => console.log(err))
    }

    $scope.adcionarCliente = function(cliente) {
        clienteService.saveClient(cliente)
        .then(data => {
            loadClients();
            delete $scope.cliente
        })
        .catch(err => console.log(err))
    }

    $scope.deletarCliente = function(cliente){
        clienteService.deleteClient(cliente.id)
        .then(data => {
            loadClients();
        })
        .catch(err => console.log(err))
    }
    
    $scope.editarCliente = function(cliente) {
        $scope.clienteSelecionado = angular.copy(cliente);
    }

    $scope.salvarEdicao = function() {
        clienteService.updateClient($scope.clienteSelecionado.id, $scope.clienteSelecionado)
        .then(data => {
            loadClients();
            $scope.clienteSelecionado = null;
        })
    }

    $scope.cancelarEdicao = function(){
        $scope.clienteSelecionado = null;
    }

    $scope.showClientsTable = function(show){
        console.log($scope.showClients)
        $scope.showClients = !$scope.showClients
        $scope.clientTbMessage = $scope.showClients ? "Fechar" : "Mostrar Clientes";
    }

    loadClients();

})