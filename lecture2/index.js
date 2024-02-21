console.log('Chaliye shuru karte hai');
//Object
const rectangle={
    length :1,
    breadth:2,
    //function -{If function is used inside object then it is called as method}

    draw:function(){ 
        console.log('draw');
    }
}

//Factory function
function createSquare(){
     return square={
        side:2,
        
        draw(){
            console.log('Square drawn');
        }
     }
}
let rectangleObj1=createSquare(); 
rectangleObj1.color='Yellow';
console.log(rectangleObj1);
delete rectangleObj1.color;
console.log(rectangleObj1);
//give the values asinput while calling the function
function createRoom(len,bre) {
    return rooms={
        length:len,
        breadth:bre,
        draw(){
            console.log('room drawn');
        }
    }
}
let hall=createRoom(5,4);

//constructor function--> Pascal Notation -->First letter of every word is capital ->NumberofStar
function Rect(){
    this.length=1,
    this.breadth=2,
    this.draw=function(){
        console.log('drawing');
    }
}
let rrr=new Rect();


//types in javascript
//primitive-->copy banti hai 
let a=10;
let b=a;
a++;
console.log(a); //print --> 11
console.log(b);//print --> 10

let ritesh=21;
function inc(ritesh){ //passed primitive valus so it will create a copy 
    ritesh++;
}
inc(ritesh);
console.log(ritesh);
//Reference-->Same address pointed
let r={value :10}
let s=r;//address passed
r.value++;
console.log(r.value);
console.log(s.value);
let sam={value:21};
function inc(sam){ //passed reference valus so it will point to the address 
    sam++;
}
inc(sam);
console.log(sam);


//for-in loop  -->only for iterables
for(let key in rectangle){
    console.log(key);
    console.log(key,rectangle[key]);
}

//for-of loop
for(let key of Object.keys(rectangle)){ // for keys 
    console.log(key);
}
for(let key of Object.entries(rectangle)){//for key with values
    console.log(key);
}

//Q.How to check whether rpoperties are present or not
if('length' in rectangle){
    console.log('Present');
} 
else{
    console.log("Absent");
}

//object cloning

//Iteration:-
let src={value:10};
let des={};
for(let key in src){
    des[key]=src[key];
}
console.log(des);
//assigned:-
let duplicate=Object.assign({},{rectangle});
console.log(duplicate);
//spread:-
let dup={...rectangle};
console.log(dup);

let human={
    weight:10,
    height:112,
    photo:function(){
        console.log('this is my photo');
    }
}
//factory function
function createHuman(wei,hig){
    return  human={
        weight:wei,
        height:hig,
        photo:function(){
            console.log('this is my photo');
        }
    }
}
let human1=createHuman(100,115);

//constructior function'
function Human(){
    this.wight=1,
    this.height=2,
    this.photo=function(){
        console.log('this is my photo');
    }
}
let humanobj1=new Human();