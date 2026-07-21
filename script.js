/* =====================================
   PROJECT AURORA
   SCRIPT v4.0
===================================== */



// =====================================
// SFONDO CUORI ❤️✨
// =====================================


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


    if(!hearts) return;



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
// BARRA CARICAMENTO ⏳
// =====================================


const bar = document.getElementById("bar");

const percent = document.getElementById("percent");

const start = document.getElementById("start");



let valore = 0;



if(bar && percent && start){


    const caricamento = setInterval(()=>{


        valore++;


        bar.style.width =
        valore + "%";


        percent.innerHTML =
        valore + "%";



        if(valore >= 100){


            clearInterval(caricamento);



            percent.innerHTML =
            "✨ È pronto per te 🤍";



            start.hidden = false;


        }


    },50);


}









// =====================================
// PAGINE 💌
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
// INIZIA VIAGGIO ✨
// =====================================


if(start){


    start.addEventListener("click",()=>{


        home.classList.add("hidden");


        ticket.classList.remove("hidden");


    });


}









// =====================================
// NO CHE SCAPPA 😂
// =====================================


function scappa(){


    if(!no) return;



    no.style.position =
    "fixed";



    no.style.left =
    Math.random() *
    (window.innerWidth - 120)
    + "px";



    no.style.top =
    Math.random() *
    (window.innerHeight - 80)
    + "px";


}



if(no){


    no.addEventListener(
        "mouseenter",
        scappa
    );



    no.addEventListener(
        "touchstart",
        (e)=>{


            e.preventDefault();


            scappa();


        }
    );


}









// =====================================
// TORTA COMPLEANNO 🎂
// =====================================


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;


let tortaCreata = false;







function creaTorta(){


    if(
        !candlesBox ||
        !counter ||
        tortaCreata
    )
    return;



    tortaCreata = true;



    const posizioni = [


        [100,150],
        [150,150],
        [200,150],
        [250,150],


        [80,110],
        [125,110],
        [170,110],
        [215,110],
        [260,110],


        [70,70],
        [115,70],
        [160,70],
        [205,70],
        [250,70],


        [120,35],
        [165,35],
        [210,35],
        [255,35],
        [300,35]

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
                    "✨ Esprimi un desiderio 🤍"
                    );


                },700);


            }


        });



        candlesBox.appendChild(candela);


    });


}









// =====================================
// RISPOSTA SI ❤️
// =====================================


if(yes){


    yes.addEventListener(
    "click",
    ()=>{


        ticket.classList.add("hidden");


        birthday.classList.remove("hidden");


        creaTorta();


    });


}
