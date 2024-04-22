        function x(y) {
  console.log("Inside function x");
  y();
}

function y() {
  console.log("Inside function y");
}

x(y);
console.log('end');