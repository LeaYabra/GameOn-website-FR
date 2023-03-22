function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
var modal = document.getElementById("myModal");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
var closeModals = document.getElementsByClassName("js-close");
const modalConfirm = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const nameError = document.querySelector('#name-error');
const nameError1 = document.querySelector('#name-error1');
const nameError2 = document.querySelector('#name-error2');
const nameError3 = document.querySelector('#name-error3');
const nameError4 = document.querySelector('#name-error4');
const nameError5 = document.querySelector('#name-error5');
const nameError6 = document.querySelector('#name-error6');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal confirm
function closeModal() {
  modalConfirm.style.display = "none";
  modal.style.display = "none";
}

// Fermer la modale lorsque l'utilisateur clique sur le span
Array.from(closeModals).forEach(function (span) {
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
/*function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}*/
const form = document.querySelector("form");

const validate = function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire
  const formData = new FormData(form);
  var checkbox1 = document.getElementById("checkbox1");
  const boutonsRadio = form.querySelectorAll('input[type="radio"]');
  let isValid = true;
 
  if (formData.get("first").length < 2) {
    isValid = false;
    first.classList.add('error');
		nameError.textContent = 'Veuillez entrer 2 caractères ou plus pour le prénom.';
  }
  if (formData.get("last").length < 2 ) {
    isValid = false;
    last.classList.add('error');
		nameError1.textContent = 'Veuillez entrer 2 caractères ou plus pour le nom.';
  }
  if(formData.get("email")=== ""){
    isValid= false;
    email.classList.add('error');
		nameError2.textContent = 'Veuillez entrer une adresse email valide.';
  }
  if(formData.get("birthdate")=== ""){
    isValid= false;
    birthdate.classList.add('error');
		nameError3.textContent = 'Vous devez entrer votre date de naissance.';
  }
  if(formData.get("quantity")=== ""){
    isValid= false;
    quantity.classList.add('error');
		nameError4.textContent = 'Vous devez saisir une valeur numérique.';
  }
  // Initialiser le nombre de boutons radio sélectionnés à 0
  var selectedCount = 0;
  // Parcourir tous les boutons radio pour vérifier si l'un d'eux est sélectionné
  for (var i = 0; i < boutonsRadio.length; i++) {
  if (boutonsRadio[i].checked) {
    selectedCount++;
    }
  }
  if (selectedCount == 0) {
  isValid= false;
	nameError5.textContent = 'Vous devez choisir une option.';
  }
  
  if (checkbox1.checked == false){
  isValid= false;
 
	nameError6.textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
  }
  console.log("isValid", isValid);
  if (isValid) {
    modalConfirm.style.display = "block";
  }
  return isValid;
};
// Ajout d'un écouteur d'événement sur le bouton d'envoi
form.addEventListener("submit", validate);
