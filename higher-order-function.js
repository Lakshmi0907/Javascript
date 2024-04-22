var radius = [ 1,2,3,4];
function area(radius) {
  return Math.PI * radius * radius;
}
function diameter(radius) {
  return radius * 2;
}
function circuference(radius) {
  return 2 * Math.PI * radius;
}

const output = function(radius, logic)
{
  result = [];
  for(var i = 0;i<radius.length; i++)
  {
    result.push(logic(radius[i]));
  }
  return result;
}

console.log(output(radius, area));
console.log(output(radius, circuference));
console.log(output(radius, diameter));



