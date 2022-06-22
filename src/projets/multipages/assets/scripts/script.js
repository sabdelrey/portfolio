$(function() {

    let nav_icon = $('.menu_icon');
    let nav = $('nav ul');
    let fermer_icon = $('.fermer_icon');
    let largeur_fenetre = $(window).width();

    function afficherMenuMobile() {
        nav_icon.show();
        fermer_icon.hide();
        nav.hide();
    }

    function cacherMenuMobile() {
        nav_icon.hide();
        fermer_icon.hide();
        nav.show();
    }

    if (largeur_fenetre < 992) {
        afficherMenuMobile();
        changerMenuSelonLargeurEcran();
    } else {
        cacherMenuMobile();
    }

    function changerMenuSelonLargeurEcran() {

        if (largeur_fenetre < 992) {
            afficherMenuMobile();
    
            nav_icon.click(function() {
                nav_icon.hide();
                fermer_icon.show();
                nav.slideDown();
            });
    
            fermer_icon.click(function() {
                nav_icon.show();
                fermer_icon.hide();
                nav.slideUp();
            });

        } else {
            cacherMenuMobile();
        }
    }

    $(window).resize(function() {
        largeur_fenetre = $(window).width();
        changerMenuSelonLargeurEcran();
    });
});