function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// verification d'email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// DOM Elements
var modal = document.getElementById("myModal");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
var closeModals = document.getElementsByClassName("js-close");
const modalConfirm = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const firstError = document.querySelector("#first-error");
const lastError = document.querySelector("#last-error");
const emailError = document.querySelector("#email-error");
const birthdateError = document.querySelector("#birthdate-error");
const quantityError = document.querySelector("#quantity-error");
const locationError = document.querySelector("#location-error");
const cguError = document.querySelector("#cgu-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal
Array.from(closeModals).forEach(function (btnClose) {
  btnClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

// verification du formulaire

const validate = function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire
  const formData = new FormData(form);
  const errorMessages = document.getElementsByClassName("error-message");
  const allInputs = document.querySelectorAll("input");
  // enleve le style d'erreur si correcte
  Array.from(allInputs).forEach(function (input) {
    input.classList.remove("error");
  });
  Array.from(errorMessages).forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });
  let isValid = true;

  if (formData.get("first").length < 2) {
    isValid = false;
    first.classList.add("error");
    firstError.textContent = "Veuillez saisir 2 caractères ou plus pour le prénom.";
  }
  if (formData.get("last").length < 2) {
    isValid = false;
    last.classList.add("error");
    lastError.textContent ="Veuillez saisir 2 caractères ou plus pour le nom.";
  }
  if (formData.get("email") === "") {
    isValid = false;
    email.classList.add("error");
    emailError.textContent = "Veuillez saisir une adresse email.";
  } else if (!validateEmail(formData.get("email"))) {
    isValid = false;
    email.classList.add("error");
    emailError.textContent = "L'adresse email n'est pas valide.";
  }
  if (formData.get("birthdate") === "") {
    isValid = false;
    birthdate.classList.add("error");
    birthdateError.textContent = "Veuillez saisir votre date de naissance.";
  }
  if (formData.get("quantity") === "") {
    isValid = false;
    quantity.classList.add("error");
    quantityError.textContent = "Veuillez saisir une valeur numérique.";
  }
  console.log("radio location", formData.get("location"));
  if (formData.get("location") === null) {
    isValid = false;
    locationError.textContent = "Veuillez choisir une option.";
  }
  if (formData.get("cgu") === null) {
    isValid = false;
    cguError.textContent ="Veuillez vérifier que vous acceptez les termes et conditions.";
  }
  if (isValid) {
    modalConfirm.style.display = "block";
  }
  return isValid;
};
// Ajout d'un écouteur d'événement sur le bouton d'envoi
form.addEventListener("submit", validate);
