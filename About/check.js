// Listen for form submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal("email");
  console.log(email);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
