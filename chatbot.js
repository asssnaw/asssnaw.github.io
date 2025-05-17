//-----------DOM ELEMENT SECTION-----------

// chat toggle button from the HTML
const chatToggle = document.getElementById('chat-toggle');

// chatbox element to show or hide it when toggled
const chatbox = document.getElementById('chatbox');

// send button inside the chatbox
const sendBtn = document.getElementById('send-btn');

// the text input field 
const userInput = document.getElementById('user-input');

// container for displaying of the chat messages
const chatMessages = document.getElementById('chat-messages');

//-----------TOGGLE CHATBOV VISIBILITY-----------

// Add a click event listener to the chat toggle button
// When clicked, it shows or hides the chatbox by toggling a class
chatToggle.addEventListener('click', () => {
  chatbox.classList.toggle('show');
});

//----------- EVENT LISTENER FOR SENDING MESSAGES -----------

// message is sent when the send button is clicked
sendBtn.addEventListener('click', handleUserMessage);

// Also allow message is sent when the enter button is pressed
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserMessage();
  }
});

//----------- HANDLE USER MESSAGE INPUT -----------

function handleUserMessage() {
 // Get the message text and remove any extra space
  const message = userInput.value.trim();
  // If input is empty, NO RESPONSE
  if (!message) return;

  // Display user's message in chat
  addMessage(message, 'user');
  // Clear the input box
  userInput.value = '';

  // Show "Doctor is typing..." text
  showTypingIndicator();

  // Simulate bot typing delay
  setTimeout(() => {
    hideTypingIndicator();
    // Get the bot's response based on user's message
    const response = getBotResponse(message);
    // Display bot's response in chat
    addMessage(response, 'bot');
  }, 1500);
}

//----------- ADD MESSAGE TO CHAT WINDOW -----------

function addMessage(message, sender) {
    // Create a new div element for the message
  const msgDiv = document.createElement('div');
  // Assign 'message' class 
  msgDiv.classList.add('message', sender);
   // Set the message text
  msgDiv.textContent = message;
  // Add the message div to the chat container
  chatMessages.appendChild(msgDiv);
   // Scroll to the bottom so the latest message is visible
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

//----------- SHOW TYPING INDICATOR -----------

function showTypingIndicator() {
  // Create a new div element for the typing indicator
  const typingDiv = document.createElement('div');
  // Give it an ID 
  typingDiv.id = 'typing-indicator';
  // Set the text to indicate the bot is typing
  typingDiv.textContent = 'Doctor is typing...';
  // Add it to the chat messages container
  chatMessages.appendChild(typingDiv);
  // Scroll down 
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

//----------- HIDE TYPING INDICATOR -----------

function hideTypingIndicator() {
     // Get the typing indicator element
  const typingDiv = document.getElementById('typing-indicator');
  // If it exists, remove it from the chat
  if (typingDiv) {
    typingDiv.remove();
  }
}

//----------- GENERATE BOT RESPONSE BASED ON USER INPUT -----------
function getBotResponse(message) {
    // Convert input to lowercase for easier keyword detection
    const msg = message.toLowerCase();
    // Default response if no keyword matches
    let response = "Hey, How can I help you?";
  
      if (message.toLowerCase().includes("fever")) {
        response = "If you have a fever, rest, stay hydrated, and monitor your temperature. Visit the 'Doctors' section for help.";
      } else if (message.toLowerCase().includes("anonymous mode")) {
        response = "Anonymous mode lets you ask health questions safely without revealing your identity. Especially for teens or sensitive topics.";
      } else if (message.toLowerCase().includes("enter")) {
        response = "Click the 'Go Anonymous' button on the home page under the login and signup buttons.";
      } else if (message.toLowerCase().includes("headache")) {
        response = "Try to relax, drink water, and avoid screens. If the headache continues, consider seeing a doctor.";
      } else if (message.toLowerCase().includes("appointment")) {
        response = "To book an appointment, click the 'Book an Appointment' button on the home page.";
      } else if (message.toLowerCase().includes("emergency")) {
        response = "If this is a medical emergency, please contact emergency services immediately.";
      } else if (message.toLowerCase().includes("hi")) {
        response = "Hey, how can i help you?";
      } else {
        // If no matching keyword is found
        response = "I’m still learning! For more help, please check the services or doctors section.";
      }
      
      return response;
}
  
     