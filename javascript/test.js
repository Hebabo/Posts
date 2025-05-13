//Worker
let counter=document.querySelector(".count");
let w;
function start() {
    
    if(window.Worker != undefined){
        w= new Worker("javascript/worker.js");
        w.postMessage(100000)
        w.onmessage=(e)=>{
            counter.innerHTML=e.data;
        }
        
    }else{
        console.log("no worker")
    }
}
function stop() {
    w.terminate();
}
