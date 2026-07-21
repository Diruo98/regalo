// =======================
// CUORI ANIMATI ❤️😍
// =======================

const hearts = document.getElementById("hearts");

const simboli = [
    "❤️",
    "🤍",
    "😍",
    "💕",
    "💗",
    "🦁"
];


function creaCuore() {

    const cuore = document.createElement("div");

    cuore.className = "heart";


    cuore.innerHTML =
        simboli[Math.floor(Math.random() * simboli.length)];


    cuore.style.left =
        Math.random() * 100 + "vw";


    cuore.style.fontSize =
        (15 + Math.random() * 25) + "px";


    cuore.style.animationDuration =
        (4 + Math.random() * 5) + "s";


    hearts.appendChild(cuore);


    setTimeout(() => {

        cuore.remove();

    }, 9000);

}


setInterval(creaCuore, 250);






// =======================
// CARICAMENTO ⏳
// =======================


const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const start = document.getElementById("start");


let valore = 0;


const caricamento = setInterval(() => {


    valore++;


    bar.style.width = valore + "%";


    percent.innerHTML = valore + "%";



    if (valore >= 100) {


        clearInterval(caricamento);


        percent.innerHTML =
            "È pronto per te ❤️";


        start.hidden = false;

    }


}, 50);







// =======================
// BIGLIETTINO 💌
// =======================


const ticket = document.getElementById("ticket");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const success = document.getElementById("success");



// apre il bigliettino

start.addEventListener("click", () => {


    ticket.style.display = "flex";


});








// =======================
// IL NO SCAPPA 😂
// =======================


function scappaNo() {


    const larghezza =
        window.innerWidth - no.offsetWidth - 20;


    const altezza =
        window.innerHeight - no.offsetHeight - 20;



    const nuovoX =
        Math.random() * larghezza;


    const nuovoY =
        Math.random() * altezza;



    no.style.position = "fixed";


    no.style.left =
        nuovoX + "px";


    no.style.top =
        nuovoY + "px";


    no.style.transition =
        "all 0.3s ease";


}



// PC: passa sopra con il mouse

no.addEventListener(
    "mouseenter",
    scappaNo
);



// Telefono: prova a toccarlo

no.addEventListener(
    "touchstart",
    function(e) {

        e.preventDefault();

        scappaNo();

    }
);








// =======================
// CONFERMA ❤️
// =======================


yes.addEventListener("click", () => {


    ticket.style.display = "none";



    // esplosione di cuori

    for(let i = 0; i < 60; i++) {

        creaCuore();

    }



    setTimeout(() => {


        success.style.display = "flex";


    }, 800);


});
