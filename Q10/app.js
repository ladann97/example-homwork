let num=prompt("enter  number plz!");
let char=prompt("enter a char plz:");
let result=1;
function show(){
   
    switch(char){
        case 'P':
        case 'p':
        result=num**num;
        console.log(result);
        break;
        case 'G':
        case 'g':
             for(let i=1;num>=i;i++){ 
                result*=i;
            }
            console.log(result);
            break;
        case 'C':
        case 'c':
            for(let i=2;i<num;i++){
                if(num%i==0){
                    console.log("NOT PRIME");
                }
                else{console.log("PRIME")}
            }
            break;
        case 'Q':
        case 'q':console.log("az barname kharej shodid!!!")
         break;


    }
}


show();