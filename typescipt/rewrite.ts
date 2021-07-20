class PrinterClass{
    doPrint():void{
        console.log("父类的doPrint()方法")
    }
}
class StringPrinter extends PrinterClass{
    doPrint():void{
        super.doPrint()
        console.log("子类的doPrint()方法")
    }
}
var string1=new StringPrinter();
string1.doPrint();