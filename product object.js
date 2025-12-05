 product=function(productname,price,instock){
    this.productname=productname
    this.price=price
    this.instock=instock
}
product1=new product('laptop',1200,true)
product1.import='china'
console.log(product1)