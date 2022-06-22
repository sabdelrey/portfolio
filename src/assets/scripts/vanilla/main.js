// ------------ Menu mobile --------------
const menu = document.querySelector(".nav_principale");
const boutonOuvrirMenuMobile = document.querySelector("#bouton_mobile");
const boutonFermerMenuMobile = document.querySelector("#close_menu_button");
const itemsMenu = document.querySelectorAll(".nav_principale ul li");

let afficherMenuMobile = () => {
    menu.classList.add("menu_mobile");
    focusTrapMenuMobile();
    page.style.overflow = "hidden";
}

let fermerMenuMobile = () => {
    menu.classList.remove("menu_mobile");
    boutonOuvrirMenuMobile.focus();
    page.style.overflow = "auto";
}

boutonOuvrirMenuMobile.addEventListener("click", afficherMenuMobile);
boutonFermerMenuMobile.addEventListener("click", fermerMenuMobile);

itemsMenu.forEach(item => {
    item.addEventListener("click", fermerMenuMobile);
});

// ------------ Modales --------------
const boutonsOuvrirModale = document.querySelectorAll(".ouvrir_modale");
const boutonsFermerModale = document.querySelectorAll(".close_modal_button");
const modales = document.querySelectorAll(".modale");
const page = document.querySelector("body");
const arrayModale = Array.from(boutonsOuvrirModale).entries();

for (let [index, bouton] of arrayModale) {
    const backgroundModale = document.createElement("div");
    backgroundModale.classList.add("modale_background");
    
    bouton.addEventListener("click", () => {
        modales[index].prepend(backgroundModale);
        modales[index].style.display = "flex";
        modales[index].classList.add("active");
        page.style.overflow = "hidden";

        focusTrapModale();
        
        backgroundModale.addEventListener("click", () => {
            console.log('test');
            modales[index].removeChild(backgroundModale);
            modales[index].style.display = "none";
            modales[index].classList.remove("active");
            page.style.overflow = "auto";
        });
    });
    

    boutonsFermerModale[index].addEventListener("click", () => {
        modales[index].removeChild(backgroundModale);
        modales[index].style.display = "none";
        modales[index].classList.remove("active");
        page.style.overflow = "auto";
        boutonsOuvrirModale[index].focus();
    });
}

// ------------ Focus trap --------------
const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

let focusTrapMenuMobile = () => {
    const navFocusEl = menu.querySelectorAll(focusableElements);
    const premierFocusEl = menu.querySelectorAll(focusableElements)[0];
    const dernierFocusEl = navFocusEl[navFocusEl.length - 1];

    premierFocusEl.focus();

    navFocusEl.forEach(focusEl => {
        focusEl.addEventListener("keydown", (e) => {
            if(e.key === 'Tab' || e.keyCode === 9) {
                if(!e.shiftKey && document.activeElement === dernierFocusEl) {
                    premierFocusEl.focus();
                    e.preventDefault();
                } else if(e.shiftKey && document.activeElement === premierFocusEl) {
                    dernierFocusEl.focus();
                    e.preventDefault();
                }
            }
        })
    })
}

let focusTrapModale = () => {
    const modaleActive = document.querySelector(".modale.active")
    const modaleFocusEl = modaleActive.querySelectorAll(focusableElements);
    const premierFocusEl = modaleActive.querySelectorAll(focusableElements)[0];
    const dernierFocusEl = modaleFocusEl[modaleFocusEl.length - 1];
    
    premierFocusEl.focus();

    modaleFocusEl.forEach(focusEl => {
        focusEl.addEventListener("keydown", (e) => {
            if(e.key === 'Tab' || e.keyCode === 9) {
                if(!e.shiftKey && document.activeElement === dernierFocusEl) {
                    premierFocusEl.focus();
                    e.preventDefault();
                } else if(e.shiftKey && document.activeElement === premierFocusEl) {
                    dernierFocusEl.focus();
                    e.preventDefault();
                }
            }
        })
    });
}

// --------- Window width ------------ 
const largeurFenetre = window.innerWidth;
let calculerLargeurFenetre = () => {
    if (window.innerWidth > 900) {
        fermerMenuMobile;
    } 
}

window.onresize = calculerLargeurFenetre;
