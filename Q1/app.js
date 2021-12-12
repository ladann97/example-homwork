let num1=prompt("Enter number 1");
let num2=prompt("Enter number 2");
let num3=prompt("Enter number 3");
    function show(){
    if((num1===num2)&&(num2===num3)&&(num1===num3)){
       console.log(true);
    }
    else{
      console.log(false);
    }
    }
    show();