function openPopup() {
  document.getElementById("loginPopup").style.display = "block";
  document.getElementById("Body").style.display = "rgba(0, 0, 0, 0.5)";
  
}
document.getElementById("Body").addEventListener("submit", function(event) {
  event.preventDefault();
  var userName = document.getElementById("userName").value;
  var loginPassword = document.getElementById("loginPassword").value;
  var storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (storedUserData && userName === storedUserData.email && loginPassword === storedUserData.password) {
    localStorage.setItem("loggedInUser", JSON.stringify(storedUserData));
    window.location.href = "Home.html"; // Redirect to profile page
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}


