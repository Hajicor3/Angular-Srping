angular.module("clienteCrud").config(function($routeProvider){

    $routeProvider.when("/clientes", {
        templateUrl: "views/clientes.html",
        controller: "clienteController",
    });

    $routeProvider.when("/cliente/:id", {
        templateUrl: "views/detalhesCliente.html",
        controller: "clienteController"
    });

    $routeProvider.when("/registrar-cliente", {
        templateUrl: "views/registrarCliente.html",
        controller: "clienteController"
    });

    $routeProvider.otherwise({redirectTo: "/clientes"})
});