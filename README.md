# 🐼 Interactive Login-Page
## 📌 Description
A modern, responsive, and playful login interface featuring an **interactive CSS/JS animated panda**. The mascot reacts dynamically to user input, providing a unique and engaging user experience.

## ✨ Features
### 🐾 Interactive Mascot
 - **Eye Tracking:** The panda’s pupils follow the mouse movement across the screen using real-time coordinates.
 - **Blink Animation:** Natural blinking intervals programmed for a lifelike feel.
 - **Privacy Mode:** The panda physically covers its eyes when the "Show Password" toggle is activated.
 - **Success Feedback:** A celebratory wave animation triggers upon successful login validation.
### 📝 Form Functionality
 - **Password Toggle:** Integrated FontAwesome icons to switch between hidden and visible password text.
 - **Real-time Validation:** Built-in Regex check ensuring security requirements are met.
 - **Dynamic Error Messaging:** Clear, immediate feedback for empty fields or weak passwords.
### 📱 Responsive Design
 - **Glass-morphism UI:** Built with Google Fonts (Poppins) and sleek translucent layers.
 - **Mobile Optimized:** Specific `@media` queries for devices under 480px that scale the mascot (0.7x) and adjust card padding to ensure the layout never overflows.

## 📜 Validation Rules
The login logic enforces the following security standards:
| Field | Requirement |
|:-----:|:-----------:|
| Username | Cannot be empty. |
| Password Length | Minimum 8 characters. |
| Password Complexity | Must contain at least one letter and one number. |

## 🚀 Live Demo
https://aaiswaryapm.github.io/Login-Page/

## 🛠️ Built With
 - **HTML5:** Semantic structure for accessibility.
 - **CSS3:** Custom animations, Flexbox/Grid, and @media queries.
 - **JavaScript (ES6):** DOM manipulation, mouse-tracking logic, and Regex validation.
 - **FontAwesome:** For intuitive UI icons.
 - **Google Fonts:** Utilizing 'Poppins' for a clean, modern aesthetic.
