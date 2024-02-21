//adding 100 para
const t1=performance.now();
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='this is para'+i;

    document.body.appendChild(newElement)
}
const t2=performance.now();
console.log('this took'+(t2-t1)+" ms");

//optimising a bit
const r1=performance.now();
let mydiv =document.createElement('div');
for(let i=1;i<=100;i++){
    let element=document.createElement('p');
    element.textContent='this is para'+i;
    mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
const r2=performance.now();
console.log('this took'+(r2-r1)+" ms");

/* reflow and repaint 
-> using fragment we get 1 reflow and 1 repaint 
let fragment=document.createDocumentFragment();
    for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='this is para'+i;

    fragment.appendChild(newElement)
}
document.body.appenfChild(fragment);
*/

function addPara(){
    let para=document.createElement('p');
    para.textContent='Js is single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para=document.createElement('p');
    para.textContent='kya hal chal';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();

document.addEventListener('click',function(){
    console.log('hello');
}) 