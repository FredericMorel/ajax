// on attend le chargement du document.

windows.onload = () => {
  // on va chercher la zone de texte
  let texte = document.querySelector("#texte");
  texte.addEventListener("keyup", verifEntree);

  // On va chercher le bouton "valid"
  let valid = document.querySelector("#valid");
  valid.addEventListener("click", ajoutMessage);
};

/**
 * Cette fonction vérifie si on a appuyé sur la touche entrèe
 */

function verifEntree(e) {
  if ((e.key = "Enter")) {
    ajoutMessage();
  }
}
/**
 * Cette function envoi le message en ajax à un fichier ajoutMessage.php
 */
function ajoutMessage() {
  //on récupère le message
  let message = document.querySelector;
}
