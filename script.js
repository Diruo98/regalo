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

const fingerprintButton = document.getElementById("fingerprintButton");

const restart = document.getElementById("restart");

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
   VARIABILI
===================================== */

let loadingValue = 0;
let candlesOff = 0;
let heartProgress = 0;
let fingerprintTimer = null;
let shootingStarInterval = null;
let writing = false;


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

       createCosmicDust();

        startConstellation();

    },2500);

}

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationPoints = [

    // Riga alta
    {x:60,y:18},
    {x:50,y:18},
    {x:40,y:18},

    // Curva sinistra
    {x:34,y:28},
    {x:34,y:40},

    // Centro
    {x:46,y:48},
    {x:58,y:48},

    // Curva destra
    {x:66,y:58},
    {x:66,y:70},

    // Curva finale
    {x:58,y:80},
    {x:46,y:84},
    {x:34,y:84},
    {x:26,y:80}

];

const constellationMessages = [

"Ho sempre pensato che il cielo custodisse qualcosa di speciale...",

"Poi sei arrivata tu.",

"Da quel momento ogni stella ha iniziato a brillare in modo diverso...",

"Ogni luce mi ricordava i tuoi bellissimi occhi.",

"Ogni desiderio mi riportava sempre da te.",

"Continuavo a guardare il cielo...",

"...finché ho iniziato a vedere un disegno nascosto.",

"Una forma che sembrava conoscermi.",

"Più univo le stelle...",

"...più diventava evidente.",

"Non era una costellazione qualunque.",

"Era la tua iniziale..."

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

/*======================================
        UNIVERSO COSMICO
======================================*/

const SKY_STAR_COUNT = 450;

let skyStars = [];

let constellationStars = [];

let animationRunning = false;

let sceneStep = 0;

/*======================================
        CREA IL CIELO
======================================*/

function createSky(){

    const field = document.getElementById("starField");

    field.innerHTML="";

    skyStars=[];

    for(let i=0;i<SKY_STAR_COUNT;i++){

        const star=document.createElement("div");

        star.className="star";

        const r=Math.random();

        if(r>.94){

            star.classList.add("gold");

        }else if(r>.88){

            star.classList.add("blue");

        }

        if(Math.random()>.94){

            star.classList.add("big");

        }

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDuration=
            (2+Math.random()*6)+"s";

        star.style.animationDelay=
            (-Math.random()*6)+"s";

        field.appendChild(star);

        skyStars.push(star);

    }

}

/*======================================
        SCEGLI LE STELLE
======================================*/

function prepareConstellation(){

    constellationStars=[];

    const shuffled=[...skyStars]
        .sort(()=>Math.random()-.5);

    for(let i=0;i<constellationPoints.length;i++){

        constellationStars.push(shuffled[i]);

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

/* =====================================
   POLVERE COSMICA
===================================== */

function createCosmicDust(){

    const field = document.getElementById("cosmicDust");

    if(!field) return;

    field.innerHTML = "";

    for(let i=0;i<500;i++){

        const star = document.createElement("div");

        star.classList.add("dust");

        const r = Math.random();

        if(r>0.92){

            star.classList.add("gold");

        }else if(r>0.84){

            star.classList.add("blue");

        }

        const size = 1 + Math.random()*3;

        star.style.width = size+"px";
        star.style.height = size+"px";

        star.style.left = Math.random()*100+"%";
        star.style.top = Math.random()*100+"%";

        star.style.opacity = .15 + Math.random()*.8;

        star.style.animationDuration =
            (3 + Math.random()*8)+"s";

        star.style.animationDelay =
            (-Math.random()*8)+"s";

        field.appendChild(star);

    }

}

/*======================================
        REGIA DELLA SCENA
======================================*/

function playConstellationScene(){

    if(animationRunning) return;

    animationRunning = true;

    // 1
    createSky();

    // 2
    prepareConstellation();

    // 3
    setTimeout(()=>{

        showNarration(
            "Ho sempre pensato che il cielo custodisse qualcosa di speciale..."
        );

    },1500);

    // 4
    setTimeout(()=>{

        lightConstellationStars();

    },5000);

}

/*======================================
        TESTI DEL CIELO
======================================*/

function showNarration(text){

    const box = document.getElementById("constellationText");

    if(!box) return;

    box.innerHTML = text;

    box.classList.remove("show");

    setTimeout(()=>{

        box.classList.add("show");

    },50);

}

/*======================================
    LE STELLE SI SVEGLIANO
======================================*/

function lightConstellationStars(){

    let delay = 0;

    constellationStars.forEach((star,index)=>{

        setTimeout(()=>{

            star.classList.add("big");
            star.classList.add("gold");

            star.style.transition =
                "all 1.8s ease";

        },delay);

        delay += 350;

    });

    // Quando tutte sono illuminate
    setTimeout(()=>{

        moveConstellationStars();

    },delay + 1000);

}

/*======================================
    LE STELLE FORMANO LA S
======================================*/

function moveConstellationStars(){

    constellationStars.forEach((star,index)=>{

        const point = constellationPoints[index];

        star.style.left = point.x + "%";

        star.style.top = point.y + "%";

        star.style.transform = "translate(-50%,-50%) scale(1.8)";

    });

    // Quando la S è completa
    setTimeout(()=>{

        showNarration("Poi sei arrivata tu.");

        holdConstellation();

    },2500);

}

function startConstellation(){

    stopEmojiRain();

    clearInterval(shootingStarInterval);

    shootingStarInterval = setInterval(()=>{

        createShootingStar();

    },7000);

    playConstellationScene();

}

    const stars = document.querySelectorAll(".constellation-star");
const message = document.getElementById("constellationMessage");

    message.innerHTML =
    "Tocca la prima stella in alto a destra e poi segui la forma fino in basso per leggere la storia...🤍✨";

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

    // Aspetta che la costellazione si illumini
setTimeout(()=>{

    document
    .getElementById("constellation")
    .classList.add("transform");

},1800);

// Dopo che è salita compare il testo
setTimeout(()=>{

    message.innerHTML = `
<div class="constellation-final">

    <div class="final-text">

        La costellazione più bella<br>
        aveva già un nome.

        <span>Sofia 🤍</span>

    </div>

</div>`;

    message.classList.add("show");

},3200);

    setTimeout(()=>{

        document
        .getElementById("constellation")
        .classList.add("transform");

    },3200);

    setTimeout(()=>{

        showPage(pages.heart);

startEmojiRain();

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
