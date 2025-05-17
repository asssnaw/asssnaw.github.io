// Scroll container holding doctor cards
const scrollContainer = document.getElementById('doctor-scroll');

// Left and right navigation arrows
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

//Search input field 
const searchInput = document.querySelector('.search-input');

// All doctors card
const doctorCards = document.querySelectorAll('.doctor-card');

// When the left arrow is clicked, scroll the container to the left 
leftArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

// When the right arrow is clicked, scroll the container to the right 
rightArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

// Search filter
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  // Loop through all doctor cards
  doctorCards.forEach(card => {
     // doctor's name and description text
    const doctorName = card.querySelector('h3').textContent.toLowerCase();
    const doctorDesc = card.querySelector('p').textContent.toLowerCase();
    // Check if either the name or description contains the search query
    if (doctorName.includes(query) || doctorDesc.includes(query)) {
      // display the card if it matches search quaries
      card.style.display = 'block';

      // hide the card if it does not contain search quaries
    } else {
      card.style.display = 'none';
    }
  });
});

// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the additional right arrow and doctor cards container
    const arrowRight = document.getElementById("arrowRight");
    const doctorCardsContainer = document.getElementById("doctorCards");
  
    // Add click event to scroll right when the arrow is clicked
    arrowRight.addEventListener("click", () => {
      doctorCardsContainer.scrollBy({
        left: 300, // scrolls 300px right
        behavior: "smooth"
      });
    });
  });
  