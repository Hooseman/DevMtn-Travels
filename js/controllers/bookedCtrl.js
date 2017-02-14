angular.module('devmtnTravel').controller('bookedCtrl',function($scope,$stateParams,mainSrv){
  var array = mainSrv.travelInfo;

  for (var i = 0; i < array.length; i++) {
    for (var key in array[i]) {
      if ($stateParams.id == array[i][key]) {
        $scope.background = {
          "background-image": "url(" + array[i].image +")",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        };
        $scope.city = array[i].city;
      }
    }
  }



})
