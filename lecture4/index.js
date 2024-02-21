console.log('hello ');
/*  FUNCTIONS:-
   A blok of code than complete specific task 
   Syntax:- function function_name(){
    //body
   } 
   ->Increases reusability
   ->Function is a subprogram which linked to specific task
*/
function run(){
    console.log('Running');
}
run(); //Invoke (call the function)

//Function assignment
let stand=function walk(){
    console.log('walking');
}
stand();//give output
// walk(); //give error

//anonymus function assignment
let walk2=function(){
    console.log('walking');
}
walk2();

//Arguments:-

function add(a,b){
    let sum=0;
    for(let i of arguments)
        sum=sum+i;
    return sum;
} 
console.log(add(1,2,3,4,5,6,7,8));

//rest operators

function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5,6);

//default parameters
function intrest(p,r=6,y=9){
    return p*r*y/100;
}
console.log(intrest(1000,undefined,8));

/* Getter and setter

 getter -> access properties
 setter -> change or mutate proprties
*/ 

let person={
    fName : 'Love',
    lName : 'Babbar',
    get fulname(){ //this is getter
        return `${person.fName} ${person.lName}`;
    },
    set fulname(value){
        // if(typeof value !== String){
        //     throw new Error("You have not sent a string");
        // }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
};
// function fullName(){ //issue -> read only
//     return `${person.fName}  ${person.lName}`;
// }
// console.log(fullName()); 


person.fulname='rahul kumar';
console.log(person.fulname);

//try and catch -->error handling 

// try{
//     person.fulname=true;
// }
// catch(e){
//     alert(e);
// }



let arr=[1,2,3,4];
let total=0
for(let value of arr){
    total =total +value;
}
console.log(total);

let totsum=arr.reduce((accumulator ,currentValue)=> accumulator +currentValue,0);
console.log("Printing total sum :")
console.log(totsum);