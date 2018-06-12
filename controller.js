pollsApp.controller('ClassController',function($scope,$log){

    
    $scope.classname=[{classsec:'VI-A'},{classsec:'VI-B'},{classsec:'VI-C'},{classsec:'VI-D'},{classsec:'VI-E'},{classsec:'VI-F'},{classsec:'VI-G'},
                      {classsec:'VII-A'},{classsec:'VII-B'},{classsec:'VII-C'},{classsec:'VII-D'},{classsec:'VII-E'},{classsec:'VII-F'},{classsec:'VII-G'},
                      {classsec:'VIII-A'},{classsec:'VIII-B'},{classsec:'VIII-C'},{classsec:'VIII-D'},{classsec:'VIII-E'},{classsec:'VIII-F'},{classsec:'VIII-G'},
                      {classsec:'IX-A'},{classsec:'IX-B'},{classsec:'IX-C'},{classsec:'IX-D'},{classsec:'IX-E'},{classsec:'IX-F'},{classsec:'IX-G'},{classsec:'IX-H'},
                      {classsec:'X-A'},{classsec:'X-B'},{classsec:'X-C'},{classsec:'X-D'},{classsec:'X-E'},{classsec:'X-F'},{classsec:'X-G'},{classsec:'X-H'},{classsec:'X-I'},];

    $scope.fetchclass = function(){

        $scope.select=$scope.classname;
    }

    $scope.setvalue= function(x){
        $log.info('class selected' + x.classsec);
        $scope.query1=x.classsec;
    }

    $scope.containerClicked=function(){
        $scope.searchresult={};
    }

    $scope.next=function(){
        window.location= 'views/voting.html';
    }

});

pollsApp.controller('votingcontroller',function($scope,$log){

    $scope.SPL=[{"type":"SPL","CLASS":"XI-A2","NAME":"A. RIZWANA FATHIMA"},{"type":"SPL","CLASS":"XI-A2","NAME":"B. SWATHI"},{"type":"SPL","CLASS":"XI-C3","NAME":"Y. MOETHIRA DEVI"}]
    $scope.ASPL1TM=[{"type":"SPL","CLASS":"IX-C","NAME":"A. NARMADHA"},{"type":"SPL","CLASS":"IX-B","NAME":"SHAGINDRA"}]
    $scope.ASPL1EM=[{"type":"SPL","CLASS":"IX-F","NAME":"S. RAMYA"},{"type":"SPL","CLASS":"IX-G","NAME":"S. BHUVANESHWARI"},{"type":"SPL","CLASS":"IX-H","NAME":"A. LAVANYA"}]
    $scope.ASPL2EM=[{"type":"SPL","CLASS":"VIII-E","NAME":"P. CINDRELLA"},{"type":"SPL","CLASS":"VIII-F","NAME":"K. TAMIL SELVI"},{"type":"SPL","CLASS":"VIII-G","NAME":"P. KAVIPRIYA"}]
    $scope.ASPL2TM=[{"type":"SPL","CLASS":"VIII-A","NAME":"V. SAVITHA SRI"},{"type":"SPL","CLASS":"VIII-B","NAME":"G. JABIRA MASRATH"},{"type":"SPL","CLASS":"VIII-C","NAME":"R. NIVETHA"},{"type":"SPL","CLASS":"VIII-D","NAME":"S. MONIKA"}]

    $scope.savevote=function(){
        if($scope.SPL&&$scope.ASPL1TM&&$scope.ASPL1EM&&$scope.ASPL2EM&&$scope.ASPL2TM){
            $scope.alert = { showAlert:true, alertClass: 'success,VoteSubmitted' };
        }
         else {
            $scope.alert = {showAlert:true, msg: 'Select something please!', alertClass: 'warning'};
        }
    }
})