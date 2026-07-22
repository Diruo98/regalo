/* =====================================
   PROJECT AURORA v8
   SCRIPT - BLOCCO 1
===================================== */

// ==============================
// ELEMENTI
// ==============================

const intro = document.getElementById("intro");
const home = document.getElementById("home");
const ticket = document.getElementById("ticket");
const birthday = document.getElementById("birthday");
const wishPage = document.getElementById("wishPage");
const starPage = document.getElementById("starPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");

const playButton = document.getElementById("playButton");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");

const heartFill = document.getElementById("heartFill");

const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

// ==============================
// SFONDO CUORI
// ==============================

const hearts = document.getElementById("hearts");

const symbols = [
    "🤍",
    "❤️",
    "💖",
    "💕",
    "✨",
    "⭐",
    "🌹",
    "💗"
];

function createHeart(){

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random()*symbols.length
            )
        ];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (15 + Math.random()*35) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,150);

// ==============================
// MUSICA
// ==============================

function startMusic(){

    if(!bgMusic) return;

    bgMusic.volume = 0.35;

    bgMusic.play().catch(()=>{});

}

// ==============================
// PULSANTE INIZIA
// ==============================

if(playButton){

    playButton.addEventListener("click",()=>{

        startMusic();

        intro.classList.add("hidden");

        home.classList.remove("hidden");

        startLoading();

    });

}

// ==============================
// CARICAMENTO
// ==============================

function startLoading(){

    let value = 0;

    const loading = setInterval(()=>{

        value++;

        bar.style.width = value + "%";

        percent.innerHTML = value + "%";

        if(value >= 100){

            clearInterval(loading);

            percent.innerHTML =
            "✨ È tutto pronto...";

            setTimeout(()=>{

                home.classList.add("hidden");

                ticket.classList.remove("hidden");

            },1200);

        }

    },45);

}

// =====================================
// SCRIPT - BLOCCO 2
// BIGLIETTO • CANDELINE • CORIANDOLI
// =====================================

// ==============================
// PULSANTE "NO" CHE SCAPPA 😂
// ==============================

function moveNoButton(){

    if(!no) return;

    no.style.position = "fixed";

    no.style.left =
        Math.random() *
        (window.innerWidth - no.offsetWidth) + "px";

    no.style.top =
        Math.random() *
        (window.innerHeight - no.offsetHeight) + "px";

}

if(no){

    no.addEventListener(
        "mouseenter",
        moveNoButton
    );

    no.addEventListener(
        "touchstart",
        (e)=>{
            e.preventDefault();
            moveNoButton();
        }
    );

}

// ==============================
// SI ❤️
// ==============================

if(yes){

    yes.addEventListener("click",()=>{

        ticket.classList.add("hidden");

        birthday.classList.remove("hidden");

        createCandles();

    });

}

// ==============================
// CANDELINE
// ==============================

let candlesLeft = 19;
let created = false;

function createCandles(){

    if(created) return;

    created = true;

    for(let i=0;i<19;i++){

        const candle =
        document.createElement("div");

        candle.className = "candle";

        const flame =
        document.createElement("span");

        flame.className = "flame";
        flame.innerHTML = "🔥";

        candle.appendChild(flame);

        candle.addEventListener("click",()=>{

            if(
                flame.classList.contains("off")
            ) return;

            flame.classList.add("off");

            const smoke =
            document.createElement("span");

            smoke.className = "smoke";
            smoke.innerHTML = "💨";

            candle.appendChild(smoke);

            candlesLeft--;

            counter.innerHTML =
            "Candeline rimaste: " +
            candlesLeft;

            if(candlesLeft===0){

                birthdayFinished();

            }

        });

        candlesBox.appendChild(candle);

    }

}

// ==============================
// FINE TORTA
// ==============================

function birthdayFinished(){

    createConfetti();

    setTimeout(()=>{

        birthday.classList.add("hidden");

        wishPage.classList.remove("hidden");

    },1200);

}

// ==============================
// CORIANDOLI
// ==============================

function createConfetti(){

    const area =
    document.getElementById("confetti");

    if(!area) return;

    const colors=[

        "#ff4d88",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff8fab",
        "#c77dff"

    ];

    for(let i=0;i<180;i++){

        const piece =
        document.createElement("div");

        piece.className =
        "confetti-piece";

        piece.style.left =
        Math.random()*100+"vw";

        piece.style.background =
        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ];

        piece.style.animationDuration =
        (2+Math.random()*3)+"s";

        area.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6000);

    }

}

// =====================================
// SCRIPT - BLOCCO 3
// DESIDERIO • STELLA • CUORE
// =====================================

// ==============================
// DESIDERIO
// ==============================

let wish = "";

if(sendWish){

    sendWish.addEventListener("click",()=>{

        wish = wishInput.value.trim();

        if(wish===""){

            wish =
            "Un desiderio pieno d'amore 🤍";

        }

        localStorage.setItem(
            "auroraWish",
            wish
        );

        wishPage.classList.add("hidden");

        starPage.classList.remove("hidden");

        setTimeout(()=>{

            openHeart();

        },2500);

    });

}

// ==============================
// APRE IL CUORE
// ==============================

function openHeart(){

    starPage.classList.add("hidden");

    heartPage.classList.remove("hidden");

}

// ==============================
// CUORE
// ==============================

const heartsStep=[

    "🤍",
    "🤍✨",
    "💗",
    "💖",
    "❤️"

];

let touches=0;

if(heartFill){

    heartFill.addEventListener("click",()=>{

        if(touches>=5) return;

        heartFill.innerHTML=
        heartsStep[touches];

        heartFill.style.transform=
        "scale(1.15)";

        setTimeout(()=>{

            heartFill.style.transform=
            "scale(1)";

        },180);

        touches++;

        if(touches>=5){

            heartFill.classList.add(
                "complete"
            );

            createHeartExplosion();

            setTimeout(()=>{

                openLetter();

            },1800);

        }

    });

}

// ==============================
// ESPLOSIONE CUORI
// ==============================

function createHeartExplosion(){

    const area=
    document.getElementById("confetti");

    if(!area) return;

    for(let i=0;i<60;i++){

        const item=
        document.createElement("div");

        item.className="heart";

        item.innerHTML=
        Math.random()>0.5?
        "✨":"💖";

        item.style.left="50vw";

        item.style.top="50vh";

        item.style.fontSize=
        (18+Math.random()*18)+"px";

        item.style.transition=
        "1.2s";

        area.appendChild(item);

        const x=
        (Math.random()-0.5)*500;

        const y=
        (Math.random()-0.5)*500;

        requestAnimationFrame(()=>{

            item.style.transform=
            `translate(${x}px,${y}px)`;

            item.style.opacity="0";

        });

        setTimeout(()=>{

            item.remove();

        },1500);

    }

}

// =====================================
// SCRIPT - BLOCCO 4
// LETTERA • AUDIO • FINALE
// =====================================

// ==============================
// APERTURA LETTERA
// ==============================

function openLetter(){

    heartPage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    setTimeout(()=>{

        envelope.classList.add("open");

    },700);

    setTimeout(()=>{

        playVoice();

        writeLetter();

    },1800);

}

// ==============================
// VOCALE
// ==============================

function playVoice(){

    if(bgMusic){

        bgMusic.volume=0.08;

    }

    if(voiceMessage){

        voiceMessage.play().catch(()=>{});

    }

}

// ==============================
// LETTERA
// ==============================

function writeLetter(){

    const savedWish =
    localStorage.getItem("auroraWish") || wish;

    const text = `

Amore mio 🤍


Se sei arrivata fino a qui...

vuol dire che hai completato
questo piccolo viaggio che ho
preparato con tanto affetto.


Hai spento le candeline.

Hai espresso un desiderio.

Hai riempito il mio cuore. ❤️


Il tuo desiderio:

✨ ${savedWish}


Spero che questo piccolo regalo
ti abbia fatto sorridere anche
solo un pochino.


Buon compleanno amore mio.

Ti voglio un mondo di bene. 🤍


`;

    letterText.innerHTML="";

    let i=0;

    function type(){

        if(i<text.length){

            letterText.innerHTML +=
            text.charAt(i);

            i++;

            setTimeout(type,40);

        }else{

            setTimeout(showFinal,3000);

        }

    }

    type();

}

// ==============================
// FINALE
// ==============================

function showFinal(){

    letterPage.classList.add("hidden");

    finalPage.classList.remove("hidden");

    if(bgMusic){

        bgMusic.volume=0.30;

    }

}

