/*
MonitorEvents(document):-
unmonitorEvents(document):-
*/
 document.addEventListener('click',function(){
    console.log('I clicked on the page');
 });

 let content=document.querySelector('h2');
 content.addEventListener('click',function(){
    content.style.background='green';
 });

 //remove an eventListner
 function eventFunction(){
    console.log('clicked');
 }
 document.addEventListener('click',eventFunction);//added
 document.removeEventListener('click',eventFunction); //removed


 //event object give all information about event
 const cont=document.querySelector('#wrapper');
 cont.addEventListener('click',function(event){
    console.log(event);
 });

 //default action 
 let links=document.querySelectorAll('a');
 let thirdLink=links[1];
 thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Maza aaya');
 });

 //default action:-
 let mydiv=document.createElement('div');
 function paraStatus(event){
    console.log('I have clicked on para');
 }
 mydiv.addEventListener('click',paraStatus);
 for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para'+i;
    mydiv.appendChild(newElement);

 }
 document.body.appendChild(mydiv);

 