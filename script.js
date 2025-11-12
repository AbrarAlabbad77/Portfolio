
function init (){


const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Change button icon + text
  // from stack overflow
  if (body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
    
  } else {
    toggleBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
  }
});



}
document.addEventListener('DOMContentLoaded', init)