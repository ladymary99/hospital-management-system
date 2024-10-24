const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Validate and redirect to admin page
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission by default

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // chech user information
  if (username === "mary" && password === "CM3#R92I#02LM9YRSB") {
    //  login information saved successfully in localStorage
    localStorage.setItem("loggedIn", "true");

    // redirect to admin page
    window.location.href = "admin-dashboard.html";
  } 
  //new added code
    // check user information for sahadatyaqubi
else if (username === "sahadatyaqubi" && password === "1234") {
    // login information saved successfully in localStorage
    localStorage.setItem("loggedIn", "true");

    // redirect to patient2 page
    window.location.href = "patient2-index.html";
}
  
  else {
    // show error message
    errorMessage.textContent = "username and password is not correct! ";
  }
});
