/**
 * add a scolling effect
 */
let scrl = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duaration: 1000,
    reset: true
})

scrl.reveal ('.main-text', {delay:300});
scrl.reveal ('.main-img', {delay:400});
scrl.reveal ('.description', {delay:300});
scrl.reveal ('.container', {delay:400});
scrl.reveal ('.site-links', {delay:300});

/**
 * display details when hovering the images
 */
function showDetail(index, detail){

    document.getElementById(index).innerHTML=detail;
}

function hideDetail(index){

    document.getElementById(index).innerHTML="";
}

/**
 * toggle the paragraph text
 */
function displayMore(){

    let pause = document.getElementById("pause");
    let extractText = document.getElementById("extract");
    let btnText = document.getElementById("btnMore");

    if(pause.style.display === "none"){
        pause.style.display = "inline";
        btnText.innerHTML = "Read more";
        extractText.style.display = "none";
    }
    else{
        pause.style.display = "none";
        btnText.innerHTML = "Read less";
        extractText.style.display = "inline";
    }

}