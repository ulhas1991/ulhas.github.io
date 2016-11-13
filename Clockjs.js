var data=angular.module("myClock",[]);
data.controller("Clock",clockFun);

function clockFun(){
	this.result=0;
	this.operationSelect=function(button){
		this.selectedOperation=button;
	}
	this.computeFunction=function(){
		var a=parseFloat(this.firstNumber);
		var b=parseFloat(this.secondNumber);
		if(this.selectedOperation ==='+'){
			this.result=a+b;
		}
		else if(this.selectedOperation ==='-'){
			this.result=a-b;
		}
		else if(this.selectedOperation ==='*'){
			this.result=a*b;
		}
		else if(this.selectedOperation ==='/'){
			this.result=a/b;
		}
	}
}