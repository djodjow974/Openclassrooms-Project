let bouton_clic = document.getElementById("clic");

let bouton_reset = document.getElementById("desactiver");

let cpt = document.getElementById("compteurClics");

// Fonction d'implémentation
function implementerCpt(){
  cpt.textContent = parseInt(cpt.textContent,10) + 1;
}

// Fonction de réinialisation
function resetCpt(){
  cpt.textContent = 0;
}

// On ajoute les événements
bouton_clic.addEventListener('click', implementerCpt);

bouton_reset.addEventListener('click', resetCpt)
