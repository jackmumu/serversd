var Agriloan = /** @class */ (function () {
    function Agriloan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return Agriloan;
}());
var obj4 = new Agriloan(10, 1);
console.log("利润为:" + obj4.interest + ",抽象为：" + obj4.rebate);
