checking_price=prompt('enter your age :')
if (checking_price<=12){
    console.log('you are under age so you will pay $5')
} else if(checking_price>=13 && checking_price<=59){
    console.log('you are adult so you will pay $10')
} else{
    console.log('you are senior so you will pay $7')
}
