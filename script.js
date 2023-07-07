const gallery = document.querySelector(".personnage");
const nextBtn = document.querySelector("#nextBtn");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  // la deriène image à afficher

  const maxIndex = Math.min(currentIndex + 3, gallery.children.length);

  // Masquer toutes les images

  for (let i = 0; i < gallery.children.length; i++) {
    gallery.children[i].style.display = "none";
  }

  // Afficher les 3 images

  for (let i = currentIndex; i < maxIndex; i++) {
    gallery.children[i].style.display = "flex";

    // Afficher les 2 premiers textes

    if (i < currentIndex + 2) {
      gallery.children[i].querySelector(".texte").style.display = "block";
    }
  }
  // Masquer le texte de la dernière image affichée

  for (let i = currentIndex + 2; i < maxIndex; i++) {
    gallery.children[i].querySelector(".texte").style.display = "none";
  }
  // Met à jour l'index courant

  currentIndex = maxIndex >= gallery.children.length ? 0 : currentIndex + 2;
});

// Initialise l'affichage de la galerie

nextBtn.click();
