let char=0
function show(){
do{
    let char=prompt("enter a char");
    switch(char){
        case 'F':
        case 'f':prompt("Enter ur firstname")
        break;
        case 'I':
        case 'i':prompt("Enter ur lastname")
        break;
        case 'B':
        case 'b':prompt("Enter ur banck account")
        break;
        case 'S':
        case 's':console.log(``)
        break;
    }

}while(char!=0)

}
show();