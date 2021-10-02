var module = angular.module("myapp", []);
module.controller("header", headfun);

module.service("myGithubApiSvc",function($http){
    this.mygitfun=function(){ 
     $http.get("http://localhost:7878/koushik").then(function(res){
        console.log(res.data);
    });
    }
})
function headfun(myGithubApiSvc){ 
    myGithubApiSvc.mygitfun();
}







