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
        COSTELLAZIONE
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
            UNIVERSO
======================================*/

const universeCanvas =
document.getElementById("universeCanvas");

const uctx =
universeCanvas.getContext("2d");

const eyesImage =
document.getElementById("eyesImage");

const sofiaTitle =
document.getElementById("sofiaTitle");

const sofiaQuote =
document.getElementById("sofiaQuote");

const continueButton =
document.getElementById("continueButton");


let universeStars = [];

let universeTimer = 0;

let universePhase = 0;

let galaxyForce = 0;

let eyesOpacity = 0;

let titleOpacity = 0;

let quoteOpacity = 0;

let buttonOpacity = 0;

/*======================================
        CREA CIELO
======================================*/

function createSky(){

    const sky =
    document.getElementById("starField");

    sky.innerHTML="";

    for(let i=0;i<220;i++){

        const star =
        document.createElement("div");

        star.className="bgStar";

        star.style.left =
        Math.random()*100+"%";

        star.style.top =
        Math.random()*100+"%";

        star.style.opacity =
        .25+Math.random()*.75;

        star.style.animationDelay =
        (Math.random()*5)+"s";

        sky.appendChild(star);

    }

}

/*======================================
        CREA COSTELLAZIONE
======================================*/

function createConstellation(){

    const box =
    document.getElementById("constellation");

    box.querySelectorAll(
        ".constellation-star"
    ).forEach(s=>s.remove());

    stars=[];

    constellationShape.forEach(point=>{

        const star =
        document.createElement("div");

        star.className =
        "constellation-star";

        star.style.left =
        point.x+"%";

        star.style.top =
        point.y+"%";

        star.style.opacity=0;

        box.appendChild(star);

        stars.push(star);

    });

}

/*======================================
      ANIMA COSTELLAZIONE
======================================*/

function animateConstellation(){

    currentStar=0;

    const timer =
    setInterval(()=>{

        if(currentStar>=stars.length){

            clearInterval(timer);

            drawConstellationLines();

            setTimeout(()=>{

                constellationCompleted();

            },1200);

            return;

        }

        const star =
        stars[currentStar];

        star.style.opacity=1;

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
        TESTI
======================================*/

function showNarration(text){

    const box =
    document.getElementById(
        "constellationText"
    );

    box.innerHTML=text;

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

    // Ripristina le linee nel caso si torni qui
    document
        .getElementById("constellationSvg")
        .style.opacity = "1";

    showNarration(
        "Ho sempre pensato che il cielo custodisse qualcosa di speciale..."
    );

    animateConstellation();

}

/*======================================
       COSTELLAZIONE COMPLETATA
======================================*/

function constellationCompleted(){

    pulseConstellation();

    showNarration(
        "Pensavo che quella fosse la lettera più bella del cielo..."
    );

    // dopo qualche secondo cambia frase
    setTimeout(()=>{

        showNarration(
            "...finché l'universo ha iniziato a cambiare."
        );

    },3000);


    // la costellazione inizia a dissolversi
    setTimeout(()=>{

        stars.forEach(star=>{

            star.animate(

                [

                    {

                        opacity:1,

                        transform:
                        "translate(-50%,-50%) scale(1)"

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
        .style.transition =
        "opacity 2.5s ease";

        document
        .getElementById("constellationSvg")
        .style.opacity = "0";

    },5200);


    // appena sparisce la costellazione
    // parte l'universo

    setTimeout(()=>{

        startUniverseScene();

    },7800);

}

/*======================================
        START UNIVERSO
======================================*/

function startUniverseScene(){

    showPage(pages.universeEyes);

    resizeUniverse();

    createUniverse();

    universeTimer = 0;

    universePhase = 0;

    galaxyForce = 0;

    eyesOpacity = 0;

    titleOpacity = 0;

    quoteOpacity = 0;

    buttonOpacity = 0;

    eyesImage.style.opacity = 0;
    eyesImage.style.visibility = "visible";

    sofiaTitle.style.opacity = 0;

    sofiaQuote.style.opacity = 0;

    continueButton.style.opacity = 0;

    animateUniverse();

}

/*======================================
        CREA UNIVERSO
======================================*/

function createUniverse(){

    universeStars = [];

    const cx =
    universeCanvas.width / 2;

    const cy =
    universeCanvas.height / 2;


    /*==============================
      STELLE DELLA COSTELLAZIONE
    ==============================*/

    constellationShape.forEach((point,index)=>{

        const startX =
        (point.x / 100) *
        universeCanvas.width;

        const startY =
        (point.y / 100) *
        universeCanvas.height;

        const dx = startX - cx;
        const dy = startY - cy;

        universeStars.push({

            id:index,

            born:true,

            cx,
            cy,

            radius:
            Math.sqrt(dx*dx + dy*dy),

            angle:
            Math.atan2(dy,dx),

            x:startX,

            y:startY,

            size:2.6,

            alpha:1

        });

    });


    /*==============================
        STELLE GALASSIA
    ==============================*/

    for(let i=0;i<650;i++){

        const radius =
        Math.random() *
        Math.max(cx,cy);

        const angle =
        Math.random() *
        Math.PI * 2;

        universeStars.push({

            id:i + 100,

            born:false,

            cx,
            cy,

            radius,

            angle,

            x:
            cx +
            Math.cos(angle) * radius,

            y:
            cy +
            Math.sin(angle) * radius,

            size:
            Math.random() * 1.8 + 0.3,

            alpha:0

        });

    }

}

    /*==============================
        GALASSIA
    ==============================*/

    for(let i=0;i<650;i++){

        const radius =
        Math.random()*
        Math.max(cx,cy);

        const angle =
        Math.random()*
        Math.PI*2;

        universeStars.push({

            id:i+100,

            born:false,

            cx,
            cy,

            radius,

            angle,

            x:
            cx+
            Math.cos(angle)*radius,

            y:
            cy+
            Math.sin(angle)*radius,

            size:
            Math.random()*1.8+.3,

            alpha:0

        });

    }

}
/*======================================
        ANIMAZIONE UNIVERSO
======================================*/

function animateUniverse(){

    universeTimer++;

    uctx.clearRect(

        0,

        0,

        universeCanvas.width,

        universeCanvas.height

    );

    const cx =
    universeCanvas.width/2;

    const cy =
    universeCanvas.height/2;


    /*==============================
            TIMELINE
    ==============================*/

    if(universeTimer < 350){

        universePhase = 0;

    }

    else if(universeTimer < 700){

        universePhase = 1;

    }

    else if(universeTimer < 980){

        universePhase = 2;

    }

    else if(universeTimer < 1250){

        universePhase = 3;

    }

    else{

        universePhase = 4;

    }


    /*==============================
            NEBULOSA
    ==============================*/

    let nebulaStrength = 0.08;

    if(universePhase===2){

        nebulaStrength = 0.16;

    }

    if(universePhase>=3){

        nebulaStrength = 0.25;

    }

    const pulse =

    0.55 +

    Math.sin(Date.now()*0.0015)*0.18;


    const nebula =

    uctx.createRadialGradient(

        cx,
        cy,
        0,

        cx,
        cy,
        700

    );

    nebula.addColorStop(

        0,

        `rgba(255,215,140,${
            nebulaStrength*pulse
        })`

    );

    nebula.addColorStop(

        .30,

        "rgba(120,170,255,.05)"

    );

    nebula.addColorStop(

        .60,

        "rgba(180,120,255,.04)"

    );

    nebula.addColorStop(

        1,

        "rgba(0,0,0,0)"

    );

    uctx.fillStyle = nebula;

    uctx.fillRect(

        0,

        0,

        universeCanvas.width,

        universeCanvas.height

    );
   
/*==================================
            STELLE
==================================*/

universeStars.forEach(star=>{

    /*--------------------------
        VELOCITÀ
    --------------------------*/

    let speed =

    0.0008 +

    (1/(star.radius+40))*4;


    // nascita galassia

    if(universePhase===1){

        speed *= 1.15;

    }


    // vortice

    if(universePhase===2){

        speed *= 1.8;

        star.radius *= 0.99955;

    }


    // rallentamento

    if(universePhase>=3){

        speed *= 0.35;

    }


    star.angle += speed;


    /*--------------------------
        POSIZIONE
    --------------------------*/

    star.x =

    star.cx +

    Math.cos(star.angle) *

    star.radius;


    star.y =

    star.cy +

    Math.sin(star.angle) *

    star.radius;


    /*--------------------------
      NASCONO LE STELLE GALASSIA
    --------------------------*/

    if(!star.born && universePhase>=1){

        star.alpha += 0.004;

        if(star.alpha > 1){

            star.alpha = 1;

        }

    }


    /*--------------------------
        DISSOLVENZA
    --------------------------*/

    if(universePhase>=3){

        star.alpha *= 0.992;

    }


    /*--------------------------
            SCIA
    --------------------------*/

    uctx.beginPath();

    uctx.strokeStyle =

    `rgba(255,235,170,${
        star.alpha*0.18
    })`;

    uctx.lineWidth =
    star.size;

    uctx.moveTo(

        star.x -

        Math.cos(star.angle)*18,

        star.y -

        Math.sin(star.angle)*18

    );

    uctx.lineTo(

        star.x,

        star.y

    );

    uctx.stroke();


    /*--------------------------
            STELLA
    --------------------------*/

    uctx.beginPath();

    uctx.fillStyle =

    `rgba(255,250,235,${
        star.alpha
    })`;

    uctx.shadowBlur =

    5 +

    star.alpha*10;

    uctx.shadowColor =
    "#fff5c0";

    uctx.arc(

        star.x,

        star.y,

        star.size,

        0,

        Math.PI*2

    );

    uctx.fill();

});
   

 /*==================================
        OCCHI
==================================*/

if(universePhase >= 4){

    eyesOpacity += 0.004;

    if(eyesOpacity > 1){

        eyesOpacity = 1;

    }

    eyesImage.style.opacity = eyesOpacity;

    eyesImage.style.visibility = "visible";

    eyesImage.style.filter =
    `drop-shadow(0 0 ${
        40*eyesOpacity
    }px rgba(255,255,255,.7))`;

}


/*==================================
        SOFIA
==================================*/

if(universeTimer > 1450){

    titleOpacity += 0.012;

    if(titleOpacity > 1){

        titleOpacity = 1;

    }

    sofiaTitle.style.opacity = titleOpacity;

}


/*==================================
        FRASE
==================================*/

if(universeTimer > 1650){

    quoteOpacity += 0.010;

    if(quoteOpacity > 1){

        quoteOpacity = 1;

    }

    sofiaQuote.style.opacity = quoteOpacity;

}


/*==================================
        CONTINUA
==================================*/

if(universeTimer > 1900){

    buttonOpacity += 0.010;

    if(buttonOpacity > 1){

        buttonOpacity = 1;

    }

    continueButton.style.opacity = buttonOpacity;

}


/*==================================
        CLICK
==================================*/

continueButton.onclick = ()=>{

    showPage(pages.heart);

};


/*==================================
        LOOP
==================================*/

requestAnimationFrame(
    animateUniverse
);

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
