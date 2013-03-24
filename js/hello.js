// Refer to UI elements
var button = document.getElementById('button1');
var txtInput = document.getElementById('input1');
// Bind click event of the button with an event listener
button.addEventListener('click', function(){
var text = txtInput.value;
// Show alert box with this text
alert(text);
})