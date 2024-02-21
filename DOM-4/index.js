// setTimeout(function(){  // this is asynchronous code
//     console.log('third');
// })
function sync(){
    console.log('first');
}
sync();
console.log('second');

//promises in js:-

let meraPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am inside promise');
    },5000);
    resolve(1998);
    reject(new Error('error aa gaya hai'));   
});
console.log('pehla');
meraPromise.then((value)=>{console.log(value)});
meraPromise.catch((error)=>{console.log("Received an error")});


let wada1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('settimeout1 started');
    },2000);
    resolve(true);
})

let output=wada1.then(()=>{
    let wada2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('settimeout2 started');
        },3000);
        resolve('wada 2 resolved');
    })
    return wada2;
})
output.then((value)=>console.log(value));


async function utility(){

    let delhiMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("delhi me bohot garmi hai");
        },10000);
    })
    let hayMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Hydrabad me bohot garmi hai");
     },20000);
    })
    let dm= await delhiMausam;
    let hm= await hayMausam;
    return [dm,hm];
}


let context=fetch('https://jsonplaceholder.typicode.com/todos/1');