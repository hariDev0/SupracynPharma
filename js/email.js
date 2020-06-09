var mainApp = angular.module("mainApp", []);
         
mainApp.controller('email', function($scope) {

    $scope.submit = function(){
        // $scope.submit

        if($scope.name !== undefined && $scope.email !== undefined && $scope.phone !== undefined &&  $scope.message !== undefined){
            
            var string = 'hi,\n <h5> My name is '+$scope.name+' \n 1)number :: '+$scope.phone +'\n 2) email :: '+$scope.email+'\n 3) address :: '+$scope.address+'\n 4) message :: '+$scope.message+'</h5>';


            Email.send({
                // SecureToken : "55a8e7de-e8a3-496f-8645-e9b237814deb",
                Host : "smtp.elasticemail.com",
                Username : "infosupracynpharma@gmail.com",
                Password : "E7231CE25EF5606059D40FFD019A60B33070",
                To : 'supracynpharma@gmail.com',
                From : "infosupracynpharma@gmail.com",
                Subject : "This is supracynpharma",
                Body : string,
                //  SSL : "True",
                // Domain : "gmail.com",
                // Port : 25
                }).then(function(response) {
                   alert("Email sent");
                }, function(error) {
                   console.log('FAILED...', error);
                });


        }else if($scope.name === undefined){
            alert("Fill Your Name");
        }else if($scope.email === undefined){
            alert("Fill Your Email");
        }else if($scope.phone === undefined){
            alert("Fill Your Phone");
        }else if($scope.message === undefined){
            alert("Fill Your Message");
        }
        // $scope.name;
        // $scope.email;
        // $scope.phone;
        // $scope.address;
        // $scope.message;
    }

});