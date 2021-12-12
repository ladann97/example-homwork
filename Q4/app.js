let num=prompt("Please Enter Positive Number");
function show(){

    if((num>=0)&&(50>=num)){
       console.log(1);
       return
    }
    else if((num>50)&&(100>=num)){
        console.log(2);
        return
    }
    else if((num>100)&&(200>=num)){
        console.log(3);
        return
    }
    else if(num>200){
        console.log(4);
        return
    }
}
show();