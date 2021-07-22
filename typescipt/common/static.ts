class StaticMem{
    static num:number;
    static disp():void{
        console.log("num值为"+StaticMem.num)
    }
}
StaticMem.num=12
StaticMem.disp()