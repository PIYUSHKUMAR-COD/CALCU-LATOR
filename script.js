const input=document.querySelector(".input");
const result=document.querySelector(".result");
const button=document.querySelectorAll("button");
let cross=document.querySelector(".cross");
let expression="";
const operators=["+","-","*","/","."];
cross.addEventListener("click",()=>{
   if(expression.length>0){
    expression=expression.slice(0,-1);
   }
   input.innerText=expression||"0";
   try{
    result.innerText=eval(expression);
   }catch{
    result.innerText="";
   }
   if(expression===""){
    input.innerText="0";
    result.innerText="0";
   }else{
         input.innerText=expression;
        try{
    result.innerText=eval(expression);
   }catch{
    result.innerText=""; 
   }};
});
button.forEach((button)=>{
    button.addEventListener("click",()=>{
let value=button.innerText;
if(value!="="&&
    value!="C"&&
    value!="%"&&
    !button.classList.contains("cross")
){
    if(operators.includes(value)&&
operators.includes(expression.slice(-1))){
    return;
}
    expression+=value;
    input.innerText=expression;
}
 else if(value==="C"){
    expression="";
    input.innerText="0";
    result.innerText="0";
}
else if (value==="%"){
    expression=(Number(expression)/100).toString();
    input.innerText=expression;
}
else if (value==="="){
    let answer=eval(expression);
    result.innerText=answer;
}

    });
});