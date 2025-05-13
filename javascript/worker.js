onmessage=(e)=>{
    
    setTimeout(() => {
        for (let i = 0; i <= e.data; i++) {
        postMessage(i)
    }
    }, 1000);
    
    
}