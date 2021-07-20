var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num值为" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
