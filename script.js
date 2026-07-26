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
let emojiInterval;
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
let shootingStarInterval = null;


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

   setInterval(createEmojiRain,1200);

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

    for(let i=0;i<800;i++){

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

                wish: wish

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

    {x:66, y:16},

    {x:48, y:15},

    {x:30, y:26},

    {x:48, y:38},

    {x:60, y:48},

    {x:49, y:58},

    {x:31, y:69},

    {x:49, y:78},

    {x:67, y:77}

];

const constellationMessages = [

"Ho sempre pensato che il cielo custodisse qualcosa di speciale.",

"Poi ho iniziato a guardarlo con occhi diversi.",

"Ogni stella sembrava raccontare un ricordo",

"Ogni luce mi riportava un sorriso",

"Finché ho capito che non era una costellazione qualunque.",

"C'era un disegno nascosto tra le stelle",

"Un nome che il cielo sembrava voler scrivere",

"E quel nome eri tu",

"La costellazione più bella avrà sempre una sola iniziale: S 🤍"

];

let constellationIndex = 0;

// Variabile globale
let emojiRainInterval;

function createEmojiRain(){

    const emojis = [
        "🤍",
        "✨",
        "🌸",
        "💫",
        "⭐",
        "🦁",
        "♾️", 
        "😍"
    ];

    const emoji = document.createElement("div");

    emoji.className = "falling-emoji";

    emoji.textContent =
        emojis[Math.floor(Math.random()*emojis.length)];

    emoji.style.left =
        Math.random()*100+"vw";

    emoji.style.fontSize =
        (18+Math.random()*16)+"px";

    emoji.style.animationDuration =
        (10+Math.random()*8)+"s";

    document.body.appendChild(emoji);

    setTimeout(()=>{

        emoji.remove();

    },18000);

}

function startEmojiRain(){

    if(emojiRainInterval) return;

    emojiRainInterval = setInterval(createEmojiRain,1200);

}

function stopEmojiRain(){

    clearInterval(emojiRainInterval);

    emojiRainInterval = null;

    document.querySelectorAll(".falling-emoji").forEach(e=>e.remove());

}

function hideEmojis(){

    document.querySelectorAll(".falling-emoji").forEach(emoji=>{

        emoji.remove();

    });

}

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

function createShootingStar(){

    const sky=document.querySelector(".sky");

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*70+"%";

    star.style.top=Math.random()*35+"%";

    star.style.animation="shoot 1.2s linear forwards";

    sky.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1200);

}

function createConstellation(){

    const container = document.getElementById("constellation");

    container.innerHTML = "";

    constellationPoints.forEach((point,index)=>{

        const star = document.createElement("div");

        star.className = "constellation-star";

        star.style.left = point.x + "%";
        star.style.top  = point.y + "%";

        star.dataset.index = index;

        container.appendChild(star);

    });

}

function startConstellation(){

    constellationIndex = 0;

       hideEmojis();
   
    createStarField();
    createConstellation();
 

    clearInterval(shootingStarInterval);

    shootingStarInterval = setInterval(()=>{

        createShootingStar();

    },7000);

    const stars = document.querySelectorAll(".constellation-star");
const message = document.getElementById("constellationMessage");

    message.innerHTML =
    "Tocca la prima stella in alto a sinistra e poi tutte le altre in successione 🤍✨";

   message.classList.add("show");

    

    stars.forEach(star=>{

        star.classList.remove("active");
        star.classList.remove("finish");

    });

    stars.forEach((star,index)=>{

        star.onclick = ()=>{

            if(index !== constellationIndex) return;

            star.classList.add("active");

            if(constellationMessages[index]){

                message.textContent =
                constellationMessages[index];

            }

            constellationIndex++;

            if(constellationIndex===stars.length){

                stars.forEach(s=>s.classList.add("finish"));

               constellation.classList.add("constellation-complete");

                setTimeout(()=>{

                    message.innerHTML=
                    "<h2>✨ Ti amo infinitamente Sofi 🤍 ✨</h2><br>Ogni stella del cielo mi porterà sempre da te 🤍";

                },900);

                setTimeout(()=>{

                    document
                    .getElementById("constellation")
                    .classList.add("transform");

                },3200);

                setTimeout(()=>{

                    showPage(pages.heart);

                    initHeart();

                    document
                    .getElementById("constellation")
                    .classList.remove("transform");

                },5000);

            }

        };

    });

}

window.addEventListener("load", () => {

    startEmojiRain();

});

/* =====================================
   CUORE
===================================== */
 const heartQuotes = {

    10:"Da quando sei arrivata, qualcosa dentro di me è cambiato. 🤍",

    20:"Ogni tuo sorriso ha riempito un pezzetto del mio cuore",

    30:"Con te anche i giorni più semplici diventano speciali ✨",

    40:"Ogni tuo abbraccio mi fa sentire a casa",

    50:"Sei diventata il mio posto sicuro ❤️",

    60:"Mi hai colorato il mondo 🤍",

    70:"Ogni ricordo insieme è un tesoro che porterò sempre con me",

    80:"Non riesco più a immaginare un futuro senza di te",

    90:"Ormai il mio cuore sa già a chi appartiene... 🤍",

    100:"Il mio cuore appartiene completamente a te. Ti amo 🤍🦁"

};

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

    if(heartQuotes[percentValue]){

        heartMessage.textContent = heartQuotes[percentValue];

    }

    heartFill.animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.08)"},

            {transform:"scale(1)"}

        ],

        {

            duration:300

        }

    );

    if(heartProgress===10){

        setTimeout(()=>{

            showPage(pages.letter);

        },1800);

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


