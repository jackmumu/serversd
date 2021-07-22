var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str3 = "world";
    }
    Encapsulate.prototype.say = function () {
        console.log(this.str3);
    };
    return Encapsulate;
}());
var obj3 = new Encapsulate();
console.log(obj3.str);
obj3.say();
var aa = "haha";
