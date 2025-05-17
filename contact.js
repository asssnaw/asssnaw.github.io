//-----------SUBMIT BUTTON POP UP MESSAGE--------

//waits until the html is fully loaded 
document.addEventListener("DOMContentLoaded", function () {

    // Select the contact form element
      const contactForm = document.querySelector(".contact-form");
  
      // Select the toast message element
      const toast = document.getElementById("toast");
  
      // Add an event listener to handle the form submission
      contactForm.addEventListener("submit", function (e) {
  
        e.preventDefault(); // Prevent actual submission and page reloads
    
        // Show toast message
        toast.classList.add("show");
    
        // Hide toast after 3 seconds
        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
    
        
        contactForm.reset();
      });
    });