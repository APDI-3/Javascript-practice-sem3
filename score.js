score=prompt('enter a letter between a-f')
switch (score){
    case 'a':
        console.log('you get 100-90 marks')
        break
    case 'b':
        console.log('you get 90-80 marks')
        break
    case 'c':
        console.log('you get 80-90 marks')
        break
    case 'd':
        console.log('you get 80-70 marks ')
        break
    case 'f' :
        console.log('you failed '+"please do it again and never give up the world is yours")
        break
    default:
        console.log('invalid data try again')
}