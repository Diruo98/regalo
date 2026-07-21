/* =====================================
   PROJECT AURORA
   SCRIPT v1.0
===================================== */



// =====================================
// CAMBIO SCENE
// =====================================


const scenes = document.querySelectorAll(".scene");



function cambiaScena(id) {


    scenes.forEach(scene => {


        scene.classList.remove("active");


    });



    document
    .getElementById(id)
    .classList.add("active");


}








// =====================================
// CUORI ANIMATI ❤️
// =====================================


const background =
document.getElementById("background");



const simboli = [

    "❤️",
    "🤍",
    "✨",
    "💗",
    "⭐"

];



function creaElemento() {


    const elemento =
    document.createElement("div");



    elemento.innerHTML =
    simboli[
        Math.floor(
            Math.random()
            *
            simboli.length
        )
    ];



    elemento.style.position =
    "absolute";



    elemento.style.left =
    Math.random()*100+"vw";



    elemento.style.top =
    "-50px";



    elemento.style.fontSize =
    (15+Math.random()*30)+"px";



    elemento.style.animation =
    "caduta "
    +
    (5+Math.random()*5)
    +
    "s linear";



    background.appendChild(elemento);



    setTimeout(()=>{


        elemento.remove();


    },10000);


}



setInterval(
    creaElemento,
    300
);









// =====================================
// INTRO
// =====================================


const start =
document.getElementById("start");



start.addEventListener(
"click",
()=>{


    cambiaScena("question");


});








// =====================================
// BIGLIETTINO
// =====================================


const yes =
document.getElementById("yes");



const no =
document.getElementById("no");




yes.addEventListener(
"click",
()=>{


    cambiaScena("birthday");


});







// NO CHE SCAPPA 😂


function scappa() {


    no.style.position =
    "fixed";



    no.style.left =
    Math.random()
    *
    (
        window.innerWidth
        -
        100
    )
    +
    "px";



    no.style.top =
    Math.random()
    *
    (
        window.innerHeight
        -
        50
    )
    +
    "px";


}



no.addEventListener(
"mouseenter",
scappa
);



no.addEventListener(
"touchstart",
(e)=>{


    e.preventDefault();


    scappa();


});
