console.log("Script caricato ❤️");


// CUORI

const hearts = document.getElementById("hearts");

function creaCuore() {

    const cuore = document.createElement("div");

    cuore.className = "heart";

    cuore.innerHTML = "❤️";

    cuore.style.left = Math.random() * 100 + "vw";

    cuore.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    cuore.style.fontSize =
        (15 + Math.random() * 20) + "px";


    hearts.appendChild(cuore);


    setTimeout(() => {
        cuore.remove();
    }, 8000);

}


setInterval(creaCuore, 300);




// CARICAMENTO

let valore = 0;

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const start = document.getElementById("start");


let timer = setInterval(() => {

    valore++;

    bar.style.width = valore + "%";

    percent.innerHTML = valore + "%";


    if (valore >= 100) {

        clearInterval(timer);

        percent.innerHTML = "È pronto per te ❤️";

        start.hidden = false;

    }


}, 50);



// PULSANTE

start.onclick = function() {

    alert("Il viaggio inizia ❤️");

};
