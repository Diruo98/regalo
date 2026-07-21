// =====================
// CUORI ANIMATI ❤️😍
// =====================


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


    cuore.innerHTML =
    simboli[
        Math.floor(Math.random() * simboli.length)
    ];



    cuore.style.left =
    Math.random() * 100 + "vw";



    cuore.style.fontSize =
    (15 + Math.random() * 25) + "px";



    cuore.style.animationDuration =
    (4 + Math.random() * 6) + "s";



    hearts.appendChild(cuore);



    setTimeout(() => {

        cuore.remove();

    }, 10000);


}



setInterval(creaCuore, 250);







// =====================
// CARICAMENTO ⏳
// =====================


const bar =
document.getElementById("bar");


const percent =
document.getElementById("percent");


const start =
document.getElementById("start");



let progresso = 0;



const loading = setInterval(() => {


    progresso++;


    bar.style.width =
    progresso + "%";


    percent.innerHTML =
    progresso + "%";



    if(progresso >= 100) {


        clearInterval(loading);


        percent.innerHTML =
        "È pronto per te ❤️";


        start.hidden = false;


    }



},50);








// =====================
// CAMBIO PAGINE
// =====================


const pagine =
document.querySelectorAll(".page");



function mostraPagina(id) {


    pagine.forEach(p => {

        p.classList.remove("active");

    });


    document.getElementById(id)
    .classList.add("active");

}








// =====================
// INIZIA ❤️
// =====================


start.addEventListener("click", () => {


    mostraPagina("ticket");


});








// =====================
// NO SCAPPA 😂
// =====================


const no =
document.getElementById("no");



function scappaNo() {


    const x =
    Math.random() *
    (window.innerWidth - no.offsetWidth);



    const y =
    Math.random() *
    (window.innerHeight - no.offsetHeight);



    no.style.position = "fixed";


    no.style.left =
    x + "px";


    no.style.top =
    y + "px";

}



no.addEventListener(
"mouseenter",
scappaNo
);



no.addEventListener(
"touchstart",
(e)=>{

    e.preventDefault();

    scappaNo();

});








// =====================
// CONFERMA ❤️
// =====================


const yes =
document.getElementById("yes");



yes.addEventListener("click",()=>{


    mostraPagina("birthday");


});








// =====================
// CANDELINE 🎂
// =====================


const cake =
document.querySelector(".cake");

const candlesText =
document.getElementById("candlesText");


let candeline = 3;



cake.addEventListener("click",()=>{


    if(candeline > 0) {


        candeline--;


        candlesText.innerHTML =
        "Candeline rimaste: "
        + candeline;



        if(candeline === 0) {


            candlesText.innerHTML =
            "🎉 Desiderio espresso ❤️";



            for(let i=0;i<80;i++){

                creaCuore();

            }



            setTimeout(()=>{


                mostraPagina("final");


            },2000);



        }


    }


});
