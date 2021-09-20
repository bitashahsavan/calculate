function data(val){
     calc.display.value += val;
}
function AC(){
    calc.display.value="";
}
function C(){
    /*بااستفاده ازاین قظعه کد مامیتوانیم هرباریک کارکترراحدف کنیم
    که اینکاررابااستفاده ازsliceانجام میدهیم// */
    calc.display.value=calc.display.value.slice(0,-1);
}
function equal(){
    calc.display.value=eval(calc.display.value);
}