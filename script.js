/* =========================================
   SELEZIONE ELEMENTI
========================================= */

const pages = document.querySelectorAll(".page");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

const playButton = document.getElementById("playButton");

const home = document.getElementById("home");
const introPage = document.getElementById("introPage");

const startButton = document.getElementById("start");

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

/* =========================================
   CAMBIO PAGINA
========================================= */

function showPage(pageId){

    pages.forEach(page=>{

        page.classList.add("hidden");

    });

    document.getElementById(pageId).classList.remove("hidden");

}

/* =========================================
   AVVIO
========================================= */

playButton.addEventListener("click",()=>{

    bgMusic.volume = 0.35;

    bgMusic.play().catch(()=>{});

    showPage("home");

    startLoading();

});

/* =========================================
   LOADING
========================================= */

function startLoading(){

    let value = 0;

    const interval = setInterval(()=>{

        value++;

        bar.style.width = value + "%";

        percent.textContent = value + "%";

        if(value >= 100){

            clearInterval(interval);

            setTimeout(()=>{

                startButton.hidden = false;

            },500);

        }

    },35);

}

/* =========================================
   INIZIA VIAGGIO
========================================= */

startButton.addEventListener("click",()=>{

    showPage("ticket");

});

/* =========================================
   BIGLIETTO
========================================= */

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click",()=>{

    showPage("birthday");

    createCandles();

});

noButton.addEventListener("mouseenter",()=>{

    const x=Math.random()*220-110;
    const y=Math.random()*120-60;

    noButton.style.transform=`translate(${x}px,${y}px)`;

});

noButton.addEventListener("click",()=>{

    noButton.style.transform="translate(0,0)";

});

/* =========================================
   CANDELINE
========================================= */

const candlesContainer=document.getElementById("candles");
const counter=document.getElementById("counter");

let candlesLeft=19;

function createCandles(){

    candlesContainer.innerHTML="";

    candlesLeft=19;

    counter.textContent="Candeline rimaste: 19";

    for(let i=0;i<19;i++){

        const candle=document.createElement("div");

        candle.className="candle";

        candle.addEventListener("click",()=>{

            if(candle.classList.contains("off")) return;

            candle.classList.add("off");

            candlesLeft--;

            counter.textContent=
            "Candeline rimaste: "+candlesLeft;

            if(candlesLeft===0){

                birthdayFinished();

            }

        });

        candlesContainer.appendChild(candle);

    }

}

/* =========================================
   FESTA FINALE
========================================= */

function birthdayFinished(){

    createConfettiBurst();

    document
        .querySelector(".birthday-box")
        .classList.add("fade-out");

    setTimeout(()=>{

        showPage("wishPage");

        document
            .querySelector(".birthday-box")
            .classList.remove("fade-out");

    },2200);

}

/* =========================================
   CORIANDOLI
========================================= */

function createConfettiBurst(){

    const colors=[
        "#ff5f96",
        "#ff8db7",
        "#ffd3e6",
        "#ffffff",
        "#ffe36e"
    ];

    for(let i=0;i<170;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration=
        (2+Math.random()*2)+"s";

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document
            .getElementById("confetti")
            .appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}

/* =========================================
   DESIDERIO
========================================= */

const sendWish = document.getElementById("sendWish");
const wishInput = document.getElementById("wishInput");

sendWish.addEventListener("click",()=>{

    if(wishInput.value.trim()===""){

        alert("Prima esprimi un desiderio 🤍");

        return;

    }

    showPage("starPage");

    setTimeout(()=>{

        showPage("constellationPage");

        createConstellation();

    },3000);

});

/* =========================================
   COSTELLAZIONE
========================================= */

const constellationSky=document.getElementById("constellationSky");
const constellationMessage=document.getElementById("constellationMessage");

const messages=[

"✨<br><br>Qualunque stella tu scelga...<br>per me sarà sempre la più bella. ❤️",

"⭐<br><br>Anche tra milioni di stelle,<br>sceglierei sempre te. ❤️",

"🌌<br><br>Il cielo è immenso...<br>ma il mio posto preferito resta accanto a te. 🤍",

"💫<br><br>Ogni desiderio porta il tuo nome. ❤️",

"✨<br><br>La stella più luminosa,<br>per me, sei sempre tu. 🤍"

];

function createConstellation(){

    constellationSky.innerHTML="";

    constellationMessage.classList.add("hidden");

    for(let i=0;i<20;i++){

        const star=document.createElement("div");

        star.className="star";

        star.innerHTML="⭐";

        star.style.left=Math.random()*95+"%";
        star.style.top=Math.random()*90+"%";

        star.addEventListener("click",()=>{

            constellationMessage.innerHTML=
            messages[Math.floor(Math.random()*messages.length)];

            constellationMessage.classList.remove("hidden");

            setTimeout(()=>{

                showPage("heartPage");

            },2500);

        });

        constellationSky.appendChild(star);

    }

}

/* =========================================
   CUORE
========================================= */

const heartFill = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");

let heartValue = 0;

heartFill.addEventListener("click", () => {

    if (heartValue >= 100) return;

    heartValue++;

    heartPercent.textContent = heartValue + "%";

    heartFill.style.setProperty("--fill", heartValue + "%");

    heartFill.querySelector("::before");

    heartFill.style.background =
        `linear-gradient(to top,
        #ff5f96 ${heartValue}%,
        #ffe6ef ${heartValue}%)`;

    if (heartValue >= 100) {

        setTimeout(() => {

            showPage("letterPage");

        }, 800);

    }

});

/* =========================================
   LETTERA
========================================= */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const continueFromLetter = document.getElementById("continueFromLetter");

const letter = `

Qui andrà tutta la tua lettera.

Può essere lunga quanto vuoi.

Comparirà lentamente,
come se venisse scritta
proprio in quel momento.

Alla fine comparirà
la nostra foto...

e poi il pulsante Continua. 🤍

`;

let index = 0;

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        paper.classList.add("show");

        typeLetter();

    }, 700);

});

/* =========================================
   EFFETTO SCRITTURA
========================================= */

function typeLetter() {

    if (index < letter.length) {

        letterText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    } else {

        continueFromLetter.classList.remove("hidden");

    }

}

/* =========================================
   CONTINUA
========================================= */

continueFromLetter.addEventListener("click", () => {

    showPage("fingerprintPage");

});

