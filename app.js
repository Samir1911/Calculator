var Exp=document.querySelector("#txt");
var btns=document.querySelectorAll(".btn");
var b=document.querySelector("body");
var inp=document.querySelector("#input");
var rd=document.querySelectorAll(".Rd");
var eq=document.querySelector("#equal");
var h=document.querySelector("#head");
var result;
Exp.value="";
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        if(btn.value=="DEL"){
            noStandard();
            Exp.value=Exp.value.substring(0,Exp.value.length-1);
            standard();
        }
        else if(btn.value=="RESET"){
            Exp.value="";
        }
        else if(btn.value=="x"){
            noStandard();
            Exp.value+="*";
        }
        else if(btn.value=="="){
            noStandard();
            Exp.value=eval(Exp.value);
            standard();
        }
        else{
            noStandard();
            Exp.value+=btn.value;
        }

    })
})
function standard(){
    let s="";
    let ar=Exp.value.split(".");
    Exp.value=ar[0];
    let l=Exp.value.length;
    for(i=0;i<l;i++){
        s+=Exp.value[l-1-i];
    }
    Exp.value="";
    for(i=0;i<l;i++){
        if(i%3==0 && i!=0){
            Exp.value+=","+s[i];
        }
        else{
            Exp.value+=s[i];
        }
    }
    l=Exp.value.length;s="";
    for(i=0;i<l;i++){
        s+=Exp.value[l-i-1];
    }
    Exp.value=s;
    if(ar[1]){
        Exp.value+="."+ar[1];
    }
}
function noStandard(){
    let arr=Exp.value.split(",");
    Exp.value="";
    for(i=0;i<arr.length;i++){
        Exp.value+=arr[i];
    }
    
}
var radio=document.querySelectorAll(".Rbtn");
radio.forEach(rbtn=>{
    rbtn.addEventListener("click",function(){
        if(rbtn.value=="1"){
            b.style.background="hsl(222, 26%, 31%)";
            inp.style.background="hsl(223, 31%, 20%)";
            rbtn.parentElement.style.background="white";
            txt.style.background=" hsl(223, 31%, 20%)";
            Exp.style.color="white";
            btns.forEach(btn=>{
                btn.style.background="hsl(30, 25%, 89%)";
                btn.style.color="hsl(221, 14%, 31%)";
                btn.style.boxShadow="0 5px 1px hsl(28, 16%, 65%)"
            }) 
            rd.forEach(rds=>{
            rds.style.background="hsl(225, 21%, 49%)";
            rds.style.color="white";
            rds.style.boxShadow="0 5px 1px hsl(224, 28%, 35%)"
            })
            eq.style.background="hsl(6, 63%, 50%)";
            eq.style.color="white"; 
            eq.style.boxShadow="0 5px 1px hsl(6, 70%, 34%)" 
            h.style.color="white";
        }

        if(rbtn.value=="2"){
            b.style.background="hsl(0, 0%, 90%)";
            inp.style.background=" hsl(0, 5%, 81%)";
            rbtn.parentElement.style.background="hsl(0, 5%, 81%)";
            Exp.style.background=" hsl(0, 0%, 93%)";
            Exp.style.color="hsl(60, 10%, 19%)";
            btns.forEach(btn=>{
                btn.style.background="hsl(45, 7%, 89%)";
                btn.style.color="hsl(60, 10%, 19%)";
                btn.style.boxShadow="0 5px 1px hsl(28, 16%, 65%)";
            }) 
            rd.forEach(rds=>{
            rds.style.background="hsl(185, 42%, 37%)";
            rds.style.color="white";
            rds.style.boxShadow="hsl(224, 28%, 35%) 0 5px 1px";
            })
            eq.style.background="hsl(25, 98%, 40%)";
            eq.style.color="white";  
            eq.style.boxShadow=" 0 5px 1px hsl(6, 70%, 34%)";
            h.style.color="black";
        }
        
        if(rbtn.value=="3"){
            b.style.background="hsl(268, 75%, 9%)";
            inp.style.background="hsl(268, 71%, 12%)";
            rbtn.parentElement.style.background="hsl(268, 71%, 12%)";
            Exp.style.background="hsl(268, 71%, 12%)";
            Exp.style.color="hsl(52, 100%, 62%)";
            btns.forEach(btn=>{
                btn.style.background="hsl(281, 89%, 26%)";
                btn.style.color="hsl(52, 100%, 62%)";
                btn.style.boxShadow="0 5px 1px hsl(285, 91%, 52%)";
            }) 
            rd.forEach(rds=>{
            rds.style.background="hsl(268, 47%, 21%)";
            rds.style.color="white";
            rds.style.boxShadow="0 5px 1px hsl(290, 70%, 36%)";
            })
            eq.style.background="hsl(176, 100%, 44%)";
            eq.style.color="hsl(198, 20%, 13%)";  
            eq.style.boxShadow=" 0 5px 1px hsl(177, 92%, 70%)";
            h.style.color="hsl(52, 100%, 62%)";
        }
    })
    
})