/* =====================================
   PROJECT SOFIA ❤️
===================================== */

/* =====================================
   ELEMENTI DEL DOM
===================================== */

const introPage = document.getElementById("introPage");
const home = document.getElementById("home");
const ticket = document.getElementById("ticket");
const birthday = document.getElementById("birthday");
const wishPage = document.getElementById("wishPage");
const starPage = document.getElementById("starPage");
const constellationPage = document.getElementById("constellationPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");

const playButton = document.getElementById("playButton");
const startButton = document.getElementById("start");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const loadingBar = document.getElementById("bar");
const loadingPercent = document.getElementById("percent");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");

const constellationSky = document.getElementById("constellationSky");

const heart = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

const restart = document.getElementById("restart");

/* =====================================
   VARIABILI
===================================== */

let loadingValue = 0;
let candlesLeft = 19;
let heartValue = 0;

const letterContent = `Cara Sofia,

Qui andrà la lettera definitiva. ❤️`;

/* =====================================
   GESTIONE PAGINE
===================================== */

const pages = [
    introPage,
    home,
    ticket,
    birthday,
    wishPage,
    starPage,
    constellationPage,
    heartPage,
    letterPage,
    finalPage
];

function showPage(page){

    pages.forEach(p=>{

        if(p){
            p.classList.add("hidden");
        }

    });

    if(page){
        page.classList.remove("hidden");
    }

}

/* =====================================
   PLAY + MUSICA
===================================== */

if(playButton){

    playButton.addEventListener("click",()=>{

        if(bgMusic){

            bgMusic.volume = 0.35;

            bgMusic.play().catch(err=>{

                console.error(err);

            });

        }

        showPage(home);

        startLoading();

    });

}

/* =====================================
   CARICAMENTO
===================================== */

function startLoading(){

    loadingValue = 0;

    if(loadingBar){
        loadingBar.style.width = "0%";
    }

    if(loadingPercent){
        loadingPercent.textContent = "0%";
    }

    if(startButton){
        startButton.hidden = true;
    }

    const timer = setInterval(()=>{

        loadingValue++;

        if(loadingBar){
            loadingBar.style.width = loadingValue + "%";
        }

        if(loadingPercent){
            loadingPercent.textContent = loadingValue + "%";
        }

        if(loadingValue >= 100){

            clearInterval(timer);

            if(loadingPercent){
                loadingPercent.textContent = "✨ È tutto pronto 🤍";
            }

            if(startButton){
                startButton.hidden = false;
            }

        }

    },45);

}

/* =====================================
   INIZIA IL VIAGGIO
===================================== */

if(startButton){

    startButton.addEventListener("click",()=>{

        showPage(ticket);

    });

}

/* =====================================
   BIGLIETTO
===================================== */

function moveNoButton(){

    if(!noButton) return;

    noButton.style.position = "fixed";

    noButton.style.left =
        Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";

    noButton.style.top =
        Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";

}

if(noButton){

    noButton.addEventListener("mouseenter",moveNoButton);

    noButton.addEventListener("touchstart",(e)=>{

        e.preventDefault();

        moveNoButton();

    });

}

if(yesButton){

    yesButton.addEventListener("click",()=>{

        showPage(birthday);

        createCandles();

    });

}

/* =====================================
   CANDELINE
===================================== */

function createCandles(){

    if(!candlesBox) return;

    candlesLeft = 19;

    candlesBox.innerHTML = "";

    if(counter){
        counter.textContent = "Candeline rimaste: 19";
    }

    for(let i = 0; i < 19; i++){

        const candle = document.createElement("div");
        candle.className = "candle";

        const flame = document.createElement("span");
        flame.className = "flame";
        flame.textContent = "🔥";

        candle.appendChild(flame);

        candle.addEventListener("click",()=>{

            if(flame.classList.contains("off")) return;

            flame.classList.add("off");

            const smoke = document.createElement("span");
            smoke.className = "smoke";
            smoke.textContent = "💨";

            candle.appendChild(smoke);

            candlesLeft--;

            if(counter){
                counter.textContent =
                    "Candeline rimaste: " + candlesLeft;
            }

            if(candlesLeft === 0){

                createConfetti();

                setTimeout(()=>{

                    showPage(wishPage);

                },1200);

            }

        });

        candlesBox.appendChild(candle);

    }

}

/* =====================================
   CORIANDOLI
===================================== */

function createConfetti(){

    const area = document.getElementById("confetti");

    if(!area) return;

    const colors = [
        "#ff4d88",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff8fab",
        "#c77dff"
    ];

    for(let i = 0; i < 180; i++){

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        area.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

if(sendWish){

    sendWish.addEventListener("click",()=>{

        const wish = wishInput.value.trim();

        if(wish === ""){

            alert("Scrivi prima un desiderio 🤍");

            return;

        }

        emailjs.send(
            "service_umr8t4k",
            "template_ag1927r",
            {
                wish: wish
            }
        )
        .then(()=>{

            startWishAnimation();

        })
        .catch((error)=>{

            console.error(error);

            alert("Errore durante l'invio del desiderio.");

        });

    });

}

/* =====================================
   STELLA
===================================== */

function startWishAnimation(){

    showPage(starPage);

    setTimeout(()=>{

        showPage(constellationPage);

        startConstellation();

    },3000);

}

