// Function to validate the registartion form
document.getElementById("RegForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("yearTypeError").textContent = "";
    document.getElementById("userTypeError").textContent = "";

    // Get the input values
    const name = document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const yearType = document.getElementById("yearType").value;

    let valid = true;
// Input listeners to clear errors instantly when user types
// Array of field IDs and their corresponding error message IDs
const fields = [
    { fieldId: "name", errorId: "nameError" },
    { fieldId: "email", errorId: "emailError" },
    { fieldId: "phone", errorId: "phoneError" },
    { fieldId: "username", errorId: "usernameError" },
    { fieldId: "password", errorId: "passwordError" },
    { fieldId: "yearType", errorId: "yearTypeError" },
    { fieldId: "userType", errorId: "userTypeError" }
];

// Attach event listeners for each field
fields.forEach(({ fieldId, errorId }) => {
    document.getElementById(fieldId).addEventListener("input", function () {
        document.getElementById(errorId).textContent = "";
    });
});


    if (!name) {
        document.getElementById("nameError").textContent = "Please enter your name.";
        valid = false;
    }
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email.";
        valid = false;
    }
    if (!phone) {
        document.getElementById("phoneError").textContent = "Please enter your number.";
        valid = false;
    }
    else if (phone.length > 10) {
        document.getElementById("phoneError").textContent = "*Enter valid mobile number.";
        valid = false;
    }
    // Validate username
    if (!username) {
        document.getElementById("usernameError").textContent = "*Username is required.";
        valid = false;
    }

    else if (username.length > 15) {
        document.getElementById("usernameError").textContent = "*Username cannot be more than 15 characters.";
        valid = false;
    }
    

    // Validate password
    if (!password) {
        document.getElementById("passwordError").textContent = "*Password is required.";
        valid = false;
    }
    else if (password.length > 8) {
        document.getElementById("usernameError").textContent = "*password cannot be more than 8 characters.";
        valid = false;
    }
    if (!yearType) {
        document.getElementById("yearTypeError").textContent = "Please select a year.";
        valid = false;
    }
    

    if (!userType) {
        document.getElementById("userTypeError").textContent = "Please select a user type.";
        valid = false;
    }


    // If both fields are valid, show the welcome page
    if (valid) {
        window.location.href = "signupwelcome.html";  // Redirect to the welcome page
    }
});
