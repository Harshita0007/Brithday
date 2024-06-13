function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password are not empty
  if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
  }

  // Check if the username and password are correct
  if (username === "harpi1409@gmail.com" && password === "301223") {
      alert("Login successful!");
      window.location.href = "des.html"; // Redirect to the destination page
  } else {
      alert("Incorrect username or password. Please try again.");
  }
}
