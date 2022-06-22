const boutonRetour = document.querySelector('.btn_retour');
const elementRoot = document.documentElement;
const elementHeader = document.querySelector('header');
const elementH1 = document.querySelector('h1');
const elementNav = document.querySelector('nav');
const accordeonsTransform = document.querySelectorAll('.accordeon');
const backgroundColor = 'linear-gradient(to right, rgba(255, 214, 165, 0.5) 0%, rgba(253, 255, 182, 0.5) 20%, rgba(202, 255, 191, 0.5) 40%, rgba(155, 246, 255, 0.5) 60%, rgba(189, 178, 255, 0.5) 80%, rgba(255, 198, 255, 0.5) 100%)';

accordeonsTransform.forEach(function(accordeon) {
    const titreAccordeonTransform = accordeon.querySelector('.btn_accordeon');
    const codeAccordeonTransform = accordeon.querySelector('.transform_code');
    const iconeAccordeonTransform = accordeon.querySelector('span');

    if (titreAccordeonTransform.ariaExpanded == 'true') {
        iconeAccordeonTransform.innerHTML = '&#9650';
        codeAccordeonTransform.style.display = 'block';
        titreAccordeonTransform.style.borderBottom = '2px solid #202020';
        titreAccordeonTransform.style.background = backgroundColor;
    } else {
        iconeAccordeonTransform.innerHTML = '&#9660;';
        codeAccordeonTransform.style.display = 'none';
        titreAccordeonTransform.style.borderBottom = 'none';
        titreAccordeonTransform.style.background = '#fff';
    }

    titreAccordeonTransform.addEventListener('click', function() {

        if (titreAccordeonTransform.ariaExpanded == 'true') {
            titreAccordeonTransform.ariaExpanded = 'false';
            iconeAccordeonTransform.innerHTML = '&#9660;';     
            codeAccordeonTransform.style.display = 'none';
            titreAccordeonTransform.style.borderBottom = 'none';
            titreAccordeonTransform.style.background = '#fff';
        } else {
            codeAccordeonTransform.style.display = 'block';
            titreAccordeonTransform.ariaExpanded = 'true';
            iconeAccordeonTransform.innerHTML = '&#9650';
            titreAccordeonTransform.style.borderBottom = '2px solid #202020';
            titreAccordeonTransform.style.background = backgroundColor;
        }
    });
});

function reduireHeaderAuDefilement() {
    let positionY = window.scrollY;
    let largeurEcran = window.innerWidth;

    if (positionY > 0) {
        elementH1.style.visibility = 'hidden';
        elementH1.style.position = 'absolute';
        elementNav.style.fontSize = '1.3rem';
        elementRoot.style.scrollPaddingTop = '1.5em';

        if (largeurEcran < 1024) {
            elementHeader.style.height = '40px'; 
        } else {
            elementHeader.style.height = '50px';
        }

    } else {
        elementH1.style.visibility = 'visible';
        elementH1.style.position = 'static';
        elementNav.style.fontSize = '1.6rem';
        elementRoot.style.scrollPaddingTop = '7em';

        if (largeurEcran < 1024) {
            elementHeader.style.height = '130px';
        } else {
            elementHeader.style.height = '150px';
        }
    }
}

function afficherBoutonAuDefilement() {
    let positionY = window.scrollY;
    
    if (positionY > 0) {
        boutonRetour.style.opacity = '100%';
        boutonRetour.style.pointerEvents = 'auto'; 
    } else {
        boutonRetour.style.opacity = '0';
        boutonRetour.style.pointerEvents = 'none';
    }
}

function retournerEnHaut() {
    elementRoot.scrollTo({top: 0});
}

window.addEventListener('scroll', function() {
    afficherBoutonAuDefilement();
    reduireHeaderAuDefilement();
});
boutonRetour.addEventListener('click', retournerEnHaut);