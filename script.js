/* =====================================
   PROJECT AURORA
   SCRIPT PULITO v2.0
===================================== */



// =====================================
// CUORI CADENTI ❤️🤍😍✨
// =====================================


const hearts = document.getElementById("hearts");


const simboli = [
    "❤️",
    "🤍",
    "😍",
    "💕",
    "💗",
    "✨"
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







// =====================================
// CARICAMENTO ⏳
// =====================================


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


        start.hidden = false;


    }


},50);









// =====================================
// PAGINE
// =====================================


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







// =====================================
// INIZIO VIAGGIO 💌
// =====================================


start.addEventListener(
"click",
()=>{


    home.classList.add("hidden");


    ticket.classList.remove("hidden");


});








// =====================================
// NO SCAPPA 😂
// =====================================


function scappa(){


    no.style.position = "fixed";


    no.style.left =
    Math.random()
    *
    (window.innerWidth - 120)
    + "px";



    no.style.top =
    Math.random()
    *
    (window.innerHeight - 80)
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









// =====================================
// TORTA 🎂
// =====================================


const cake =
document.getElementById("cake");


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;






function creaTorta(){



    if(!cake || !candlesBox)
    return;



    const base =
    document.createElement("div");


    base.className =
    "cake-base";


    cake.appendChild(base);





    const cream =
    document.createElement("div");


    cream.className =
    "cake-cream";


    cake.appendChild(cream);







    const posizioni = [

        [90,125],
        [135,125],
        [180,125],
        [225,125],

        [65,150],
        [110,150],
        [155,150],
        [200,150],
        [245,150],

        [45,175],
        [90,175],
        [135,175],
        [180,175],
        [225,175],
        [270,175],

        [90,200],
        [135,200],
        [180,200],
        [225,200]

    ];






    posizioni.forEach((pos)=>{


        const candela =
        document.createElement("div");



        candela.className =
        "candle";



        candela.style.left =
        pos[0] + "px";


        candela.style.bottom =
        pos[1] + "px";






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



            const fumo =
            document.createElement("span");


            fumo.className =
            "smoke";


            fumo.innerHTML =
            "💨";


            candela.appendChild(fumo);




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


                },800);


            }


        });



        candlesBox.appendChild(candela);



    });



}



creaTorta();









// =====================================
// SI ❤️
// =====================================


yes.addEventListener(
"click",
()=>{


    ticket.classList.add("hidden");


    birthday.classList.remove("hidden");


});
