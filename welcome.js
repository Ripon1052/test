const enterButton = document.getElementById("enterbutton");
const backgroundMusic = document.getElementById("backgroundMusic");

// script.js
document.getElementById("explore-btn").addEventListener("click", function() {
    redirectToAnotherPage();
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      redirectToAnotherPage();
    }
  });
  
  function redirectToAnotherPage() {
    // Redirect the user to another page
    window.location.href = "crush.html";
  }
  
  