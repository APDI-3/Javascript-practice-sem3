class shop{
    constructor(itemname,price,category){
        this.itemname=itemname
        this.price=price
        this.category=category
    }
    
}
item1=new shop('milk','$2','food')
item1.quantity='30'
item1['discount-percentage']=10
console.log(item1);
