// Function to validate the login form
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
     // Prevent form submission
    
    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get the input values
   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;
    const yearType = document.getElementById("yearType").value;
    const semType = document.getElementById("semType").value;

  let valid = true;
    // Input listeners to clear errors instantly when user types
// Array of field IDs and their corresponding error message IDs
const fields = [
    { fieldId: "username", errorId: "usernameError" },
    { fieldId: "password", errorId: "passwordError" },
    { fieldId: "yearType", errorId: "yearTypeError" },
    { fieldId: "userType", errorId: "userTypeError" },
    { fieldId: "semType", errorId: "semTypeError" }
];

// Attach event listeners for each field
fields.forEach(({ fieldId, errorId }) => {
    document.getElementById(fieldId).addEventListener("input", function () {
        document.getElementById(errorId).textContent = "";
    });
});
   
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
    if (!semType) {
        document.getElementById("semTypeError").textContent = "Please select a sem type.";
        valid = false;
    }

    if (!userType) {
        document.getElementById("userTypeError").textContent = "Please select a user type.";
        valid = false;
    }


    // If both fields are valid, show the welcome page
    if (valid) {
        window.location.href = "welcome.html";  // Redirect to the welcome page
    }
});

