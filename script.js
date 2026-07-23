/*==================================================
    PER SOFI ❤️
    SCRIPT DEFINITIVO
==================================================*/


/*==================================================
    ELEMENTI PRINCIPALI
==================================================*/

const pages = document.querySelectorAll(".page");

const introPage = document.getElementById("introPage");
const homePage = document.getElementById("home");
const ticketPage = document.getElementById("ticket");
const birthdayPage = document.getElementById("birthday");
const wishPage = document.getElementById("wishPage");
const starPage = document.getElementById("starPage");
const constellationPage = document.getElementById("constellationPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const fingerprintPage = document.getElementById("fingerprintPage");
const voicePage = document.getElementById("voicePage");
const finalPage = document.getElementById("finalPage");


/*==================================================
    AUDIO
==================================================*/

const bgMusic = document.getElementById("bgMusic");
const voicePlayer = document.getElementById("voicePlayer");


/*==================================================
    INTRO
==================================================*/

const playButton = document.getElementById("playButton");


/*==================================================
    HOME
==================================================*/

const loadingBar = document.getElementById("bar");
const loadingPercent = document.getElementById("percent");
const startButton = document.getElementById("start");


/*==================================================
    VARIABILI GLOBALI
==================================================*/

let loadingValue = 0;

let candlesLeft = 19;

let heartValue = 0;

let letterIndex = 0;


/*==================================================
    CAMBIO PAGINA
==================================================*/

function showPage(id){

    pages.forEach(page=>{

        page.classList.add("hidden");

    });

    document.getElementById(id).classList.remove("hidden");

}


/*==================================================
    AVVIO MUSICA
==================================================*/

function startMusic(){

    bgMusic.volume = 0.35;

    bgMusic.play().catch(()=>{});

}


/*==================================================
    INTRO
==================================================*/

playButton.addEventListener("click",()=>{

    startMusic();

    showPage("home");

    startLoading();

});


/*==================================================
    LOADING
==================================================*/

function startLoading(){

    loadingValue = 0;

    loadingBar.style.width = "0%";

    loadingPercent.textContent = "0%";

    const interval = setInterval(()=>{

        loadingValue++;

        loadingBar.style.width = loadingValue + "%";

        loadingPercent.textContent = loadingValue + "%";

        if(loadingValue>=100){

            clearInterval(interval);

            setTimeout(()=>{

                startButton.hidden = false;

            },500);

        }

    },35);

}


/*==================================================
    INIZIA IL VIAGGIO
==================================================*/

startButton.addEventListener("click",()=>{

    showPage("ticket");

});

/*==================================================
    BIGLIETTO
==================================================*/

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", () => {

    showPage("birthday");

    createCandles();

});

noButton.addEventListener("mouseenter", () => {

    const x = Math.random() * 260 - 130;
    const y = Math.random() * 120 - 60;

    noButton.style.transform = `translate(${x}px, ${y}px)`;

});

noButton.addEventListener("mouseleave", () => {

    setTimeout(() => {

        noButton.style.transform = "translate(0,0)";

    }, 700);

});


/*==================================================
    CANDELINE
==================================================*/

const candlesContainer = document.getElementById("candles");
const counter = document.getElementById("counter");

function createCandles(){

    candlesContainer.innerHTML = "";

    candlesLeft = 19;

    updateCounter();

    for(let i = 0; i < 19; i++){

        const candle = document.createElement("div");

        candle.className = "candle";

        /* 🔥 FIAMMA */

        const flame = document.createElement("span");

        flame.className = "flame";

        flame.textContent = "🔥";

        candle.appendChild(flame);

        candle.addEventListener("click", () => {

            if(candle.classList.contains("off")) return;

            candle.classList.add("off");

            flame.remove();

            createSmoke(candle);

            candlesLeft--;

            updateCounter();

            if(candlesLeft === 0){

                birthdayCompleted();

            }

        });

        candlesContainer.appendChild(candle);

    }

}


/*==================================================
    CONTATORE
==================================================*/

function updateCounter(){

    counter.textContent =
        `Candeline rimaste: ${candlesLeft}`;

}


/*==================================================
    FUMO
==================================================*/

function createSmoke(candle){

    const smoke = document.createElement("span");

    smoke.className = "smoke";

    smoke.textContent = "☁️";

    candle.appendChild(smoke);

    setTimeout(() => {

        smoke.remove();

    }, 1200);

}


/*==================================================
    FINE TORTA
==================================================*/

function birthdayCompleted(){

    createConfettiBurst();

    document
        .querySelector(".birthday-box")
        .classList.add("fade-out");

    setTimeout(() => {

        document
            .querySelector(".birthday-box")
            .classList.remove("fade-out");

        showPage("wishPage");

    }, 2200);

}


/*==================================================
    CORIANDOLI
==================================================*/

function createConfettiBurst(){

    const confetti = document.getElementById("confetti");

    const colors = [

        "#ff5f96",
        "#ff87b5",
        "#ffd6e6",
        "#ffffff",
        "#ffe36e"

    ];

    for(let i = 0; i < 180; i++){

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        piece.style.transform =
            `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}

/*==================================================
    DESIDERIO
==================================================*/

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");

sendWish.addEventListener("click", () => {

    if (wishInput.value.trim() === "") {

        alert("Scrivi prima un desiderio 🤍");

        return;

    }

    showPage("starPage");

    launchStar();

});


/*==================================================
    STELLA
==================================================*/

const wishStar = document.getElementById("wishStar");

function launchStar(){

    wishStar.style.animation = "none";

    void wishStar.offsetWidth;

    wishStar.style.animation = "starFly 3s linear forwards";

    setTimeout(() => {

        showPage("constellationPage");

        generateConstellation();

    },3000);

}


/*==================================================
    COSTELLAZIONE
==================================================*/

const constellationSky =
document.getElementById("constellationSky");

const constellationMessage =
document.getElementById("constellationMessage");


const romanticMessages = [

`✨<br><br>
Qualunque stella tu scelga...
per me sarà sempre la più bella. ❤️`,

`⭐<br><br>
Tra milioni di stelle,
sceglierei sempre te. ❤️`,

`🌌<br><br>
Ogni desiderio,
in fondo,
porta sempre il tuo nome. 🤍`,

`💫<br><br>
La stella più luminosa
non è nel cielo...
sei tu. ❤️`,

`✨<br><br>
Ovunque guarderò il cielo,
penserò sempre a noi. 🤍`

];


/*==================================================
    CREA STELLE
==================================================*/

function generateConstellation(){

    constellationSky.innerHTML = "";

    constellationMessage.classList.add("hidden");

    for(let i=0;i<22;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.textContent = "⭐";

        star.style.left =
            Math.random()*95+"%";

        star.style.top =
            Math.random()*90+"%";

        star.style.animationDelay =
            (Math.random()*2)+"s";

        star.addEventListener("click",()=>{

            selectStar(star);

        });

        constellationSky.appendChild(star);

    }

}


/*==================================================
    SCELTA STELLA
==================================================*/

function selectStar(selectedStar){

    document
        .querySelectorAll(".star")
        .forEach(star=>{

            star.style.pointerEvents="none";

        });

    selectedStar.style.transform =
        "scale(1.8)";

    selectedStar.style.filter =
        "drop-shadow(0 0 18px white)";

    constellationMessage.innerHTML =
        romanticMessages[
            Math.floor(
                Math.random()*romanticMessages.length
            )
        ];

    constellationMessage.classList.remove("hidden");

    setTimeout(()=>{

        showPage("heartPage");

    },2600);

}

/*==================================================
    CUORE
==================================================*/

const heart = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");
const heartMessage = document.getElementById("heartMessage");

const heartMessages = [

    "Ogni tocco mi fa sorridere 🤍",

    "Continua... ❤️",

    "Sei sempre più vicina al mio cuore.",

    "Ormai sei dentro di me 🤍",

    "Metà del mio cuore è tua.",

    "Non fermarti adesso ❤️",

    "Ci siamo quasi...",

    "Ancora pochissimo.",

    "Un ultimo tocco... ❤️",

    "Hai conquistato tutto il mio cuore ❤️"

];

heart.addEventListener("click", fillHeart);

function fillHeart(){

    if(heartValue >= 100) return;

    heartValue += 10;

    if(heartValue > 100){

        heartValue = 100;

    }

    heart.style.setProperty("--fill", heartValue + "%");

    heartPercent.textContent = heartValue + "%";

    heartMessage.textContent =
        heartMessages[(heartValue / 10) - 1];

    /* Battito */

    heart.classList.remove("pulse");

    void heart.offsetWidth;

    heart.classList.add("pulse");

    /* Fine */

    if(heartValue === 100){

        createMiniHearts();

        setTimeout(()=>{

            showPage("letterPage");

        },1000);

    }

}


/*==================================================
    CUORICINI
==================================================*/

function createMiniHearts(){

    for(let i=0;i<18;i++){

        const mini=document.createElement("div");

        mini.className="mini-heart";

        mini.textContent="❤️";

        mini.style.left=
            (window.innerWidth/2-20+Math.random()*40)+"px";

        mini.style.top=
            (window.innerHeight/2)+"px";

        mini.style.fontSize=
            (18+Math.random()*12)+"px";

        mini.style.position="fixed";

        mini.style.pointerEvents="none";

        mini.style.zIndex="999";

        mini.style.transition="1.6s";

        document.body.appendChild(mini);

        requestAnimationFrame(()=>{

            mini.style.transform=
                `translate(${Math.random()*300-150}px,-${200+Math.random()*180}px)
                 rotate(${Math.random()*360}deg)`;

            mini.style.opacity="0";

        });

        setTimeout(()=>{

            mini.remove();

        },1700);

    }

}


/*==================================================
    LETTERA
==================================================*/

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const continueButton = document.getElementById("continueFromLetter");


const letter = `

Qui andrà la tua lettera definitiva.

Scriveremo tutto alla fine.

Così potrai modificarla con calma.

❤️

`;


/*==================================================
    APERTURA BUSTA
==================================================*/

envelope.addEventListener("click",openLetter);

function openLetter(){

    envelope.removeEventListener("click",openLetter);

    envelope.classList.add("open");

    setTimeout(()=>{

        paper.classList.add("show");

        startTyping();

    },700);

}


/*==================================================
    MACCHINA DA SCRIVERE
==================================================*/

function startTyping(){

    letterIndex=0;

    letterText.innerHTML="";

    continueButton.classList.add("hidden");

    writeCharacter();

}

function writeCharacter(){

    if(letterIndex>=letter.length){

        continueButton.classList.remove("hidden");

        return;

    }

    letterText.innerHTML += letter.charAt(letterIndex);

    letterIndex++;

    setTimeout(writeCharacter,30);

}


/*==================================================
    CONTINUA
==================================================*/

continueButton.addEventListener("click",()=>{

    showPage("fingerprintPage");

});

/*==================================================
    IMPRONTA
==================================================*/

const fingerprint = document.getElementById("fingerprint");
const fingerprintText = document.getElementById("fingerprintText");

let fingerprintTimer = null;
let fingerprintUnlocked = false;

fingerprint.addEventListener("pointerdown", startFingerprint);
fingerprint.addEventListener("pointerup", stopFingerprint);
fingerprint.addEventListener("pointerleave", stopFingerprint);
fingerprint.addEventListener("pointercancel", stopFingerprint);

function startFingerprint(){

    if(fingerprintUnlocked) return;

    fingerprint.classList.add("active");

    fingerprintTimer = setTimeout(()=>{

        fingerprintUnlocked = true;

        if(navigator.vibrate){

            navigator.vibrate(120);

        }

        fingerprintText.classList.remove("hidden");

        setTimeout(()=>{

            showPage("voicePage");

            prepareVoicePlayer();

        },900);

    },1000);

}

function stopFingerprint(){

    fingerprint.classList.remove("active");

    clearTimeout(fingerprintTimer);

}


/*==================================================
    VOCALE
==================================================*/

const playVoiceButton = document.getElementById("playVoice");

function prepareVoicePlayer(){

    voicePlayer.currentTime = 0;

}

playVoiceButton.addEventListener("click",()=>{

    fadeMusic();

    voicePlayer.play();

});


/*==================================================
    DISSOLVENZA MUSICA
==================================================*/

function fadeMusic(){

    const fade = setInterval(()=>{

        if(bgMusic.volume > 0.03){

            bgMusic.volume -= 0.03;

        }else{

            bgMusic.pause();

            bgMusic.volume = 0.35;

            clearInterval(fade);

        }

    },150);

}


/*==================================================
    FINE VOCALE
==================================================*/

voicePlayer.addEventListener("ended",()=>{

    showFinalPage();

});

/*==================================================
    FINALE
==================================================*/

const polaroid = document.getElementById("polaroid");
const finalLove = document.getElementById("finalLove");
const signature = document.getElementById("signature");
const restartButton = document.getElementById("restartButton");


function showFinalPage(){

    showPage("finalPage");

    /* reset */

    polaroid.classList.add("hidden");
    finalLove.classList.add("hidden");
    signature.classList.add("hidden");
    restartButton.classList.add("hidden");


    /* foto */

    setTimeout(()=>{

        polaroid.classList.remove("hidden");
        polaroid.classList.add("fade-in");

    },400);


    /* Ti amo */

    setTimeout(()=>{

        finalLove.classList.remove("hidden");
        finalLove.classList.add("fade-in");

    },1400);


    /* Firma */

    setTimeout(()=>{

        signature.classList.remove("hidden");
        signature.classList.add("fade-in");

    },2200);


    /* Rivivi */

    setTimeout(()=>{

        restartButton.classList.remove("hidden");
        restartButton.classList.add("fade-in");

    },5200);

}


/*==================================================
    RICOMINCIA
==================================================*/

restartButton.addEventListener("click",restartJourney);

function restartJourney(){

    location.reload();

}

