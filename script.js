/* =====================================
   PROJECT AURORA v5
   SCRIPT PARTE 1
===================================== */



// =====================================
// CUORI CADENTI ❤️✨
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
    (15 + Math.random()*30)+"px";



    cuore.style.animationDuration =
    (4 + Math.random()*6)+"s";



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



if(bar && percent && start){


    const caricamento =
    setInterval(()=>{


        valore++;


        bar.style.width =
        valore+"%";


        percent.innerHTML =
        valore+"%";



        if(valore >= 100){


            clearInterval(caricamento);



            percent.innerHTML =
            "✨ È pronto per te 🤍";



            start.hidden=false;


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
// INIZIO VIAGGIO
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


    if(!no)return;


    no.style.position="fixed";


    no.style.left =
    Math.random() *
    (window.innerWidth-no.offsetWidth)
    +"px";



    no.style.top =
    Math.random() *
    (window.innerHeight-no.offsetHeight)
    +"px";


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
// 19 CANDELINE 🕯️
// =====================================


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;



function creaCandeline(){


    if(!candlesBox)return;



    for(let i=0;i<19;i++){


        const candela =
        document.createElement("div");


        candela.className="candle";



        const fiamma =
        document.createElement("span");


        fiamma.className="flame";


        fiamma.innerHTML="🔥";



        candela.appendChild(fiamma);




        candela.addEventListener("click",()=>{


            if(fiamma.classList.contains("off"))
            return;



            fiamma.classList.add("off");



            const fumo =
            document.createElement("span");


            fumo.className="smoke";


            fumo.innerHTML="💨";


            candela.appendChild(fumo);




            candeline--;



            counter.innerHTML =
            "Candeline rimaste: "
            +candeline;



            if(candeline===0){


                festaFinita();


            }


        });



        candlesBox.appendChild(candela);


    }


}



creaCandeline();









// =====================================
// APERTURA COMPLEANNO
// =====================================


if(yes){


    yes.addEventListener("click",()=>{


        ticket.classList.add("hidden");


        birthday.classList.remove("hidden");


    });
/* =====================================
   PROJECT AURORA v5
   SCRIPT PARTE 2
===================================== */



// =====================================
// FESTA FINITA 🎉
// =====================================


function festaFinita(){


    creaConfetti();



    setTimeout(()=>{


        const birthday =
        document.getElementById("birthday");


        const wishPage =
        document.getElementById("wishPage");



        if(birthday)
        birthday.classList.add("hidden");



        if(wishPage)
        wishPage.classList.remove("hidden");



    },2500);


}









// =====================================
// CORIANDOLI 🎉
// =====================================


function creaConfetti(){


    let area =
    document.getElementById("confetti");



    if(!area){


        area =
        document.createElement("div");


        area.id="confetti";


        document.body.appendChild(area);


    }





    const colori=[

        "#ff4d88",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff8fab"

    ];





    for(let i=0;i<120;i++){


        const pezzo =
        document.createElement("div");



        pezzo.className=
        "confetti-piece";



        pezzo.style.left =
        Math.random()*100+"vw";



        pezzo.style.background =
        colori[
            Math.floor(
                Math.random()*colori.length
            )
        ];



        pezzo.style.animationDuration =
        (3+Math.random()*3)+"s";



        pezzo.style.transform =
        "rotate("+
        Math.random()*360+
        "deg)";



        area.appendChild(pezzo);




        setTimeout(()=>{


            pezzo.remove();


        },6000);



    }


}









// =====================================
// DESIDERIO ✨
// =====================================


const sendWish =
document.getElementById("sendWish");


const wishInput =
document.getElementById("wishInput");



const wishPage =
document.getElementById("wishPage");


const starPage =
document.getElementById("starPage");


const letterPage =
document.getElementById("letterPage");



const letterText =
document.getElementById("letterText");








if(sendWish){


    sendWish.addEventListener("click",()=>{


        let desiderio =
        wishInput.value.trim();




        if(desiderio===""){


            desiderio =
            "Un desiderio pieno di amore ❤️";


        }





        localStorage.setItem(
            "auroraWish",
            desiderio
        );



        wishPage.classList.add("hidden");



        starPage.classList.remove("hidden");



        setTimeout(()=>{


            mostraLettera(desiderio);


        },4000);



    });


}









// =====================================
// LETTERA FINALE 💌
// =====================================


function mostraLettera(desiderio){



    starPage.classList.add("hidden");



    letterPage.classList.remove("hidden");




    if(letterText){


        letterText.innerHTML = `


        <p>
        Amore mio 🤍
        </p>


        <p>
        Questo piccolo viaggio è stato creato
        solo per vederti sorridere.
        </p>


        <p>
        Il tuo desiderio:
        </p>


        <p>
        ✨ ${desiderio}
        </p>


        <p>
        Ti auguro tutto il meglio del mondo 🤍
        </p>


        `;


    }



}

}
