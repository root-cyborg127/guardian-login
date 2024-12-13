
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
 
  });
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
  
    if (username) {
      const welcomeOverlay = document.getElementById('welcomeOverlay');
      const welcomeMessage = document.getElementById('welcomeMessage');
  
      // Update welcome message
      welcomeMessage.textContent = `Welcome ${username}`;
  
      // Show overlay
      welcomeOverlay.classList.add('active');
  
      // Redirect or hide overlay after 2 seconds
      setTimeout(() => {
        welcomeOverlay.classList.remove('active');
        // Add redirect logic here, e.g., window.location.href = '/dashboard';
      }, 2000);
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.getElementById("login-container");
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const welcomeOverlay = document.getElementById("welcome-overlay");
  
    // Animate login container
    setTimeout(() => {
      loginContainer.style.opacity = "1";
      loginContainer.style.transform = "translateY(0)";
    }, 100);
  
    // Handle form submission
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username && password) {
        // Show welcome animation
        welcomeOverlay.innerHTML = `
          <div class="text-center">
            <div class="guardian-logo">
              <div class="shield"></div>
            </div>
            <h2 class="text-4xl font-bold text-white mt-4">Welcome ${username}</h2>
            <p class="text-xl text-gray-300 mt-2">to</p><h2 class="text-4xl font-bold text-white mt-4">Guardian</h2>
          </div>
        `;
        welcomeOverlay.classList.remove("hidden");
  
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      }
    });
  });
  