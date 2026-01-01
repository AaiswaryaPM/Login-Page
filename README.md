# Interactive Panda Login Page
A modern, responsive, and playful login interface featuring an interactive CSS-animated panda. The mascot reacts to user input, follows the cursor with its eyes, and even hides its eyes when the password is revealed!

✨ Features
Interactive Mascot:

Eye Tracking: The panda's pupils follow the mouse movement across the screen.

Blink Animation: Natural blinking intervals for a lifelike feel.

Privacy Mode: The panda covers its eyes when the "Show Password" toggle is activated.

Success Feedback: The panda waves when a login is successful.

Form Functionality:

Password Toggle: Easily switch between hidden and visible password text.

Input Validation: Built-in Regex check requiring at least 8 characters, including letters and numbers.

Error Messaging: Dynamic messages for empty fields or weak passwords.

Responsive Design:

Optimized for Desktop and Mobile.

Minimized Mobile View: Specifically tuned to shrink the card size on smaller screens to ensure the background remains visible.

Modern UI: Built with Google Fonts (Poppins), FontAwesome icons, and a sleek glass-morphism inspired layout.

📱 Mobile Optimization
The project includes a specific @media query for devices under 480px width. In this view:

The login card (.scene) is narrowed and padding is reduced.

The Panda mascot is scaled down to 0.7 to prevent layout overflow.

Background visibility is prioritized for better aesthetic appeal on vertical screens.

📜 Validation Rules
The login button triggers a validation check:

Username: Cannot be empty.

Password:

Minimum 8 characters.

Must contain at least one letter.

Must contain at least one number.
