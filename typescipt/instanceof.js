var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj2 = new Person();
var isPerson = obj2 instanceof Person;
console.log("obj对象时Person类实例化来的吗？" + isPerson);
