console.log('before the mistake is corrected')
console.log('\n')
phone=200
headphones=800
console.log('the price of the phone is $'+phone + " and the price of the headphones is $"+headphones)
console.log('\n')
temp=phone
phone=headphones
headphones=temp
console.log('after it has been corrected')
console.log('\n')
console.log('type error the real price of the phone is $' +phone)
console.log('and the real price of the headphones is $'+headphones)
total=phone+headphones

if (total >1000){
    console.log('you get %20 discount')
    discount=0.2*total
    final_amount=total-discount
    console.log('and that means you will pay '+'$'+final_amount)
    
}
     else if (total >500 && total<=1000){
        console.log('you get %10 discount')
        discount1=0.1*total
        last_amount=total-discount1
        console.log('and that means you will pay $'+last_amount)
}
else(
    console.log('you will pay'+total)
)
