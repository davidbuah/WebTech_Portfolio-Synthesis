// 1. TIME-BASED GREETING (home page only)
const greeting = document.getElementById("greeting");

if (greeting) {
  const hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = "Good morning";
  } else if (hour < 18) {
    message = "Good afternoon";
  } else {
    message = "Good evening";
  }

  greeting.textContent = message + "! Welcome to my portfolio.";
}

// 2. CONTACT FORM CHECK (contact page only)
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let allGood = true;

    // clear old error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    if (name.length < 2) {
      document.getElementById("name-error").textContent = "Please enter your name.";
      allGood = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("email-error").textContent = "Enter a valid email, like you@example.com.";
      allGood = false;
    }

    if (message.length < 10) {
      document.getElementById("message-error").textContent = "Your message needs at least 10 characters.";
      allGood = false;
    }

    if (allGood) {
      form.reset();
      document.getElementById("success").style.display = "block";
    }
  });
}
