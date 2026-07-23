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

const bgMusic = document.getElementById("bgMusic");
const voicePlayer = document.getElementById("voicePlayer");

const playButton = document.getElementById("playButton");
const startButton = document.getElementById("start");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const candlesContainer = document.getElementById("candles");
const counter = document.getElementById("counter");

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");

const constellationSky = document.getElementById("constellationSky");
const constellationMessage = document.getElementById("constellationMessage");

const heartFill = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");
const heartMessage = document.getElementById("heartMessage");

const letterHeart = document.getElementById("letterHeart");
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const letterPhoto = document.getElementById("letterPhoto");
const continueFromLetter = document.getElementById("continueFromLetter");

const fingerprintButton = document.getElementById("fingerprintButton");

const restart = document.getElementById("restart");

/* =====================================
   EMAILJS
===================================== */

emailjs.init({
    publicKey: "wSOh24DBQMubSgC8-"
});


/* =====================================
   VARIABILI
===================================== */

let loadingValue = 0;
let candlesOff = 0;
let heartProgress = 0;
let fingerprintTimer = null;


/* =====================================
   FUNZIONI GENERALI
===================================== */

function showPage(page){

    Object.values(pages).forEach(p=>{

        p.classList.add("hidden");

    });

    page.classList.remove("hidden");

}

/* =====================================
   INTRO
===================================== */

playButton.addEventListener("click", () => {

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {});

    showPage(pages.loading);

    startLoading();

});


/* =====================================
   LOADING
===================================== */

function startLoading(){

    loadingValue = 0;

    startButton.hidden = true;

    bar.style.width = "0%";

    percent.textContent = "0%";

    const timer = setInterval(() => {

        loadingValue++;

        bar.style.width = loadingValue + "%";

        percent.textContent = loadingValue + "%";

        if(loadingValue >= 100){

            clearInterval(timer);

            startButton.hidden = false;

        }

    },30);

}


/* =====================================
   INIZIA IL VIAGGIO
===================================== */

startButton.addEventListener("click", () => {

    showPage(pages.ticket);

});


/* =====================================
   BIGLIETTO
===================================== */

noButton.addEventListener("mouseenter", () => {

    noButton.style.position = "absolute";

    noButton.style.left = Math.random() * 70 + 10 + "%";

    noButton.style.top = Math.random() * 70 + 10 + "%";

});

/* =====================================
   CANDELINE
===================================== */

function createCandles(){

    candlesContainer.innerHTML = "";

    candlesOff = 0;

    counter.textContent = "Candeline rimaste: 19";

    for(let i=0; i<19; i++){

        const candle = document.createElement("div");
        candle.className = "candle";

        const flame = document.createElement("div");
        flame.className = "flame";
        flame.textContent = "🔥";

        candle.appendChild(flame);

        flame.addEventListener("click", () => {

            if(candle.classList.contains("off")) return;

            candle.classList.add("off");

            flame.remove();

            candlesOff++;

            counter.textContent =
                "Candeline rimaste: " + (19-candlesOff);

            if(candlesOff === 19){

                finishBirthday();

            }

        });

        candlesContainer.appendChild(candle);

    }

}


/* =====================================
   BIGLIETTO -> CANDELINE
===================================== */

yesButton.addEventListener("click", () => {

    showPage(pages.birthday);

    createCandles();

});


/* =====================================
   FINE COMPLEANNO
===================================== */

function finishBirthday(){

    createConfetti();

    setTimeout(() => {

        showPage(pages.wish);

    },2500);

}


/* =====================================
   CORIANDOLI
===================================== */

function createConfetti(){

    const area = document.getElementById("confetti");

    area.innerHTML = "";

    const colors = [

        "#ff5f98",
        "#ff8fb8",
        "#ffd166",
        "#7ed957",
        "#5ec8ff",
        "#c77dff",
       "#ffffff",
      "#fff5c3"

    ];

    for(let i=0;i<350;i++){

        const confetto = document.createElement("div");

       const w = 5 + Math.random()*6;
const h = 10 + Math.random()*12;

confetto.style.width = w + "px";
confetto.style.height = h + "px";

        confetto.className = "confetto";

        confetto.style.left = Math.random()*100 + "vw";

        confetto.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        confetto.style.animation =
    `fall ${2 + Math.random()*3}s linear forwards`;

        confetto.style.transform =
            `rotate(${Math.random()*360}deg)`;

        area.appendChild(confetto);

        setTimeout(()=>{

            confetto.remove();

        },5000);

    }

}
/* =====================================
   DESIDERIO
===================================== */

sendWish.addEventListener("click", () => {

    const wish = wishInput.value.trim();

    if(wish === ""){

        alert("Scrivi prima un desiderio ❤️");

        return;

    }

    // Invio EmailJS (se presente)

    if(typeof emailjs !== "undefined"){

        emailjs.send(

            "service_umr8t4k",

            "template_ag1927r",

            {

                message: wish

            }

        ).catch(error => {

            console.log("EmailJS:", error);

        });

    }

    showPage(pages.star);

    animateStar();

});


/* =====================================
   STELLA
===================================== */

const wishStar = document.getElementById("wishStar");

function animateStar(){

    wishStar.style.opacity = "1";

    wishStar.animate(

        [

            {

                transform:"translateY(0px) scale(1)",

                opacity:1

            },

            {

                transform:"translateY(-280px) scale(.2)",

                opacity:0

            }

        ],

        {

            duration:2500,

            easing:"ease-in-out",

            fill:"forwards"

        }

    );

    setTimeout(() => {

        showPage(pages.constellation);

        startConstellation();

    },2500);

}

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationPoints = [

    {x:17,y:24},
    {x:30,y:17},
    {x:43,y:30},
    {x:57,y:23},
    {x:71,y:37},
    {x:83,y:27},
    {x:72,y:57},
    {x:52,y:70},
    {x:31,y:59},
    {x:18,y:42}

];

const constellationMessages = [

    "Da quando sei entrata nella mia vita, ogni giorno ha una luce diversa. ❤️",

    "Ci sono miliardi di stelle... ma io continuo a scegliere te.",

    "Sei il posto in cui il mio cuore si sente finalmente a casa.",

    "Ogni tuo sorriso illumina più del cielo intero.",

    "Con te ogni istante diventa un ricordo bellissimo.",

    "Se dovessi ricominciare da capo, sceglierei ancora te.",

    "Il mio desiderio più bello sei sempre tu.",

    "Ogni battito del mio cuore parla di te.",

    "Ogni stella racconta un motivo per cui ti amo.",

    "E il motivo più grande... sei semplicemente tu. ❤️"

];

let constellationIndex = 0;

function createStarField(){

    const field = document.getElementById("starField");

    field.innerHTML = "";

    for(let i=0;i<100;i++){

        const star = document.createElement("div");

        star.className="sky-star";

        const size=2+Math.random()*4;

        star.style.width=size+"px";
        star.style.height=size+"px";

        star.style.left=Math.random()*100+"%";
        star.style.top=Math.random()*100+"%";

        star.style.animationDuration=
            (2+Math.random()*4)+"s";

        field.appendChild(star);

    }

}

function createConstellation(){

    const container=document.getElementById("constellation");

    container.innerHTML="";

    constellationPoints.forEach((point,index)=>{

        const star=document.createElement("div");

        star.className="constellation-star";

        star.style.left=point.x+"%";
        star.style.top=point.y+"%";

        star.dataset.index=index;

        container.appendChild(star);

    });

}

function startConstellation(){

    constellationIndex = 0;

    createStarField();
    createConstellation();

    const stars =
        document.querySelectorAll(".constellation-star");

    const message =
        document.getElementById("constellationMessage");

    const path =
        document.getElementById("constellationPath");

    message.textContent = "Tocca la prima stella ✨";
    message.classList.add("show");

    path.style.opacity = ".18";

    stars.forEach((star,index)=>{

        star.addEventListener("click",()=>{

            if(index!==constellationIndex) return;

            star.classList.add("active");

            message.textContent =
            constellationMessages[index];

            constellationIndex++;

            /* illumina sempre di più la costellazione */

            path.style.opacity =
                0.18 + constellationIndex*0.07;

            if(constellationIndex===stars.length){

                setTimeout(()=>{

                    message.innerHTML=

                    "<h2>✨ Ti amo infinitamente Sofia ✨</h2><br>Ogni stella del cielo mi porterà sempre da te. ❤️";

                },1200);

                setTimeout(()=>{

                    showPage(pages.heart);

                    initHeart();

                },5000);

            }

        });

    });

}

/* =====================================
   CUORE
===================================== */

function initHeart(){

    heartProgress = 0;

    heartFill.style.setProperty("--fill","0%");

    heartPercent.textContent = "0%";

    heartMessage.textContent = "Tocca il cuore ❤️";

}

heartFill.addEventListener("click",()=>{

    if(heartProgress>=10) return;

    heartProgress++;

    const percentValue = heartProgress*10;

    heartFill.style.setProperty("--fill",percentValue+"%");

    heartPercent.textContent = percentValue+"%";

    if(heartProgress===10){

        heartMessage.textContent="Il mio cuore è completamente tuo ❤️";

        setTimeout(()=>{

            showPage(pages.letter);

        },1200);

    }

});


/* =====================================
   LETTERA
===================================== */

const fullLetter=`

QUI INCOLLERAI LA LETTERA

`;

letterHeart.addEventListener("click",()=>{

    letterHeart.style.display="none";

    envelope.classList.add("open");

    setTimeout(()=>{

        paper.classList.add("show");

        typeLetter();

    },800);

});

function typeLetter(){

    let i=0;

    letterText.textContent="";

    const timer=setInterval(()=>{

        letterText.textContent+=fullLetter.charAt(i);

        i++;

        if(i>=fullLetter.length){

            clearInterval(timer);

            letterPhoto.classList.remove("hidden");

            continueFromLetter.classList.remove("hidden");

        }

    },28);

}

continueFromLetter.addEventListener("click",()=>{

    showPage(pages.fingerprint);

});


/* =====================================
   IMPRONTA
===================================== */

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

    },1200);

    setTimeout(()=>{

        signature.classList.remove("hidden");

    },2200);

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


