// ==========================
// CUORI CADENTI ❤️
// ==========================

const hearts = document.getElementById("hearts");

function creaCuore() {

    const cuore = document.createElement("div");

    cuore.classList.add("heart");

    cuore.innerHTML = "🤍";


    // posizione casuale
    cuore.style.left = Math.random() * 100 + "vw";


    // velocità casuale
    cuore.style.animationDuration =
        (3 + Math.random() * 5) + "s";


    // dimensione casuale
    cuore.style.fontSize =
        (10 + Math.random() * 25) + "px";


    hearts.appendChild(cuore);


    // rimuove il cuore dopo l'animazione
    setTimeout(() => {

        cuore.remove();

    }, 8000);

}


// crea cuori continuamente
setInterval(creaCuore, 300);





// ==========================
// BARRA DI CARICAMENTO ❤️
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
            "È tutto pronto per te 🤍";



        start.hidden = false;


    }


}, 50);





// ==========================
// PULSANTE INIZIA ✨
// ==========================


start.addEventListener("click", () => {


    alert("Il viaggio sta iniziando 🤍");


});
