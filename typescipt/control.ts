class Encapsulate{
    str:string="hello"
    private str3:string ="world"
    say():void{
        console.log(this.str3);
    }
}
var obj3 = new Encapsulate()
console.log(obj3.str)
obj3.say();