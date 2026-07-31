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

    eyes: document.getElementById("eyesPage"),

    heart: document.getElementById("heartPage"),
    letter: document.getElementById("letterPage"),
    fingerprint: document.getElementById("fingerprintPage"),
    voice: document.getElementById("voicePage"),
    final: document.getElementById("finalPage")

};

/* =====================================
   EMAILJS
===================================== */

emailjs.init("LUA_TUA_PUBLIC_KEY");

/* =====================================
   INTRO
===================================== */

const introMusic = document.getElementById("introMusic");
const musicToggle = document.getElementById("musicToggle");
const startBtn = document.getElementById("startBtn");

/* =====================================
   LOADING
===================================== */

const loadingBar = document.getElementById("loadingBar");

/* =====================================
   BIGLIETTO
===================================== */

const ticketInput = document.getElementById("ticketName");
const ticketContinue = document.getElementById("ticketContinue");

/* =====================================
   CANDELINE
===================================== */

const candles = document.querySelectorAll(".candle");

/* =====================================
   DESIDERIO
===================================== */

const wishStar = document.getElementById("wishStar");

/* =====================================
   COSTELLAZIONE
===================================== */

const constellation = document.getElementById("constellation");

let constellationProgress = 0;

/* =====================================
   CUORE
===================================== */

const heartFill = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");
const heartMessage = document.getElementById("heartMessage");

let heartProgress = 0;

/* =====================================
   LETTERA
===================================== */

const letterScene = document.getElementById("letterScene");
const openLetter = document.getElementById("openLetter");
const continueFromLetter = document.getElementById("continueFromLetter");

/* =====================================
   IMPRONTA
===================================== */

const fingerprint = document.getElementById("fingerprint");
const fingerprintMessage = document.getElementById("fingerprintMessage");

/* =====================================
   VOCALE
===================================== */

const voicePlayer = document.getElementById("voicePlayer");

/* =====================================
   FINALE
===================================== */

const finalForm = document.getElementById("finalForm");

/* =====================================
   FUNZIONI GENERALI
===================================== */

function showPage(page){

    Object.values(pages).forEach(p=>{

        if(p) p.classList.add("hidden");

    });

    page.classList.remove("hidden");

}

/* =====================================
   INTRO
===================================== */

let musicStarted = false;

function startMusic(){

    if(musicStarted) return;

    introMusic.volume = 0.35;

    introMusic.play().then(()=>{

        musicStarted = true;

        musicToggle.textContent = "🎵";

    }).catch(()=>{

        musicToggle.textContent = "🔇";

    });

}

musicToggle.addEventListener("click",()=>{

    if(!musicStarted){

        startMusic();
        return;

    }

    if(introMusic.paused){

        introMusic.play();
        musicToggle.textContent="🎵";

    }else{

        introMusic.pause();
        musicToggle.textContent="🔇";

    }

});

startBtn.addEventListener("click",()=>{

    startMusic();

    showPage(pages.loading);

    startLoading();

});


/* =====================================
   LOADING
===================================== */

function startLoading(){

    loadingBar.style.width="0%";

    let progress = 0;

    const timer = setInterval(()=>{

        progress++;

        loadingBar.style.width = progress+"%";

        if(progress>=100){

            clearInterval(timer);

            setTimeout(()=>{

                showPage(pages.ticket);

            },400);

        }

    },35);

}

/* =====================================
   BIGLIETTO
===================================== */

ticketContinue.disabled = true;

ticketInput.addEventListener("input",()=>{

    const value = ticketInput.value.trim();

    ticketContinue.disabled = value.length === 0;

});

ticketContinue.addEventListener("click",()=>{

    const name = ticketInput.value.trim();

    if(name==="") return;

    // salva il nome
    window.userName = name;

    showPage(pages.birthday);

    initBirthday();

});

/* =====================================
   CANDELINE
===================================== */

let candlesBlown = 0;

function initBirthday(){

    candlesBlown = 0;

    const title = document.getElementById("birthdayTitle");

    if(title){

        title.textContent =
            "Buon Compleanno " +
            (window.userName || "") +
            " 🤍";
    }

    candles.forEach(candle=>{

        candle.classList.remove("off");

    });

}

candles.forEach(candle=>{

    candle.addEventListener("click",()=>{

        if(candle.classList.contains("off")) return;

        candle.classList.add("off");

        candlesBlown++;

        candle.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(1.15)"},

                {transform:"scale(1)"}

            ],

            {

                duration:300

            }

        );

        if(candlesBlown===candles.length){

            setTimeout(()=>{

                showPage(pages.wish);

            },900);

        }

    });

});

/* =====================================
   DESIDERIO
===================================== */

function initWish(){

    if(wishStar){

        wishStar.classList.remove("active");
        wishStar.classList.remove("shooting");
    }

}

if(wishStar){

    wishStar.addEventListener("click",()=>{

        if(wishStar.classList.contains("shooting")) return;

        wishStar.classList.add("active");

        setTimeout(()=>{

            wishStar.classList.add("shooting");

        },400);

        setTimeout(()=>{

            showPage(pages.star);

            initStar();

        },2200);

    });

}

/* =====================================
   STELLA
===================================== */

const starButton = document.getElementById("starButton");
const starMessage = document.getElementById("starMessage");
const shootingStar = document.getElementById("shootingStar");

function initStar(){

    if(starButton){

        starButton.disabled = false;

    }

    if(shootingStar){

        shootingStar.classList.remove("animate");

    }

    if(starMessage){

        starMessage.classList.remove("show");

    }

}

if(starButton){

    starButton.addEventListener("click",()=>{

        if(starButton.disabled) return;

        starButton.disabled = true;

        if(shootingStar){

            shootingStar.classList.add("animate");

        }

        setTimeout(()=>{

            if(starMessage){

                starMessage.classList.add("show");

            }

        },1500);

        setTimeout(()=>{

            showPage(pages.constellation);

            startConstellation();

        },3200);

    });

}

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationPoints = [
    {x:48,y:15},
    {x:43,y:26},
    {x:56,y:35},
    {x:48,y:47},
    {x:38,y:60},
    {x:56,y:72},
    {x:45,y:84}
];

let constellationProgress = 0;

function startConstellation(){

    constellation.innerHTML="";

    constellationProgress = 0;

    constellationPoints.forEach((point,index)=>{

        const star = document.createElement("div");

        star.className = "constellation-star";

        star.style.left = point.x+"%";
        star.style.top = point.y+"%";

        star.dataset.index = index;

        constellation.appendChild(star);

    });

}

constellation.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("constellation-star")) return;

    const star = e.target;

    const index = Number(star.dataset.index);

    if(index!==constellationProgress) return;

    star.classList.add("active");

    if(index>0){

        const prev =
            document.querySelector(
                `.constellation-star[data-index="${index-1}"]`
            );

        drawConstellationLine(prev,star);

    }

    constellationProgress++;

    if(constellationProgress===constellationPoints.length){

        setTimeout(()=>{

            constellation.classList.add("constellation-complete");

        },600);

        setTimeout(()=>{

            showPage(pages.eyes);

            startEyesScene();

        },2600);

    }

});

function drawConstellationLine(a,b){

    const line = document.createElement("div");

    line.className="constellation-line";

    const ax=a.offsetLeft+6;
    const ay=a.offsetTop+6;

    const bx=b.offsetLeft+6;
    const by=b.offsetTop+6;

    const dx=bx-ax;
    const dy=by-ay;

    const length=Math.sqrt(dx*dx+dy*dy);

    line.style.width=length+"px";

    line.style.left=ax+"px";
    line.style.top=ay+"px";

    line.style.transform=
        `rotate(${Math.atan2(dy,dx)}rad)`;

    constellation.appendChild(line);

}

/* =====================================
   OCCHI
===================================== */

const eyesLine1 = document.getElementById("eyesLine1");
const eyesLine2 = document.getElementById("eyesLine2");

const eyesPhoto = document.getElementById("eyesPhoto");

const continueEyes =
document.getElementById("continueEyes");

function startEyesScene(){

    eyesLine1.classList.remove("show");
    eyesLine2.classList.remove("show");

    eyesPhoto.classList.remove("show");

    continueEyes.classList.remove("show");

    setTimeout(()=>{

        eyesLine1.classList.add("show");

    },800);

    setTimeout(()=>{

        eyesLine2.classList.add("show");

    },2800);

    setTimeout(()=>{

        eyesPhoto.classList.add("show");

    },4700);

    setTimeout(()=>{

        continueEyes.classList.add("show");

    },6000);

}

continueEyes.addEventListener("click",()=>{

    showPage(pages.heart);

    initHeart();

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

let heartProgress = 0;

function initHeart(){

    heartProgress = 0;

    heartFill.style.setProperty("--fill","0%");

    heartPercent.textContent="0%";

    heartMessage.textContent="Tocca il cuore ❤️";

}

heartFill.addEventListener("click",()=>{

    if(heartProgress>=10) return;

    heartProgress++;

    const percent = heartProgress*10;

    heartFill.style.setProperty("--fill",percent+"%");

    heartPercent.textContent = percent+"%";

    heartMessage.textContent = heartQuotes[percent];

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

function createHeartBurst(){

    const hearts=["❤️","💕","💖","💗","💞"];

    for(let i=0;i<35;i++){

        const h=document.createElement("div");

        h.className="heart-burst";

        h.textContent=
            hearts[Math.floor(Math.random()*hearts.length)];

        h.style.left=
            (50+(Math.random()-0.5)*18)+"%";

        h.style.top="50%";

        h.style.setProperty(

            "--x",

            (Math.random()-0.5)*250+"px"

        );

        h.style.setProperty(

            "--y",

            (-150-Math.random()*220)+"px"

        );

        h.style.fontSize=

            (18+Math.random()*18)+"px";

        document
            .getElementById("heartPage")
            .appendChild(h);

        setTimeout(()=>h.remove(),1800);

    }

}

/* =====================================
   LETTERA
===================================== */

const letterScene = document.getElementById("letterScene");
const openLetter = document.getElementById("openLetter");
const continueFromLetter = document.getElementById("continueFromLetter");

function initLetter(){

    letterScene.classList.remove("open");

    continueFromLetter.classList.remove("show");

}

openLetter.addEventListener("click",()=>{

    if(letterScene.classList.contains("open")) return;

    letterScene.classList.add("open");

    setTimeout(()=>{

        continueFromLetter.classList.add("show");

    },2500);

});

continueFromLetter.addEventListener("click",()=>{

    showPage(pages.fingerprint);

    initFingerprint();

});

