const panda = document.getElementById("panda");
const pupils = document.querySelectorAll(".pupil");
const usernameInput = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Eyes follow cursor
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    pupils.forEach(p => {
        p.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Password Toggle Logic
togglePassword.addEventListener("click", function() {
    const isPasswordVisible = password.getAttribute("type") === "text";
    const type = isPasswordVisible ? "password" : "text";
    password.setAttribute("type", type);
    
    this.classList.toggle("fa-eye", type === "text");
    this.classList.toggle("fa-eye-slash", type === "password");
    
    if(type === "text") {
        panda.classList.add("hide-eyes");
    } else {
        panda.classList.remove("hide-eyes");
    }
});

password.addEventListener("focus", () => {
    if(password.type === "text") panda.classList.add("hide-eyes");
});
password.addEventListener("blur", () => {
    panda.classList.remove("hide-eyes");
});

// Functional Login Logic with Validation
loginBtn.addEventListener("click", () => {
    const user = usernameInput.value;
    const pass = password.value;
    
    // Regex for: Min 8 chars, at least 1 letter and 1 number
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    message.classList.add("show");
    
    if(user === "" || pass === "") {
        message.style.color = "#e74c3c";
        message.innerText = "Please fill in all fields";
    } else if (!passRegex.test(pass)) {
        message.style.color = "#e74c3c";
        message.innerText = "Password must be at least 8 characters long and contain both letters and numbers.";
    } else {
        message.style.color = "#27ae60";
        message.innerText = "Login Successful!";
        panda.classList.add("wave");
        setTimeout(() => panda.classList.remove("wave"), 1000);
        
        usernameInput.value = "";
        password.value = "";
    }
});

// Blink occasionally
setInterval(() => {
    panda.classList.add("blink");
    setTimeout(() => panda.classList.remove("blink"), 200)
}, 4000);