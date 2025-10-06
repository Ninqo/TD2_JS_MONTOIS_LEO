

//Lien vers wikipedia
const wiki = document.querySelector('#wiki');
wiki.href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";

//Modification bouton quary selector
const formulaire = document.querySelector('form');
const etiquette = document.querySelector('#etiquette');

formulaire.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire
    // Vérifier si le texte est "Oui" ou "Non"
    if (etiquette.value === "Oui" || etiquette.value === "Non") {
        // Si c'est correct, on pourrait envoyer le formulaire
        console.log("Texte valide!");
    } else {
        //Si texte différent de oui ou non mettre une indication
        etiquette.value = "Il faut mettre Oui ou Non";
    }});

//Modifier les bouton choix 1,2 et 3
const choix1 = document.getElementById('choix1');
const choix2 = document.getElementById('choix2');
const choix3 = document.getElementById('choix3');

choix1.nextSibling.textContent = " HP";
choix2.nextSibling.textContent = " Casque";
choix3.nextSibling.textContent = " Bluetooth";

//Modifier le volume en fonction du choix
const radios = document.querySelectorAll('input[name="choix"]');
choix1.value = "1";
choix2.value = "2";
choix3.value = "3";

radios.forEach(function(radio){
    radio.addEventListener('change', function(){
        const VolumeLabel=document.querySelector('#barreVolume');

        if(this.value=="1"){
            VolumeLabel.textContent = "Volume HP";
        } else if (this.value=="2"){
            VolumeLabel.textContent = "Volume Casque";
        }
        else if (this.value=="3"){
            VolumeLabel.textContent = "Volume Bluetooth";
        }
    })
});

//Modifier le volume max de la barre de 11 à 100
const volumeBar = document.getElementById('volume');
volumeBar.max = 100;
console.log("Valeur max du volume : ", volumeBar.max);

//Affichage valeur du volume
let volumeAffichage=document.createElement('affichage');
volumeAffichage.textContent = volumeBar.value;
volumeBar.parentNode.insertBefore(volumeAffichage, volumeBar.nextSibling);

volumeBar.addEventListener('input', function(){
    volumeAffichage.textContent = this.value;
});

//Modifier case à cocher
const caseMute= document.querySelector('#caseCocher');
caseMute.nextSibling.textContent = " Mute";

//Activer/désactiver le son avec case mute
caseMute.addEventListener('input', function(){
    if(this.checked){
        volumeBar.disabled = true;
    }
    else{
        volumeBar.disabled = false;
    }
})

//ajouter une image à la fin de la section Lien et Images
const lienSection = document.querySelector('#LienImage')
const nouvelleImage = document.createElement('img');
nouvelleImage.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg';
nouvelleImage.width = 200;
lienSection.appendChild(nouvelleImage);

//Récupérer l'année de la date et l'afficher dans la console
const anneeDate = document.getElementById('date');
anneeDate.addEventListener('change', function(){
    const selectionDate =new Date(this.value);
    const annee = selectionDate.getFullYear();
    console.log("Année de la date : " + annee);
});

//Augmenter les barres de progression de 5%
const barresProg = document.querySelectorAll('progress');
for(let i = 0; i < barresProg.length; i++){
    barresProg[i].value = '0';

    setInterval(function(){
        if(barresProg[i].value < 100){
            barresProg[i].value += 5;
        }else{
            barresProg[i].value = 0; //Recommencer quand à 100%
        }
    },1000)
}

// Créer le menu pour afficher/masquer les sections
const menuSection = document.createElement('section');
menuSection.id = 'menu';

//Selectionne les titre de type h2
const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Menu';
menuSection.appendChild(menuTitle);

const menuForm = document.createElement('form');
menuSection.appendChild(menuForm);

// Ajouter le menu au début du body
document.body.insertBefore(menuSection, document.body.firstChild);

// Masquer toutes les sections sauf le menu
const sections = document.querySelectorAll('section:not(#menu)');
sections.forEach((section, index) => {
    // Créer une checkbox pour chaque section
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'section-toggle-' + index;

    // Créer une étiquette
    const label = document.createElement('label');
    label.htmlFor = 'section-toggle-' + index;
    const sectionTitle = section.querySelector('h2') ? section.querySelector('h2').textContent : 'Section ' + (index + 1);
    label.textContent = sectionTitle;

    // Ajouter au menu
    menuForm.appendChild(checkbox);
    menuForm.appendChild(label);
    menuForm.appendChild(document.createElement('br'));

    // Masquer la section initialement
    section.style.display = 'none';

    // Ajouter un écouteur d'événement pour basculer la visibilité de la section
    checkbox.addEventListener('change', function() {
        section.style.display = this.checked ? 'block' : 'none';
    });

    // S'assurer qu'aucune checkbox n'est cochée au chargement
    checkbox.checked = false;
});

// S'assurer qu'aucune checkbox n'est cochée au rechargement (inclut celles du formulaire original)
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
allCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
});





