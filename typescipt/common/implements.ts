interface ILoan{
    interest:number
}
class Agriloan implements ILoan{
    interest:number
    rebate:number
    constructor(interest:number,rebate:number){
        this.interest = interest
        this.rebate = rebate 
    }
}
var obj4 = new Agriloan(10,1)
console.log("利润为:"+obj4.interest+",抽象为："+obj4.rebate)