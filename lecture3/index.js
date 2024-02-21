//In-build Object

// 1)Math 
console.log(Math.random());  // create random number from 0 to 1
console.log(Math.round(1.6)); // return a round figure of a number 
console.log(Math.min(4,66)); // return minimum value from a given set of numbers
console.log(Math.max(34,5)); // return maximun value from given set of numbers 
console.log(Math.abs(2.6)); // return the absolute value 

// 2)String
/* There are mainly two types of strings 
   a) primitive string  b) Object String 
*/
  
let lastName='Babbar'; //  typeof will return string

let firstName= new String('Love'); //  typeof will return Object

// using ( . )dot notation we can convert premitive to object string 
console.log(lastName.length);
console.log(lastName[0]);
console.log(lastName.includes('Ba'));
console.log(lastName.startsWith('Babb'));
console.log(lastName.endsWith('ar'));
console.log(lastName.toUpperCase());
console.log(lastName.trim());
console.log(lastName.replace('Babb','Car'));

//Spliting
 let message='This is my first message';
 let words=message.split(' ');
 console.log(words);

 //template literal
 let msg=`this is a  
message`;  // this will print the msg as it is in the console (backtick `)
console.log(msg);

//date object
let date=new Date();
// let date2=new Data('April  16 2003 07:15');
let date3=new Date(1998, 1, 20, 7);
date3.setFullYear(1947);

console.log(date3);

// ARRAYS

//create an array
let numbers=[1,4,5,7];
console.log(numbers);
console.log(numbers[2]);

//Insertion in array:-

//-->end
numbers.push(9);
//-->begin
numbers.unshift(8);
//-->middle
// numbers.splice(2,0,'a','b');

console.log(numbers);

//Searching in array:-
/*this is for premitives */
console.log(numbers);
console.log(numbers.indexOf(9));

//we want to check if number exist in an arrray
if(numbers.indexOf(7) != -1){
    console.log("Present");
} 

//best practice
console.log(numbers.includes(3));

/*Searching for obhect */

let courses=[
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];
console.log(courses);
// console.log(indexOf( {no:1, naam:'Love'})); show error it is as object 

let course=courses.find(function(course){
     return course.naam==='Love';
});
console.log(course); 
//Arrow Function
let crs=courses.find(crs => crs.naam === 'Rahul');
console.log(crs);

//removing from array
console.log(numbers);
//-->End
numbers.pop();
//-->Brgining
numbers.shift();
//->
numbers.splice(2,1);
console.log(numbers);

// Emptying an array

let marks=[2,5,6,4,6];
console.log(marks);
let marks2=marks;  
marks=[];
console.log(marks);
console.log(marks2);
//best practice
marks.length=0;
marks.splice(0,numbers.length);
console.log(marks2); 


//combining and slicing arrays:-
let first=[1,2,3];
let last=[4,5,6];
let combined=first.concat(last);
console.log(combined); //combining

let sliced=combined.slice(2,4);
console.log(sliced);
//using spread
let combo=[...first,...last,true,false];
console.log(combo);

//Iterating in array


let arr=[10,20,30,40,50];
//using for of loop
for(let value of arr){ 
    console.log(value); 

}
//using for each loop
arr.forEach(number=>console.log(number));
arr.forEach(function(number){
    console.log(number);
})

//Joining arrays
let num=[10,11,12,13,14];
const joined=num.join(',');
console.log(joined);

//Split 
let messg='This is my firat msg';
let parts=messg.split(' ');
console.log(parts); //create an array 
 

//sort method
let srt=[40,30,10,20];
srt.sort();
console.log(srt);
srt.reverse();
console.log(srt);

//filter array
let fltr=[2,4,-4,5,-1];
let sq=fltr.filter(value=>value>=0);
    console.log(sq);


//mapping arrays
let ar=[2,4,5];
let s=ar.map(function(val){
    return val*val;
})
let sqr=ar.map(val=>val*val);
console.log(sqr);