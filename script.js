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
   universeEyes: document.getElementById("universeEyesPage"),
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

const heartFill = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");
const heartMessage = document.getElementById("heartMessage");

const fingerprintButton = document.getElementById("fingerprintButton");

const restart = document.getElementById("restart");

let emojiRainInterval = null;

/* =====================================
   LETTERA
===================================== */

const letterScene = document.getElementById("letterScene");

const letterHint = document.getElementById("letterHint");

const seal = document.querySelector("#letterPage .seal");

const letterContent = document.getElementById("letterContent");

const continueFromLetter = document.getElementById("continueFromLetter");

const letterText = `Cara Sofia,

oggi non volevo regalarti qualcosa di normale.

Volevo regalarti un ricordo.

Un piccolo viaggio.

Per ricordarti quanto sei importante.

Buon compleanno. 🤍`;

/* =====================================
   EMAILJS
===================================== */

emailjs.init({
    publicKey: "wSOh24DBQMubSgC8-"
});


/* =====================================
   STATO APPLICAZIONE
===================================== */

let loadingValue = 0;

let candlesOff = 0;

let heartProgress = 0;

let fingerprintTimer = null;

let shootingStarInterval = null;

let writing = false;

let fingerprintAttempts = 0;


/* =====================================
   FUNZIONI GENERALI
===================================== */

function showPage(page){

    Object.values(pages).forEach(currentPage=>{

        currentPage.classList.add("hidden");

    });

    page.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"instant"

    });

}

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

/* =====================================
   INTRO
===================================== */

playButton.addEventListener("click", () => {

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {});

    startEmojiRain();

    showPage(pages.loading);

    startLoading();

});


/* =====================================
   LOADING
===================================== */

function startLoading(){

    loadingValue = 0;

    startButton.hidden = true;

    const bar = document.getElementById("bar");

    const percent = document.getElementById("percent");

    bar.style.width = "0%";

    percent.textContent = "0%";

    const timer = setInterval(()=>{

        loadingValue++;

        bar.style.width = `${loadingValue}%`;

        percent.textContent = `${loadingValue}%`;

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

    const x = Math.random() * 60 + 20;

    const y = Math.random() * 55 + 20;

    noButton.style.position = "absolute";

    noButton.style.left = `${x}%`;

    noButton.style.top = `${y}%`;

});

/* =====================================
   CANDELINE
===================================== */

function createCandles(){

    candlesContainer.innerHTML = "";

    candlesOff = 0;

    counter.textContent = "Candeline rimaste: 19";

    for(let i = 0; i < 19; i++){

        const candle = document.createElement("div");

        candle.className = "candle";

        const flame = document.createElement("div");

        flame.className = "flame";

        flame.textContent = "🔥";

        candle.appendChild(flame);

        flame.addEventListener("click", ()=>{

            if(candle.classList.contains("off")) return;

            candle.classList.add("off");

            flame.remove();

            candlesOff++;

            counter.textContent = `Candeline rimaste: ${19 - candlesOff}`;

            if(candlesOff === 19){

                finishBirthday();

            }

        });

        candlesContainer.appendChild(candle);

    }

}

/* =====================================
   BIGLIETTO → CANDELINE
===================================== */

yesButton.addEventListener("click", ()=>{

    showPage(pages.birthday);

    createCandles();

});


/* =====================================
   FINE COMPLEANNO
===================================== */

function finishBirthday(){

    createConfetti();

    stopEmojiRain();

    setTimeout(()=>{

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

    const totalConfetti = 350;

    for(let i = 0; i < totalConfetti; i++){

        const confetto = document.createElement("div");

        confetto.className = "confetto";

        const w = 5 + Math.random() * 6;
        const h = 10 + Math.random() * 12;

        confetto.style.width = `${w}px`;
        confetto.style.height = `${h}px`;

        confetto.style.left = `${Math.random() * 100}vw`;

        confetto.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetto.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetto.style.animation =
            `fall ${2 + Math.random() * 3}s linear forwards`;

        area.appendChild(confetto);

        setTimeout(()=>{

            confetto.remove();

        },5000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

sendWish.addEventListener("click", ()=>{

    const wish = wishInput.value.trim();

    if(!wish){

        alert("Scrivi prima un desiderio ❤️");

        return;

    }

    // Invio EmailJS

    if(typeof emailjs !== "undefined"){

        emailjs.send(

            "service_umr8t4k",

            "template_ag1927r",

            {

                wish: wish

            }

        ).catch(error=>{

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

    setTimeout(()=>{

        showPage(pages.constellation);

        startConstellation();

    },2500);

}

/*======================================
        UNIVERSO
======================================*/

const universeCanvas =
document.getElementById("universeCanvas");

const uctx =
universeCanvas.getContext("2d");

function resizeUniverse(){

    universeCanvas.width = window.innerWidth;
    universeCanvas.height = window.innerHeight;

}

resizeUniverse();

window.addEventListener(
    "resize",
    resizeUniverse
);

function startUniverseScene(){

    showPage(pages.universeEyes);

    resizeUniverse();

    createUniverse();

    animateUniverse();

}

let universeStars = [];

function createUniverse(){

    universeStars = [];

    for(let i=0;i<1800;i++){

        universeStars.push({

            x:Math.random()*universeCanvas.width,

            y:Math.random()*universeCanvas.height,

            size:Math.random()*2+0.4,

            alpha:Math.random()

        });

    }

}

function animateUniverse(){

    uctx.clearRect(

        0,

        0,

        universeCanvas.width,

        universeCanvas.height

    );

    uctx.fillStyle="#020611";

    uctx.fillRect(

        0,

        0,

        universeCanvas.width,

        universeCanvas.height

    );

    universeStars.forEach(star=>{

        uctx.beginPath();

        uctx.fillStyle=

        `rgba(255,245,220,${star.alpha})`;

        uctx.shadowBlur=10;

        uctx.shadowColor="#fff7d0";

        uctx.arc(

            star.x,

            star.y,

            star.size,

            0,

            Math.PI*2

        );

        uctx.fill();

    });

    requestAnimationFrame(

        animateUniverse

    );

}


/*======================================
        NUOVA COSTELLAZIONE
======================================*/

let stars = [];

let currentStar = 0;

const constellationShape = [

    {x:60,y:18},
    {x:50,y:18},
    {x:40,y:18},

    {x:34,y:28},
    {x:34,y:40},

    {x:46,y:48},
    {x:58,y:48},

    {x:66,y:58},
    {x:66,y:70},

    {x:58,y:80},
    {x:46,y:84},
    {x:34,y:84},
    {x:26,y:80}

];


/*======================================
        CREA CIELO
======================================*/

function createSky(){

    const sky = document.getElementById("starField");

    sky.innerHTML = "";

    for(let i=0;i<220;i++){

        const star = document.createElement("div");

        star.className = "bgStar";

        star.style.left = Math.random()*100 + "%";

        star.style.top = Math.random()*100 + "%";

        star.style.animationDelay =
        (Math.random()*5)+"s";

        star.style.opacity =
        .25 + Math.random()*.75;

        sky.appendChild(star);

    }

}

/*======================================
        CREA COSTELLAZIONE
======================================*/

function createConstellation(){

    const box = document.getElementById("constellation");

    // Elimina solo le stelle vecchie
    box.querySelectorAll(".constellation-star").forEach(star=>star.remove());

    stars = [];

    constellationShape.forEach((point)=>{

        const star = document.createElement("div");

        star.className = "constellation-star";

        star.style.left = point.x + "%";
        star.style.top = point.y + "%";

        star.style.opacity = "0";

        box.appendChild(star);

        stars.push(star);

    });

}

/*======================================
      ANIMA COSTELLAZIONE
======================================*/

function animateConstellation(){

    currentStar = 0;

    const timer = setInterval(()=>{

       if(currentStar >= stars.length){

    clearInterval(timer);

    console.log("STEP 3 FINITO");

    drawConstellationLines();

    console.log("LINEE DISEGNATE");

    setTimeout(()=>{

        console.log("PARTO CON constellationCompleted");

        constellationCompleted();

    },3000);

    return;

}
        const star = stars[currentStar];

        star.style.opacity = "1";

        star.classList.add("active");

        currentStar++;

    },350);

}
/*======================================
        COSTELLAZIONE RESPIRA
======================================*/

function pulseConstellation(){

    stars.forEach(star=>{

        star.animate(

            [

                {

                    transform:
                    "translate(-50%,-50%) scale(1)"

                },

                {

                    transform:
                    "translate(-50%,-50%) scale(1.4)"

                },

                {

                    transform:
                    "translate(-50%,-50%) scale(1)"

                }

            ],

            {

                duration:1800,

                iterations:Infinity,

                easing:"ease-in-out"

            }

        );

    });

}

/*======================================
        TESTI COSTELLAZIONE
======================================*/

function showNarration(text){

    const box =
    document.getElementById("constellationText");

    box.innerHTML = text;

    box.classList.remove("show");

    setTimeout(()=>{

        box.classList.add("show");

    },30);

}

/*======================================
        AVVIO COSTELLAZIONE
======================================*/

function startConstellation(){

    stopEmojiRain();

    hideEmojis();

    currentStar = 0;

    createSky();

    createConstellation();

    showNarration(

        "Ho sempre pensato che il cielo custodisse qualcosa di speciale..."

    );

    animateConstellation();

}

/*======================================
        DISEGNO COSTELLAZIONE
======================================*/

function drawConstellationLines(){

    const svg =
    document.getElementById("constellationSvg");

    const path =
    document.getElementById("constellationPath");

    const w = svg.clientWidth;
    const h = svg.clientHeight;

    let d = "";

    constellationShape.forEach((point,index)=>{

        const x = w * point.x / 100;
        const y = h * point.y / 100;

        if(index===0){

            d += `M ${x} ${y} `;

        }else{

            d += `L ${x} ${y} `;

        }

    });

    path.setAttribute("d",d);

    const length = path.getTotalLength();

    path.style.strokeDasharray = length;

    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition =
    "stroke-dashoffset 3s ease";

    path.style.strokeDashoffset = "0";

}

/*======================================
        COSTELLAZIONE COMPLETATA
======================================*/

function constellationCompleted(){

    showNarration(

        "Pensavo che quella fosse la lettera più bella del cielo..."

    );

    stars.forEach(star=>{

        star.animate(

            [

                {

                    transform:
                    "translate(-50%,-50%) scale(1)"

                },

                {

                    transform:
                    "translate(-50%,-50%) scale(1.45)"

                },

                {

                    transform:
                    "translate(-50%,-50%) scale(1)"

                }

            ],

            {

                duration:1800,

                iterations:Infinity,

                easing:"ease-in-out"

            }

        );

    });

   setTimeout(()=>{

    showNarration(

        "...finché l'universo ha iniziato a cambiare."

    );

    stars.forEach(star=>{

        star.animate(

            [

                {

                    opacity:1,

                    transform:"translate(-50%,-50%) scale(1)"

                },

                {

                    opacity:0,

                    transform:
                    `translate(

                    ${(Math.random()-0.5)*180}px,

                    ${(Math.random()-0.5)*180}px

                    )

                    scale(.2)`

                }

            ],

            {

                duration:2500,

                easing:"ease-in",

                fill:"forwards"

            }

        );

    });

    document
    .getElementById("constellationSvg")
    .style.opacity="0";

    setTimeout(()=>{

        startUniverseScene();

    },2500);

},3500);

}

   

/*======================================
        ESPLOSIONE
======================================*/

function explodeConstellation(){

    showNarration(

        "...poi il cielo ha deciso di raccontarmi qualcosa."

    );

    stars.forEach(star=>{

        star.animate(

            [

                {

                    transform:
                    "translate(-50%,-50%) scale(1)",

                    opacity:1

                },

                {

                    transform:

                    `translate(

                    ${(Math.random()-0.5)*500}px,

                    ${(Math.random()-0.5)*500}px

                    )

                    scale(.2)`,

                    opacity:0

                }

            ],

            {

                duration:1800,

                fill:"forwards",

                easing:"ease-out"

            }

        );

    });

    document
        .getElementById("constellationSvg")
        .style.opacity = "0";

    setTimeout(()=>{

        startEyesScene();

    },1800);

}

/*======================================
        CREA STELLE COSMICHE
======================================*/

function createSkyParticles(count){

    for(let i=0;i<count;i++){

        particles.push(

            new Particle(

                Math.random()*eyesCanvas.width,

                Math.random()*eyesCanvas.height

            )

        );

    }

}


/* =====================================
   STELLA CADENTE
===================================== */

function createShootingStar(){

    const sky = document.getElementById("constellationPage");

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = `${Math.random() * 70}%`;

    star.style.top = `${Math.random() * 35}%`;

    star.style.animation = "shoot 1.2s linear forwards";

    sky.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1200);

}

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

function createHeartBurst(){

    const hearts = ["❤️","💕","💖","💗","💞"];

    for(let i=0;i<35;i++){

        const heart = document.createElement("div");

        heart.className = "heart-burst";

        heart.textContent =
            hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left =
            (50 + (Math.random()-0.5)*18) + "%";

        heart.style.top = "50%";

        heart.style.setProperty(
            "--x",
            (Math.random()-0.5)*250 + "px"
        );

        heart.style.setProperty(
            "--y",
            (-150-Math.random()*220) + "px"
        );

        heart.style.fontSize =
            (18+Math.random()*18)+"px";

        document
            .getElementById("heartPage")
            .appendChild(heart);

        setTimeout(()=>heart.remove(),1800);

    }

}

function initHeart(){

    heartProgress = 0;

    heartFill.style.setProperty("--fill","0%");

    heartPercent.textContent = "0%";

    heartMessage.textContent = "Tocca il cuore ❤️";

}

heartFill.addEventListener("click",()=>{

    if(heartProgress === 10) return;

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

       createHeartBurst();

        setTimeout(()=>{

            showPage(pages.letter);

           initLetter();

        },2200);

    }

});

function initLetter(){

    writing = false;

    letterScene.classList.remove("open");

    letterHint.style.opacity = "1";

    letterContent.textContent = "";

    continueFromLetter.classList.remove("show");

    if(seal){

        seal.style.pointerEvents = "auto";

    }

}

seal.addEventListener("click",()=>{

    if(writing) return;

    writing = true;

    letterHint.style.opacity = "0";

    letterScene.classList.add("open");

    seal.style.pointerEvents = "none";

  setTimeout(()=>{

    typeLetter();

},1500);

   });

function typeLetter(){

    let i = 0;

    letterContent.textContent = "";

    const timer = setInterval(()=>{

        letterContent.textContent += letterText.charAt(i);

        i++;

        if(i >= letterText.length){

            clearInterval(timer);

            continueFromLetter.classList.add("show");

        }

    },35);

}

continueFromLetter.addEventListener("click",()=>{

    showPage(pages.fingerprint);

});

/* =====================================
   IMPRONTA
===================================== */

const fingerprintMessage =
document.getElementById("fingerprintMessage");

const passwordArea =
document.getElementById("passwordArea");

const passwordInput =
document.getElementById("passwordInput");

const unlockButton =
document.getElementById("unlockButton");

const voiceButtons =
document.getElementById("voiceButtons");

const listenVoice =
document.getElementById("listenVoice");

const skipVoice =
document.getElementById("skipVoice");

fingerprintButton.addEventListener("click",()=>{

    fingerprintButton.style.background="#ff6b6b";

    fingerprintMessage.textContent =
    "❌ Impronta non riconosciuta";

    passwordArea.classList.remove("hidden");

});

unlockButton.addEventListener("click",()=>{

    const password =
    passwordInput.value.trim().toLowerCase();

    if(password==="ty krasivaya"){

        fingerprintButton.style.background="#7ed957";

        fingerprintMessage.textContent=
        "✔ Accesso consentito 🤍";

        passwordArea.classList.add("hidden");

        voiceButtons.classList.remove("hidden");

        return;

    }

    fingerprintAttempts++;

    fingerprintButton.style.background="#ff6b6b";

    fingerprintMessage.textContent=
    "❌ Parola segreta errata";

    fingerprintButton.animate(

        [

            {transform:"translateX(0)"},

            {transform:"translateX(-8px)"},

            {transform:"translateX(8px)"},

            {transform:"translateX(-8px)"},

            {transform:"translateX(0)"}

        ],

        {

            duration:350

        }

    );

    if(fingerprintAttempts>=3){

        fingerprintMessage.innerHTML=
        "Forse questo messaggio non è destinato a te...";

        skipVoice.classList.remove("hidden");

    }

});

skipVoice.addEventListener("click",()=>{

    showPage(pages.final);

});

function initFingerprint(){

    fingerprintAttempts=0;

    fingerprintButton.style.background="#ffe6f1";

    fingerprintMessage.textContent=
    "Appoggia il dito sull'impronta";

    passwordInput.value="";

    passwordArea.classList.add("hidden");

    voiceButtons.classList.add("hidden");

    skipVoice.classList.add("hidden");

}

/* =====================================
   VOCALE
===================================== */

listenVoice.addEventListener("click",()=>{

    showPage(pages.voice);

    voicePlayer.pause();

    voicePlayer.currentTime = 0;

    voicePlayer.play().catch(()=>{});

});

voicePlayer.addEventListener("ended",()=>{

    voicePlayer.currentTime = 0;

    showPage(pages.final);

    showFinal();

});

/* =====================================
   FINALE
===================================== */

const polaroid =
document.getElementById("polaroid");

const finalLove =
document.getElementById("finalLove");

const signature =
document.getElementById("signature");

function showFinal(){

    polaroid.classList.add("hidden");
    finalLove.classList.add("hidden");
    signature.classList.add("hidden");
    restart.classList.add("hidden");

    setTimeout(()=>{

        polaroid.classList.remove("hidden");

    },200);

    setTimeout(()=>{

        finalLove.classList.remove("hidden");

    },1400);

    setTimeout(()=>{

        signature.classList.remove("hidden");

    },2400);

    setTimeout(()=>{

        restart.classList.remove("hidden");

    },4300);

}

/* =====================================
   RICOMINCIA
===================================== */

restart.addEventListener("click",()=>{

    location.reload();

});
