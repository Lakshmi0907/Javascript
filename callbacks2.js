function x( y)
{
  return y();
}
function y()
  {
    console.log("function y executed");
    return 'retuned from function y';
  }
  console.log(x(y));
  console.log('end');
