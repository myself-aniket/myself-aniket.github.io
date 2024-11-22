// main.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleButton");
  const navItems = document.querySelectorAll(".nav-item");
  const currentPage = window.location.pathname.split("/").pop();

  // Highlights the active page
  navItems.forEach((item) => {
    const page = item.getAttribute("data-page");
    if (page === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Toggles sidebar visibility
  toggleButton.addEventListener("click", () => {
      nav.classList.toggle("active");
  });
});


// Closes sidebar if clicked outside
document.addEventListener('click', (event) => {
  // Checks if the click was outside the sidebar and toggle button
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove('active'); // Remove the 'active' class to close sidebar
  }
});

// Selects the logo and the iframe
const logo = document.getElementById('chatbot-logo');
const bot = document.getElementById('bot');

// Adds an event listener to the logo for the click event
logo.addEventListener('click', () => {
  // Toggles the visibility of the bot iframe
  if (bot.style.display === 'none' || bot.style.display === '') {
    bot.style.display = 'block';  // Show the bot
  } else {
    bot.style.display = 'none';   // Hide the bot
  }
});

// Adds an event listener to the document to detect clicks outside the bot iframe
document.addEventListener('click', (event) => {
  // Check if the clicked target is not the bot iframe or the logo
  if (!bot.contains(event.target) && event.target !== logo) {
    // Hide the bot if the click is outside
    bot.style.display = 'none';
  }
});
