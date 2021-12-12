let num=prompt("enter a number:");
function show(){
  for(let i=2;i<num;i++){
      if(num%i==0){
          alert("IS NOT PRIME")
      }
      else{alert("IS PRIME")}
  }
}
show();