//index.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("About page loaded.");
  setTimeout(() => {
    document.getElementById("aboutText").style.color = "#007BFF";
  }, 2000);
});

//Contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      confirmation.textContent = `Thank you, ${name}! Your message has been received.`;
      form.reset(); 
    } else {
      confirmation.style.color = "red";
      confirmation.textContent = "Please fill in all the fields.";
    }
  });
});


//home.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Home page loaded!");
setTimeout(() => {
    const heading = document.getElementById("welcomeHeading");
    heading.textContent = "Explore Listings and Find Your Dream Home!";
    heading.style.color = "#007BFF"; // Optional: change color
  }, 2000);

  
});

//login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }
    alert(`Welcome, ${username}! Login successful.`);
    });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".view-btn");
  const bookButtons = document.querySelectorAll(".book-btn");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Viewing details for a property...");
    });
  });

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Booking page opened...");
    });
  });
});

//review.js

  document.getElementById('reviewForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      const rating = document.getElementById('rating').value;

      if (name && message && rating) {
        const reviewSection = document.getElementById('reviewsSection');

        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const h3 = document.createElement('h3');
        h3.textContent = name;

        const p = document.createElement('p');
        p.textContent = `"${message}"`;

        const span = document.createElement('span');
        span.textContent = '⭐'.repeat(parseInt(rating));

        reviewDiv.appendChild(h3);
        reviewDiv.appendChild(p);
        reviewDiv.appendChild(span);

        reviewSection.appendChild(reviewDiv);

        // Clear form fields
        document.getElementById('reviewForm').reset();
      }
    });
  
    //contact.js
    
    document.getElementById("contactForm").addEventListener("submit",function (e){
      e.preventDefault();
      window.location.href ="index.html"
    });
  