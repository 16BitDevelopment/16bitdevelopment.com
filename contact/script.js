const formEl = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const submitGroup = document.getElementById("submit-group");



formEl.onsubmit = (function(e) {
    e.preventDefault();

    const dateNow = new Date();

    let params = {
        name: (firstNameInput.value + " " + lastNameInput.value).toString(),
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
        date: (dateNow.getDate() + "/" + dateNow.getMonth() + "/" + dateNow.getFullYear()).toString()
    };

    submitGroup.classList.add("loading");
    submitGroup.classList.remove("sent");
    submitGroup.classList.remove("error");

    emailjs.send("service_ffh1rdf", "template_ducxzta", params).then(
        (response) => {
            submitGroup.classList.add("sent");
            submitGroup.classList.remove("loading");

            clearInputs();
        },
        (error) => {
            submitGroup.classList.add("error");
            submitGroup.classList.remove("loading");

            clearInputs();
        }
    );
});

function clearInputs() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = ""
    phoneInput.value = "";
    messageInput.value = "";
}