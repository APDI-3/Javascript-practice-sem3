price=[10,20,30,40]
newprice=price.map(p=>{
    total=p*0.15
    return total+p
})
console.log(newprice)
