function getinputvalue() {
    var inputvalue = document.querySelector("#inputvalue").value;  
    var randomValue=document.querySelector("#randomValue").value;
    var noOfAttempts=document.querySelector("#attempts").value;
    if(!noOfAttempts){ 
       noOfAttempts=Number(noOfAttempts);
        noOfAttempts=0;    
    }
    if(!randomValue){
        randomValue=generate4digitNorandomly();
        document.querySelector("#randomValue").value=randomValue; 
    } 
    
    var errormsg = document.querySelector("#errormsg"); 
    var toperrormsgid = document.querySelector("#toperrormsgid");  
    toperrormsgid.innerHTML="";
    if(!errormsg){ 
        errormsg.innerHTML=""; 
    }
   if(!validationOfNo(inputvalue)){
    toperrormsgid.innerHTML="<p class='text-danger' > invalid entery , enter 4 digit value <\p> ";
   }  
   else{ 
    noOfAttempts=Number(noOfAttempts);
    noOfAttempts=Number(noOfAttempts);
    noOfAttempts=noOfAttempts+1;
    document.querySelector("#attempts").value=noOfAttempts; 
    inputvalue=String(inputvalue);
    checkForcorrectenter(inputvalue); 
   }
} 

function generate4digitNorandomly(){
     return (Math.floor((Math.random()*7891)+1234)).toString();
 }
//  html+='<li class="fa fa-check text-success"></li>';
//  html+='<li class="fa fa-exchange text-warning"></li>';
//  html+='<li class="fa fa-times text-danger"></li>';

 function checkForcorrectenter(inputvalue){
     var correctattenpts=0;
     var noOfAttempts=document.querySelector("#attempts").value; 
    noOfAttempts=Number(noOfAttempts);
    var randomValue=document.querySelector("#randomValue").value;   
     var html="<tr><td> <b> UserInput  :  </b> <//td><td> "; 
       for(var i=0;i<inputvalue.length;i++){
        if(inputvalue[i]==randomValue[i]){
         html+="<li class='fas fa-check text-success' > </li>&nbsp" ;
         correctattenpts=correctattenpts+1;
        }
        else if(randomValue.indexOf(inputvalue[i])>-1){
            html+="<li class='fas fa-exchange-alt text-warning' > </li>&nbsp"; 
        }
        else{
            html+="<li class='fas fa-times text-danger' > </li>&nbsp"; 
        }
    }
    
    html+="</td></tr><br/>";
    errormsg.innerHTML=errormsg.innerHTML+html;
    var toperrormsgid = document.querySelector("#toperrormsgid");   
    if(correctattenpts==inputvalue.length){
      toperrormsgid.innerHTML="<p class='text-success'> your winner, play again </p>"; 
      var btn2=document.querySelector("#btn2").style="display:none";
      var btn3=document.querySelector("#btn3").style="display:none";
      var btn1=document.querySelector("#btn1").style="display:block";
      document.querySelector("#top").style="display:none";
    }
    else if(noOfAttempts>9){
        toperrormsgid.innerHTML="<p class='text-danger'> you lost the game, do you want to, play again </p>"; 
         btn2=document.querySelector("#btn2").style="display:none";
         btn3=document.querySelector("#btn3").style="display:none";
         btn1=document.querySelector("#btn1").style="display:block";
    }
    else{
        toperrormsgid.innerHTML="<p class='text-warning'> Invalid guess, ty agian </p>"; 
    }

    helpme(); 
 } 
function helpme(){
    var noOfAttempts=Number(document.querySelector("#attempts").value); 
    if(noOfAttempts>0){
        console.log(noOfAttempts);
    var helpme=document.querySelector("#helpme");
    helpme.innerHTML=document.querySelector("#randomValue").value;
    helpme.style="display: none";  
    document.querySelector("#myhelpingbutton").style="display:block";  
    }
}

function displayTheText(){
    var helpme=document.querySelector("#helpme");
    helpme.style="display:block";     
}
 function validationOfNo(inputvalue){
    return inputvalue.length==4;
}