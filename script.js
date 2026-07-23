/* =====================================
   ELEMENTI
===================================== */

const pages = {

    intro: document.getElementById("introPage"),
    loading: document.getElementById("loadingPage"),
    ticket: document.getElementById("ticketPage"),
    birthday: document.getElementById("birthdayPage"),
    wish: document.getElementById("wishPage"),
    star: document.getElementById("starPage"),
    constellation: document.getElementById("constellationPage"),
    heart: document.getElementById("heartPage"),
    letter: document.getElementById("letterPage"),
    fingerprint: document.getElementById("fingerprintPage"),
    voice: document.getElementById("voicePage"),
    final: document.getElementById("finalPage")

};


/* =====================================
   AUDIO
===================================== */

const bgMusic = document.getElementById("bgMusic");
const voicePlayer = document.getElementById("voicePlayer");


/* =====================================
   BOTTONI
===================================== */

const playButton = document.getElementById("playButton");
const startButton = document.getElementById("start");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const sendWish = document.getElementById("sendWish");
const restart = document.getElementById("restart");


/* =====================================
   LOADING
===================================== */

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");


/* =====================================
   VARIABILI
===================================== */

let loadingValue = 0;

let candlesOff = 0;

let heartProgress = 0;

let fingerprintCompleted = false;


/* =====================================
   EMAIL JS
===================================== */

// Inserire qui la Public Key

// emailjs.init("PUBLIC_KEY");


/* =====================================
   FUNZIONI BASE
===================================== */

function showPage(page){

    Object.values(pages).forEach(p=>p.classList.add("hidden"));

    page.classList.remove("hidden");

}


/* =====================================
   INTRO
===================================== */

playButton.addEventListener("click",()=>{

    bgMusic.volume=.35;

    bgMusic.play();

    showPage(pages.loading);

    startLoading();

});


function startLoading(){

    loadingValue=0;

    const timer=setInterval(()=>{

        loadingValue++;

        bar.style.width=loadingValue+"%";

        percent.textContent=loadingValue+"%";

        if(loadingValue>=100){

            clearInterval(timer);

            startButton.hidden=false;

        }

    },35);

}


startButton.addEventListener("click",()=>{

    showPage(pages.ticket);

});

/* =====================================
   BIGLIETTO
===================================== */

yesButton.addEventListener("click",()=>{

    showPage(pages.birthday);

    createCandles();

});

noButton.addEventListener("mouseover",()=>{

    noButton.style.position="absolute";

    noButton.style.left=Math.random()*70+10+"%";

    noButton.style.top=Math.random()*70+10+"%";

});


/* =====================================
   CANDELINE
===================================== */

const candlesContainer=document.getElementById("candles");
const counter=document.getElementById("counter");

function createCandles(){

    candlesContainer.innerHTML="";

    candlesOff=0;

    counter.textContent="Candeline rimaste: 19";

    for(let i=0;i<19;i++){

        const candle=document.createElement("div");

        candle.className="candle";

        const flame=document.createElement("span");

        flame.className="flame";

        flame.textContent="🔥";

        candle.appendChild(flame);

        flame.addEventListener("click",(e)=>{

            e.stopPropagation();

            if(candle.classList.contains("off")) return;

            candle.classList.add("off");

            flame.remove();

            candlesOff++;

            counter.textContent=
            "Candeline rimaste: "+(19-candlesOff);

            if(candlesOff===19){

                finishBirthday();

            }

        });

        candlesContainer.appendChild(candle);

    }

}


/* =====================================
   FINE COMPLEANNO
===================================== */

function finishBirthday(){

    createConfetti();

    setTimeout(()=>{

        showPage(pages.wish);

    },2200);

}


/* =====================================
   CORIANDOLI
===================================== */

function createConfetti(){

    const area=document.getElementById("confetti");

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.textContent="🎉";

        c.style.position="absolute";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-50px";

        c.style.fontSize=(18+Math.random()*14)+"px";

        c.style.animation=
        `fall ${2+Math.random()*2}s linear forwards`;

        area.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

const wishInput=document.getElementById("wishInput");

sendWish.addEventListener("click",()=>{

    const wish=wishInput.value.trim();

    if(wish===""){

        alert("Scrivi prima un desiderio ❤️");

        return;

    }

    /* =====================================
       EMAIL JS
    ===================================== */

    emailjs.send(

        "SERVICE_ID",

        "TEMPLATE_ID",

        {

            message:wish

        }

    );

    showPage(pages.star);

    animateStar();

});


/* =====================================
   STELLA
===================================== */

const wishStar=document.getElementById("wishStar");

function animateStar(){

    wishStar.animate(

        [

            {

                transform:

                "translateY(0px) scale(1)",

                opacity:1

            },

            {

                transform:

                "translateY(-280px) scale(.3)",

                opacity:0

            }

        ],

        {

            duration:3000,

            easing:"ease-in-out",

            fill:"forwards"

        }

    );

    setTimeout(()=>{

        showPage(pages.constellation);

        createConstellation();

    },3000);

}


/* =====================================
   COSTELLAZIONE
===================================== */

const constellationSky=document.getElementById("constellationSky");

const constellationMessage=

document.getElementById(

    "constellationMessage"

);

function createConstellation(){

    constellationSky.innerHTML="";

    constellationMessage.classList.add("hidden");

    for(let i=0;i<12;i++){

        const star=document.createElement("div");

        star.className="star";

        star.textContent="⭐";

        star.style.left=

        Math.random()*280+"px";

        star.style.top=

        Math.random()*280+"px";

        star.addEventListener("click",()=>{

            constellationMessage.textContent=

            "Ogni tuo desiderio illuminerà sempre il mio cielo. ❤️";

            constellationMessage.classList.remove("hidden");

            setTimeout(()=>{

                showPage(pages.heart);

                initHeart();

            },2200);

        });

        constellationSky.appendChild(star);

    }

}

/* =====================================
   CUORE
===================================== */

const heartFill=document.getElementById("heartFill");

const heartPercent=document.getElementById("heartPercent");

const heartMessage=document.getElementById("heartMessage");

const heartMessages=[

    "Ogni tuo tocco mi rende più felice ❤️",

    "Sei il regalo più bello ✨",

    "Con te ogni giorno è speciale 🥰",

    "Mi fai battere il cuore 💖",

    "Sempre più pieno d'amore ❤️",

    "Quasi fatto... 🤍",

    "Non smettere 🥹",

    "Ci siamo quasi ✨",

    "Ancora un pochino ❤️",

    "Ti amo."

];

function initHeart(){

    heartProgress=0;

    heartPercent.textContent="0%";

    heartMessage.textContent="Tocca il cuore... 🤍";

    heartFill.style.pointerEvents="auto";

    heartFill.classList.remove("completed");

    heartFill.style.setProperty("--fill","0%");

}


heartFill.addEventListener("click",()=>{

    if(heartProgress>=10) return;

    heartProgress++;

    const percentValue=heartProgress*10;

    heartPercent.textContent=percentValue+"%";

    heartFill.style.setProperty(

        "--fill",

        percentValue+"%"

    );

    heartMessage.textContent=

        heartMessages[heartProgress-1];

    if(heartProgress===10){

        finishHeart();

    }

});


/* =====================================
   CUORE COMPLETATO
===================================== */

function finishHeart(){

    heartFill.classList.add("completed");

    createHeartBurst();

    setTimeout(()=>{

        showPage(pages.letter);

    },1800);

}


/* =====================================
   ESPLOSIONE CUORI
===================================== */

function createHeartBurst(){

    for(let i=0;i<24;i++){

        const h=document.createElement("div");

        h.textContent="🩷";

        h.style.position="fixed";

        h.style.left="50%";

        h.style.top="50%";

        h.style.fontSize="24px";

        h.style.pointerEvents="none";

        h.style.zIndex="999";

        document.body.appendChild(h);

        const angle=Math.random()*360;

        const distance=120+Math.random()*120;

        h.animate(

            [

                {

                    transform:

                    "translate(-50%,-50%) scale(1)",

                    opacity:1

                },

                {

                    transform:

                    `translate(
                        calc(-50% + ${Math.cos(angle*Math.PI/180)*distance}px),
                        calc(-50% + ${Math.sin(angle*Math.PI/180)*distance}px)
                    ) scale(.3)`,

                    opacity:0

                }

            ],

            {

                duration:1200,

                easing:"ease-out"

            }

        );

        setTimeout(()=>{

            h.remove();

        },1200);

    }

}

/* =====================================
   LETTERA
===================================== */

const letterHeart=document.getElementById("letterHeart");
const letterHint=document.getElementById("letterHint");
const envelope=document.getElementById("envelope");
const paper=document.getElementById("paper");
const letterText=document.getElementById("letterText");
const letterPhoto=document.getElementById("letterPhoto");
const continueFromLetter=document.getElementById("continueFromLetter");

const letterContent=`...QUI INCOLLERAI LA TUA LETTERA...`;

letterHeart.addEventListener("click",()=>{

    letterHeart.style.display="none";
    letterHint.style.display="none";

    envelope.classList.add("open");

    setTimeout(()=>{

        paper.classList.add("show");

        typeLetter();

    },900);

});

function typeLetter(){

    letterText.textContent="";

    let i=0;

    const timer=setInterval(()=>{

        letterText.textContent+=letterContent.charAt(i);

        i++;

        if(i>=letterContent.length){

            clearInterval(timer);

            letterPhoto.classList.remove("hidden");

            continueFromLetter.classList.remove("hidden");

        }

    },35);

}

continueFromLetter.addEventListener("click",()=>{

    showPage(pages.fingerprint);

});


/* =====================================
   IMPRONTA
===================================== */

const fingerprintButton=document.getElementById("fingerprintButton");

let fingerprintTimer;

fingerprintButton.addEventListener("mousedown",startFingerprint);
fingerprintButton.addEventListener("touchstart",startFingerprint);

fingerprintButton.addEventListener("mouseup",stopFingerprint);
fingerprintButton.addEventListener("mouseleave",stopFingerprint);
fingerprintButton.addEventListener("touchend",stopFingerprint);

function startFingerprint(){

    fingerprintTimer=setTimeout(()=>{

        showPage(pages.voice);

    },1800);

}

function stopFingerprint(){

    clearTimeout(fingerprintTimer);

}


/* =====================================
   VOCALE
===================================== */

voicePlayer.addEventListener("ended",()=>{

    showPage(pages.final);

    showFinal();

});


/* =====================================
   FINALE
===================================== */

const polaroid=document.getElementById("polaroid");
const finalLove=document.getElementById("finalLove");
const signature=document.getElementById("signature");

function showFinal(){

    polaroid.classList.remove("hidden");

    setTimeout(()=>{

        finalLove.classList.remove("hidden");

    },1000);

    setTimeout(()=>{

        signature.classList.remove("hidden");

    },1800);

    setTimeout(()=>{

        restart.classList.remove("hidden");

    },4200);

}


/* =====================================
   RICOMINCIA
===================================== */

restart.addEventListener("click",()=>{

    location.reload();

});

