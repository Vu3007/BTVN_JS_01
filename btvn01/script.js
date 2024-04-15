
//Bai1
function calculateFactorial(num){
   
    let result=1;
    for(let i=1;i<=num;i++){
        result=result*i;
    }
    console.log(result);
}
calculateFactorial(7);
//Bai2
function reverseString(str){
    let reversed = ""
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    console.log(reversed)

}
reverseString("hello")
//Bai3
let id=3;
switch(id){
    case 0:{
        console.log("xin chao");
        break;
    }
    case 1:{
        console.log("hello");
        break;
    }
    case 2:{
        console.log("hi");
        break;
    }
    default: {
        console.log("Null");
        break;
    }
}