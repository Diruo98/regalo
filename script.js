/* =====================================
   PROJECT AURORA
   SCRIPT COMPLETO v3.0
===================================== */



// =====================================
// SFONDO EMOJI CADENTI ❤️✨
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
        Math.floor(Math.random()*simboli.length)
    ];



    cuore.style.left =
    Math.random()*100 + "vw";



    cuore.style.fontSize =
    (15 + Math.random()*30) + "px";



    cuore.style.animationDuration =
    (4 + Math.random()*6) + "s";



    hearts.appendChild(cuore);



    setTimeout(()=>{

        cuore.remove();

    },10000);


}



setInterval(creaCuore,250);









// =====================================
// CARICAMENTO ⏳
// =====================================


const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const start = document.getElementById("start");



let valore = 0;



if(bar && percent && start){


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
            "✨ È pronto per te 🤍";



            start.hidden = false;


        }



    },50);


}









// =====================================
// CAMBIO PAGINE 💌
// =====================================


const home = document.getElementById("home");

const ticket = document.getElementById("ticket");

const birthday = document.getElementById("birthday");

const yes = document.getElementById("yes");

const no = document.getElementById("no");





if(start && ticket && home){


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


    no.style.position = "fixed";


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


const cake =
document.getElementById("cake");


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;





function creaTorta(){


    if(!candlesBox || !counter)
    return;



    const posizioni = [

        [90,150],
        [140,150],
        [190,150],
        [240,150],

        [60,110],
        [110,110],
        [160,110],
        [210,110],
        [260,110],

        [80,70],
        [130,70],
        [180,70],
        [230,70],
        [280,70],

        [120,35],
        [170,35],
        [220,35],
        [270,35],
        [320,35]

    ];





    posizioni.forEach((pos)=>{


        const candela =
        document.createElement("div");



        candela.className =
        "candle";



        candela.style.left =
        pos[0]+"px";


        candela.style.bottom =
        pos[1]+"px";





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


                    birthdaySuccess();


                }


            }
        );



        candlesBox.appendChild(candela);



    });



}





function birthdaySuccess(){


    setTimeout(()=>{


        alert(
        "✨ Esprimi un desiderio 🤍"
        );


    },700);


}



creaTorta();









// =====================================
// SI ❤️
// =====================================


if(yes && ticket && birthday){


    yes.addEventListener(
        "click",
        ()=>{


            ticket.classList.add("hidden");


            birthday.classList.remove("hidden");


        }
    );


}
