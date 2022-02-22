document.querySelector ('.header-right>a').addEventListener ('click', function() {
    document.querySelector ('.hamburger-menu').classList.add ('active');
 }
)

document.querySelector ('.close').addEventListener ('click', function() {
    document.querySelector ('.hamburger-menu').classList.remove ('active');
 }
)