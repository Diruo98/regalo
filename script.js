/* =====================================
   PROJECT AURORA
   SCRIPT v1.0
===================================== */



// ==========================
// EMOJI CADENTI ❤️🤍😍
// ==========================


const hearts =
document.getElementById("hearts");



const simboli = [

    "❤️",
    "🤍",
    "😍",
    "💕",
    "💗",
    "✨",
    "🦁"

];



function creaCuore(){


    const cuore =
    document.createElement("div");



    cuore.className =
    "heart";



    cuore.innerHTML =
    simboli[
        Math.floor(
            Math.random()
            *
            simboli.length
        )
    ];



    cuore.style.left =
    Math.random()*100 + "vw";



    cuore.style.fontSize =
    (15 + Math.random()*30)
    + "px";



    cuore.style.animationDuration =
    (4 + Math.random()*6)
    + "s";



    hearts.appendChild(cuore);



    setTimeout(()=>{


        cuore.remove();


    },10000);



}



setInterval(
    creaCuore,
    250
);







// ==========================
// CARICAMENTO ⏳
// ==========================


const bar =
document.getElementById("bar");


const percent =
document.getElementById("percent");


const start =
document.getElementById("start");



let valore = 0;



const caricamento =
setInterval(()=>{


    valore++;


    bar.style.width =
    valore + "%";



    percent.innerHTML =
    valore + "%";




    if(valore >= 100){


        clearInterval(caricamento);



        percent.innerHTML =
        "✨ È pronto per te ❤️";



        start.hidden =
        false;


    }



},50);









// ==========================
// APERTURA BIGLIETTINO 💌
// ==========================



const home =
document.getElementById("home");


const ticket =
document.getElementById("ticket");



start.addEventListener(
"click",
()=>{


    home.classList.add("hidden");


    ticket.classList.remove("hidden");


});








// ==========================
// NO CHE SCAPPA 😂
// ==========================



const no =
document.getElementById("no");



function scappa(){



    no.style.position =
    "fixed";



    no.style.left =

    Math.random()
    *
    (window.innerWidth - 100)
    +
    "px";



    no.style.top =

    Math.random()
    *
    (window.innerHeight - 50)
    +
    "px";


}



no.addEventListener(
"mouseenter",
scappa
);



no.addEventListener(
"touchstart",
(event)=>{


    event.preventDefault();


    scappa();


});









// ==========================
// SI ❤️
// ==========================



const yes =
document.getElementById("yes");



yes.addEventListener(
"click",
()=>{


    alert(
    "Preparati... la sorpresa continua ❤️"
    );


});
