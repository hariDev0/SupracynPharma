var mainApp = angular.module("mainApp", []);
         
mainApp.controller('productsController', function($scope) {


$scope.test = function(name){
  // console.log(name);
  localStorage.setItem("productName", name);
  
  window.location.href = "./productsgallery.html";

}


});