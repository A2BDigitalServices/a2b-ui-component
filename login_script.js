/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

// let form = document.querySelecter('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   return false;
// });

document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Validate email and password
      var email = emailInput.value;
      var password = passwordInput.value;

      if (email === "admin@a2bdigitalservice.com" && password === "a2bdigital@admin_123") {
          // Redirect to dashboard.html
          window.location.href = "dashboard.html";
      } else {
          alert("Invalid email or password. Please try again.");
      }
  });

  var registerBtn = document.getElementById("registerBtn");
  registerBtn.addEventListener("click", function() {
      alert("Redirecting to register page...");
      // Add logic for redirecting to register page if needed
  });
});
