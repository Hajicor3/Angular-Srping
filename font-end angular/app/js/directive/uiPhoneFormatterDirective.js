angular.module("clienteCrud").directive("uiPhone", function($filter){
    return {
        require: "ngModel",

        link: function(scope, element, attrs, ctrl) {
            var _phoneFormatter = function(phone){
                phone = phone.replace(/[^0-9]+/g, "");
                
                if (phone.length > 2) {
                    phone = "(" + phone.substring(0, 2) + ") " + phone.substring(2);
                }
                if (phone.length > 5 && phone.length == 14) {
                    phone = phone.substring(0, 10) + "-" + phone.substring(10, 14);
                } 
                if (phone.length > 5 && phone.length == 13) {
                    phone = phone.substring(0, 9) + "-" + phone.substring(9, 13);
                }

                return phone;
            }

            element.on("input", function(){
                ctrl.$setViewValue(_phoneFormatter(ctrl.$viewValue));
                ctrl.$render();
            });  
        }
    }
})