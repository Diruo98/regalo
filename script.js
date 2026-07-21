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


  home.classList.add("hidden");

ticket.classList.add("hidden");

birthday.classList.remove("hidden");
    );

   // ==========================
// TORTA 19 CANDELINE 🎂
// ==========================


const birthday =
document.getElementById("birthday");


const cake =
document.getElementById("cake");


const counter =
document.getElementById("counter");



let candeline = 19;





function creaTorta(){


    // base torta


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





    // crea 19 candeline


    for(let i = 0; i < 19; i++){


        const candle =
        document.createElement("div");


        candle.className =
        "candle";



        candle.style.left =
        (25 + i*11) + "px";



        const flame =
        document.createElement("span");


        flame.className =
        "flame";


        flame.innerHTML =
        "🔥";



        candle.appendChild(flame);



        candle.addEventListener(
        "click",
        ()=>{


            if(flame.classList.contains("off"))
            return;



            flame.classList.add("off");


            candeline--;



            counter.innerHTML =
            "Candeline rimaste: "
            +
            candeline;



            if(candeline === 0){


                setTimeout(()=>{


                    alert(
                    "✨ Esprimi un desiderio ❤️"
                    );


                },500);


            }


        });



        cake.appendChild(candle);


    }


}



creaTorta();


});
