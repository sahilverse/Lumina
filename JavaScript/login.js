// Show and Hide Password Characters
const showPassword = document.getElementById("show");
const hidePassword = document.getElementById("hide");
const password = document.getElementById("password");

if (showPassword) {
    showPassword.addEventListener('click', () => {
        showPassword.style.display = "none";
        hidePassword.style.display = "initial";
        password.type = "text";
    })
};

if (hidePassword) {
    hidePassword.addEventListener('click', () => {
        showPassword.style.display = "initial";
        hidePassword.style.display = "none";
        password.type = "password";
    })
};



// displays Error 
const addErrorMessage = (element, message) => {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").innerText = message;
    } else {
        parent.innerHTML += `<p class="error">` + message + `</p>`;

    }
}

// Removes Error
const removeIfError = (element) => {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").remove();
    }
}

// Email and phone validation using REGEX
const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.value.match(validRegex);
}


const validatePhone = (phone) => {
    let validRegex = /^[0-9]{10}$/;
    return phone.value.match(validRegex);
}

// submitting form

const login = () => {
    let form = document.forms["loginForm"];
    let id = form["id"];
    let password = form["password"];

    if (id.value == "") {

        addErrorMessage(id, "You can't leave this empty.");
        return false;

    } else {

        if (!validateEmail(id) && !validatePhone(id)) {

            addErrorMessage(id, "Incorrect Email or Phone");
            return false;

        }

        removeIfError(id);
    }

    if (password.value == "") {

        addErrorMessage(password, "You can't leave this empty.");
        return false;

    } else {

        removeIfError(password);
    }

    return true;
};

