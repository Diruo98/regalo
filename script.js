/* =====================================
   PROJECT AURORA
   SCRIPT COMPLETO v1.1
===================================== */



// ==========================
// EMOJI CADENTI ❤️🤍😍✨
// ==========================


const hearts = document.getElementById("hearts");


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


    const cuore = document.createElement("div");


    cuore.className = "heart";


    cuore.innerHTML =
    simboli[
        Math.floor(Math.random() * simboli.length)
    ];



    cuore.style.left =
    Math.random() * 100 + "vw";



    cuore.style.fontSize =
    (15 + Math.random() * 30) + "px";



    cuore.style.animationDuration =
    (4 + Math.random() * 6) + "s";



    hearts.appendChild(cuore);



    setTimeout(()=>{

        cuore.remove();

    },10000);


}



setInterval(creaCuore,250);







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



const caricamento = setInterval(()=>{


    valore++;


    bar.style.width =
    valore + "%";


    percent.innerHTML =
    valore + "%";



    if(valore >= 100){


        clearInterval(caricamento);



        percent.innerHTML =
        "✨ È pronto per te ❤️";



        start.hidden = false;


    }



},50);









// ==========================
// ELEMENTI PAGINA
// ==========================


const home =
document.getElementById("home");


const ticket =
document.getElementById("ticket");


const birthday =
document.getElementById("birthday");



const yes =
document.getElementById("yes");


const no =
document.getElementById("no");







// ==========================
// APERTURA BIGLIETTINO 💌
// ==========================


start.addEventListener(
"click",
()=>{


    home.classList.add("hidden");


    ticket.classList.remove("hidden");


});







// ==========================
// NO CHE SCAPPA 😂
// ==========================


function scappa(){


    no.style.position = "fixed";


    no.style.left =
    Math.random()
    *
    (window.innerWidth - no.offsetWidth)
    + "px";



    no.style.top =
    Math.random()
    *
    (window.innerHeight - no.offsetHeight)
    + "px";


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








// ==========================
// TORTA 19 CANDELINE 🎂
// ==========================


const cake =
document.getElementById("cake");


const counter =
document.getElementById("counter");



let candeline = 19;



function creaTorta(){


    const base =
    document.createElement("div");


    base.className =
    "cake-base";


    cake.appendChild(base);




    const top =
    document.createElement("div");


    top.className =
    "cake-top";


    cake.appendChild(top);





    for(let i = 0; i < 19; i++){


        const candela =
        document.createElement("div");


        candela.className =
        "candle";



        candela.style.left =
        (25 + i * 11) + "px";



        const fiamma =
        document.createElement("span");


        fiamma.className =
        "flame";


        fiamma.innerHTML =
        "🔥";



        candela.appendChild(fiamma);



        candela.addEventListener(
        "click",
        ()=>{


            if(
            fiamma.classList.contains("off")
            )
            return;



            fiamma.classList.add("off");



            candeline--;



            counter.innerHTML =
            "Candeline rimaste: "
            + candeline;



            if(candeline === 0){


                setTimeout(()=>{


                    alert(
                    "✨ Esprimi un desiderio ❤️"
                    );


                },500);


            }


        });



        cake.appendChild(candela);


    }


}



creaTorta();








// ==========================
// CONFERMA ❤️
// ==========================


yes.addEventListener(
"click",
()=>{


    ticket.classList.add("hidden");


    birthday.classList.remove("hidden");


});
