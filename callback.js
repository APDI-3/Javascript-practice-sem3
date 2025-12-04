cleanRoom=(callback)=>{
console.log('room cleaned ')
    callback()
}

sanitizeroom=()=>console.log('room sanitized')
cleanRoom(sanitizeroom)

