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
var span = document.getElementsByClassName("close")[0];
const modalConfirm= document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal confirm
function closeModal() {
  modalConfirm.style.display = "none";
}

// Fermer la modale lorsque l'utilisateur clique sur le span
span.onclick = function() {
  modal.style.display = "none";
}

const form = document.querySelector(".reserve");
function validate(event){
  event.preventDefault(); // Empêche l'envoi du formulaire
for( let i= 0; i<formData.length; i++ ){
  if( formData[i].value === ""){
   console.log("rempli");
    return false;
  }

   modalConfirm.style.display= "block"
 /* }else {
    return true // Envoi le formulaire si tout est OK
  }*/
}
// Ajout d'un écouteur d'événement sur le bouton d'envoi
//form.addEventListener('submit', validate);
}

