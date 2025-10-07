angular.module("clienteCrud").directive("uiAlert", function(){
    return {
        templateUrl: "views/alert.html",
        restrict: "EA",
        scope: {
            title: "@",
            message: "@"
        },
    }
});