function attachEventListners() {
  var i = 0;
  document.getElementById("ClickMe1").addEventListener("click", xyz);
  function xyz()
  {
    console.log('button 1 clicked');
  }
  document.getElementById("ClickMe2").addEventListener("click", abcd);
  function abcd()
  {
    console.log('button 2 clicked');
  }
}
attachEventListners()