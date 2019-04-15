let bouton_clic = document.getElementById("clic");

let bouton_reset = document.getElementById("desactiver");

let cpt = document.getElementById("compteurClics");

function implementerCpt(){
  cpt.textContent = parseInt(cpt.textContent,10) + 1;
}

function resetCpt(){
  cpt.textContent = 0;
}

bouton_clic.addEventListener('click', implementerCpt);

bouton_reset.addEventListener('click', resetCpt)
