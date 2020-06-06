var mainApp = angular.module("mainApp", []);
         
mainApp.controller('productsGalleryController', function($scope) {
//    $scope.student = {
//       firstName: "Mahesh",
//       lastName: "Parashar",
      
//       fullName: function() {
//          var studentObject;
//          studentObject = $scope.student;
//          return studentObject.firstName + " " + studentObject.lastName;
//       }
//    };
$scope.product ={};
$scope.product.productName = localStorage.getItem("productName");
console.log($scope.product.productName);

var json = {
	"Glimcyn-M": {
		"Name": "Glimcyn-M",
		"Units": "10 Units/pack",
    "Composition": "Glimepiride 1 MG + Metformin 500 MG",
    "p1":"./medicines/medicines/Diabetics/Glimcyn-M/Slide1_2.JPG",
    "p2":"./medicines/medicines/Diabetics/Glimcyn-M/Slide2_2.JPG",
    "p3":"./medicines/medicines/Diabetics/Glimcyn-M/Slide3_2.JPG",
    "p4":"./medicines/medicines/Diabetics/Glimcyn-M/Slide4_2.JPG"
  },
  "Glimcynmet 2":{
		"Name": "Glimcynmet 2",
		"Units": "10 Units/pack",
    "Composition": "Glimepiride 2 MG + Metformin 500 MG",
    "p1":"./medicines/medicines/Diabetics/glimcynmet 2mg/Slide1_2.JPG",
    "p2":"./medicines/medicines/Diabetics/glimcynmet 2mg/Slide2_2.JPG",
    "p3":"./medicines/medicines/Diabetics/glimcynmet 2mg/Slide3_2.JPG",
    "p4":"./medicines/medicines/Diabetics/glimcynmet 2mg/Slide4_2.JPG",
  },
  "Voglicyn 0.2":{
		"Name": "Voglicyn 0.2",
		"Units": "10 Units/pack",
    "Composition": "Glimepiride 2 MG + Metformin 500 MG",
    "p1":"./medicines/medicines/Diabetics/Voglicyn 0.2/Slide1_2.JPG",
    "p2":"./medicines/medicines/Diabetics/Voglicyn 0.2/Slide2_2.JPG",
    "p3":"./medicines/medicines/Diabetics/Voglicyn 0.2/Slide3_2.JPG",
    "p4":"./medicines/medicines/Diabetics/Voglicyn 0.2/Slide4_2.JPG",
  },
  "Voglicyn 0.3":{
		"Name": "Voglicyn 0.2",
		"Units": "10 Units/pack",
    "Composition": "Glimepiride 2 MG + Metformin 500 MG",
    "p1":"./medicines/medicines/Diabetics/voglicyn 0.3/Slide1_2.JPG",
    "p2":"./medicines/medicines/Diabetics/voglicyn 0.3/Slide2_2.JPG",
    "p3":"./medicines/medicines/Diabetics/voglicyn 0.3/Slide3_2.JPG",
    "p4":"./medicines/medicines/Diabetics/voglicyn 0.3/Slide4_2.JPG",
  },
  "Metcyn XL 25":{
		"Name": "Metcyn XL 25",
		"Units": "10 Units/pack",
    "Composition": "Metoprolol Succinate ER",
    "p1":"./medicines/medicines/cardiology/Metacyn 25/Slide1_2.JPG",
    "p2":"./medicines/medicines/cardiology/Metacyn 25/Slide2_2.JPG",
    "p3":"./medicines/medicines/cardiology/Metacyn 25/Slide3_2.JPG",
    "p4":"./medicines/medicines/cardiology/Metacyn 25/Slide4_2.JPG",
    "p5":"./medicines/medicines/cardiology/Metacyn 25/Slide5_2.JPG"
  },
  "Metcyn XL 50":{
		"Name": "Metcyn XL 50",
		"Units": "10 Units/pack",
    "Composition": "Metoprolol Succinate ER",
    "p1":"./medicines/medicines/cardiology/Metacyn 50/Slide1.JPG",
    "p2":"./medicines/medicines/cardiology/Metacyn 50/Slide2.JPG",
    "p3":"./medicines/medicines/cardiology/Metacyn 50/Slide3.JPG",
    "p4":"./medicines/medicines/cardiology/Metacyn 50/Slide4.JPG",
    "p5":"./medicines/medicines/cardiology/Metacyn 50/Slide5.JPG"
  },
  "Supratel 20":{
		"Name": "Supratel 20",
		"Units": "10 Units/pack",
    "Composition": "Telmisartan 20MG",
    "p1":"./medicines/medicines/cardiology/Supratel 20/Slide1_2.JPG",
    "p2":"./medicines/medicines/cardiology/Supratel 20/Slide2_2.JPG",
    "p3":"./medicines/medicines/cardiology/Supratel 20/Slide3_2.JPG",
    "p4":"./medicines/medicines/cardiology/Supratel 20/Slide4_2.JPG",
    "p5":"./medicines/medicines/cardiology/Supratel 20/Slide5_2.JPG"
  },
  "Supratel 40":{
		"Name": "Supratel 40",
		"Units": "10 Units/pack",
    "Composition": "Telmisartan 40MG",
    "p1":"./medicines/medicines/cardiology/Supratel 40/Slide1_2.JPG",
    "p2":"./medicines/medicines/cardiology/Supratel 40/Slide2_2.JPG",
    "p3":"./medicines/medicines/cardiology/Supratel 40/Slide3_2.JPG",
    "p4":"./medicines/medicines/cardiology/Supratel 40/Slide4_2.JPG",
    "p5":"./medicines/medicines/cardiology/Supratel 40/Slide5_2.JPG"
  },
  "Supratel H":{
		"Name": "Supratel H",
		"Units": "10 Units/pack",
    "Composition": "Telmisartan 40MG",
    "p1":"./medicines/medicines/cardiology/Supratel H/Slide1_2.JPG",
    "p2":"./medicines/medicines/cardiology/Supratel H/Slide2_2.JPG",
    "p3":"./medicines/medicines/cardiology/Supratel H/Slide3_2.JPG",
    "p4":"./medicines/medicines/cardiology/Supratel H/Slide4_2.JPG",
    "p5":"./medicines/medicines/cardiology/Supratel H/Slide5_2.JPG"
  },
  "Supratel AM":{
		"Name": "Supratel AM",
		"Units": "10 Units/pack",
    "Composition": "Telmisartan + Amlodipine",
    "p1":"./medicines/medicines/cardiology/Supratel AM/Slide1_2.JPG",
    "p2":"./medicines/medicines/cardiology/Supratel AM/Slide2_2.JPG",
    "p3":"./medicines/medicines/cardiology/Supratel AM/Slide3_2.JPG",
    "p4":"./medicines/medicines/cardiology/Supratel AM/Slide4_2.JPG",
    "p5":"./medicines/medicines/cardiology/Supratel AM/Slide5_2.JPG"
  },
  "Atorcyn 10":{
		"Name": "Atorcyn 10",
		"Units": "10 Units/pack",
    "Composition": "Atorvastatin 10 MG",
    "p1":"./medicines/medicines/Cholestrol/Atorcyn 10/Slide1_2.JPG",
    "p2":"./medicines/medicines/Cholestrol/Atorcyn 10/Slide2_2.JPG",
    "p3":"./medicines/medicines/Cholestrol/Atorcyn 10/Slide3_2.JPG",
    "p4":"./medicines/medicines/Cholestrol/Atorcyn 10/Slide4_2.JPG"
  },
  "Atorcyn 20":{
		"Name": "Atorcyn 20",
		"Units": "10 Units/pack",
    "Composition": "Atorvastatin 20 MG",
    "p1":"./medicines/medicines/Cholestrol/Atrocyn - 20/Slide1_2.JPG",
    "p2":"./medicines/medicines/Cholestrol/Atrocyn - 20/Slide2_2.JPG",
    "p3":"./medicines/medicines/Cholestrol/Atrocyn - 20/Slide3_2.JPG",
    "p4":"./medicines/medicines/Cholestrol/Atrocyn - 20/Slide4_2.JPG",
    "p5":"./medicines/medicines/Cholestrol/Atrocyn - 20/Slide5_2.JPG"
  },
  "Atorcyn 40":{
		"Name": "Atorcyn 40",
		"Units": "10 Units/pack",
    "Composition": "Atorvastatin 40 MG",
    "p1":"./medicines/medicines/Cholestrol/atorcyn 40/Slide1_2.JPG",
    "p2":"./medicines/medicines/Cholestrol/atorcyn 40/Slide2_2.JPG",
    "p3":"./medicines/medicines/Cholestrol/atorcyn 40/Slide3_2.JPG",
    "p4":"./medicines/medicines/Cholestrol/atorcyn 40/Slide4_2.JPG",
    "p5":"./medicines/medicines/Cholestrol/atorcyn 40/Slide5_2.JPG"
  }
  
}

$scope.select = function(pic){
  console.log(pic);
  $scope.pic = pic;
}

$scope.jsonType = JSON.parse(JSON.stringify(json));
// console.log($scope.jsonType[$scope.product.productName].p1);
$scope.pic1 = "";
$scope.pic2 = "";
$scope.pic3 = "";
$scope.pic4 = "";
$scope.pic5 = "";

if($scope.jsonType[$scope.product.productName].p1 !== undefined){
$scope.pic1 = $scope.jsonType[$scope.product.productName].p1;
$scope.pic = $scope.pic1; 
}

if($scope.jsonType[$scope.product.productName].p2 !== undefined)
$scope.pic2 = $scope.jsonType[$scope.product.productName].p2;

if($scope.jsonType[$scope.product.productName].p3 !== undefined)
$scope.pic3 = $scope.jsonType[$scope.product.productName].p3;

if($scope.jsonType[$scope.product.productName].p4 !== undefined)
$scope.pic4 = $scope.jsonType[$scope.product.productName].p4;

if($scope.jsonType[$scope.product.productName].p5 !== undefined)
$scope.pic5 = $scope.jsonType[$scope.product.productName].p5;




// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//       if (rawFile.readyState === 4 && rawFile.status == "200") {
//           callback(rawFile.responseText);
//       }
//   }
//   rawFile.send(null);
// }

// readTextFile("./json/productGallery.json", function(text){
//   var data = JSON.parse(text);
//   console.log(data);
// });

});