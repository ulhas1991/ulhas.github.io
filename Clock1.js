var data=angular.module("MyApp",[]);
	data.controller("MyFun",MyFunction);
	
	function MyFunction($scope){
		var date=new Date();
		    $scope.date1=date.toTimeString();
		$scope.updateTime=function(){
			$scope.userName="";
			var name=document.getElementById("ulhas").value;
			console.log(name);
			var date=new Date();
		    $scope.date1=date.toTimeString();
		}
		
	}