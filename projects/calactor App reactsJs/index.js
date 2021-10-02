var module = angular.module("myapp", []);
module.controller("myCtr1", myfun1);
function myfun1() {
    this.exp1 = "";
    this.exp2 = "";
    this.boolean = false;
    this.operator = "";
    this.total = undefined;
    this.buttonIsClicked = function (val) {
        if (this.boolean) {
            this.exp2 += val;
            console.log("harish is end exp ");
        }
        else {
            this.exp1 += val;
            console.log("harish is 1st exp ");
        }
    }
    this.OperatedbuttonIsClicked = function (op1) {
        this.operator = op1;
        this.boolean = true;
    }
    this.finalButtonClciked = function () {
        var v1 = parseFloat(this.exp1);
        var v2 = parseFloat(this.exp2);
        if (this.operator == "+") {
            this.total = v1 + v2;
        }
        else if (this.operator == "-") {
            this.total = v1 - v2;
        }
        else if (this.operator == "/") {
            this.total = v1 / v2;
        }
        else if (this.operator == "*") {
            this.total = v1 * v2;
        }
        else if (this.operator == "%") {
            this.total = v1 % v2;
        }
        else {
            this.total = "Invalid , try agian";
        } 
    }
    this.refreshButtonClicked=function(){
        this.exp1 = "";
        this.exp2 = "";
        this.boolean = false;
        this.operator = "";
        this.total = undefined;
    }
   


}