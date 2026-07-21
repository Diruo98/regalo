console.log("Script caricato ❤️");


// ==========================
// CUORI E FACCINE ANIMATE ❤️😍
// ==========================

const hearts = document.getElementById("hearts");


const simboli = [
    "❤️",
    "🤍",
    "😍",
    "💕",
    "💗"
];


function creaCuore() {

    const cuore = document.createElement("div");

    cuore.className = "heart";


    // sceglie un simbolo casuale
    cuore.innerHTML =
        simboli[Math.floor(Math.random() * simboli.length)];


    // posizione casuale
    cuore.style.left =
        Math.random() * 100 + "vw";


    // velocità casuale
    cuore.style.animationDuration =
        (3 + Math.random() * 6) + "s";


    // dimensione casuale
    cuore.style.fontSize =
        (15 + Math.random() * 25) + "px";


    hearts.appendChild(cuore);



    // elimina dopo la caduta
    setTimeout(() => {

        cuore.remove();

    }, 9000);

}


// crea nuovi cuori
setInterval(creaCuore, 250);





// ==========================
// BARRA DI CARICAMENTO
// ==========================


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





// ==========================
// PULSANTE
// ==========================

start.onclick = function() {

    alert("Il viaggio sta iniziando ❤️");

};
