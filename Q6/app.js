let num=prompt("plz Enter a Number:");
let result=1;
function show(){
    if((num<0)&&(num!=Number)){
        return false;
    }
    for(let i=1;num>=i;i++){
         result*=i;
       }
          console.log(result);
      
}
 
   show();