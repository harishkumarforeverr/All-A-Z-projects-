var module = angular.module("myapp", []);   
module.controller("myCtr",myCtrFunction); 
function myCtrFunction(){
    this.togglebtn=false;
    this.todos=[
        "coding","sleeping","re-coding","typeScript"
    ]
    this.addNewTodoToArrayList=function(){
        if(this.newTodo){ 
            this.todos.push(this.newTodo);
            this.newTodo="";
        }
    }
    this.deleteTodoInArrayList=function(index){
     this.todos.splice(index,1);
    }
    this.editTodoInArrayList=function(){
        this.togglebtn=true;
    }
    this.SaveModifyedTodoInArrayList=function(){
        this.togglebtn=false;
    }

}