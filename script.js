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
   VARIABILI
===================================== */

let loadingValue = 0;
let candlesOff = 0;
let heartProgress = 0;
let fingerprintTimer = null;


/* =====================================
   EMAILJS
===================================== */

// emailjs.init("LA_TUA_PUBLIC_KEY");


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

yesButton.addEventListener("click", () => {

    showPage(pages.birthday);

});

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

    for(let i=0;i<120;i++){

        const confetto = document.createElement("div");

        confetto.className = "confetto";

        confetto.textContent = "🎉";

        confetto.style.left = Math.random()*100 + "vw";

        confetto.style.top = "-40px";

        confetto.style.fontSize =
            (18 + Math.random()*12) + "px";

        confetto.style.animation =
            `fall ${2 + Math.random()*2}s linear forwards`;

        area.appendChild(confetto);

        setTimeout(()=>{

            confetto.remove();

        },4000);

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

            "SERVICE_ID",

            "TEMPLATE_ID",

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

        createConstellation();

    },2500);

}


/* =====================================
   COSTELLAZIONE
===================================== */

function createConstellation(){

    constellationSky.innerHTML = "";

    constellationMessage.classList.add("hidden");

    for(let i=0;i<12;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.textContent = "⭐";

        star.style.left = Math.random()*280 + "px";

        star.style.top = Math.random()*280 + "px";

        star.addEventListener("click", () => {

            constellationMessage.textContent =
            "Ogni tuo desiderio illuminerà sempre il mio cielo. ❤️";

            constellationMessage.classList.remove("hidden");

            setTimeout(() => {

                showPage(pages.heart);

                initHeart();

            },1800);

        });

        constellationSky.appendChild(star);

    }

}

