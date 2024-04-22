function fun1()
{
  var a=10;
  function fun2()
  {
    console.log("function 2");
    return "function 2";
  }
  return fun2();

}
var f1=fun1();
console.log(f1);