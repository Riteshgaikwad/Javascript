//return a single object which have same id as given in the input
console.log(document.getElementById('heading'));
//return multiple objects having class name as given input
console.log(document.getElementsByClassName('sub'));
//return multiple objects
console.log(document.getElementsByTagName('h1'));

/*when you type ($0) in the console it return the most recently selected element or js object 
we can also equate it by variable
let para=$0;
para.className;
para.id;
etc...
*/


//selector in js similar to css selector (querySelector)
console.log(document.querySelector('#heading'));
console.log(document.querySelector('.sub'));
console.log(document.querySelector('h1'));
//for multiple seletor (querySelectorAll)
console.log(document.querySelectorAll('.sub'));

/* add new element or content:-
let content=document.querySelector('.heading') ->selected an object 
let newchild=document.createElement(); ->used to create an element
content.appendChild(newchild); ->add or append to an element  

we can also do this for text:-
let mypara=document.createElement('p');
mypara.textcontent='I am the text';
content.appendchild(mypara); -->added to lasts

*/
 

