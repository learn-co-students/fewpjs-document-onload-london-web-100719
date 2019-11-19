document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateDOM();
  });

function updateDOM(){
  let text = document.querySelector("#text");
  text.textContent = 'This is really cool!';
}