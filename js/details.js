window.onscroll = function(){stickyEffect()};
showActive();

/**
 * add sticky effect to the navigation bar
 */
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyEffect(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

/**
 * highlight the current menu in navigation bar
 */
function showActive(){

    const currentPage = window.location.pathname;
    const navlist = document.querySelectorAll(".navlist a");

    for(var nav of navlist){
        if(nav.href.includes(currentPage)){
            nav.classList.add('active');
        }
    }
}