processPayment=(callback)=>{
    console.log('process starts')
    callback()
    
}
processPayment(()=>console.log("payment success"))
