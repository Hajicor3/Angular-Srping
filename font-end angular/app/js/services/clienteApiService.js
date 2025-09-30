angular.module("clienteCrud").service("clienteService", function($http, apiConfig){
    this.getClients = function(){
        return $http.get(apiConfig.apiUrl+"/clients")
    }

    this.saveClient = function(cliente) {
        return $http.post(apiConfig.apiUrl+"/clients", cliente)
    }

    this.deleteClient = function(id) {
        return $http.delete(apiConfig.apiUrl+"/clients/"+id)
    }

    this.updateClient = function(id, cliente) {
        return $http.put(apiConfig.apiUrl+"/clients/"+id, cliente)
    }
})