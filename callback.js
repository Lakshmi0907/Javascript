setTimeout(function x(){console.log('timer')});
function x(y)
{
  console.log('fucntion x oiutput');
  y();
}
x(function y(){
  console.log('fucntion y');
})