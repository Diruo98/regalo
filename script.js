/* =====================================
   PROJECT AURORA v11
===================================== */

/* =====================================
   ELEMENTI
===================================== */

const introPage = document.getElementById("introPage");
const home = document.getElementById("home");
const ticket = document.getElementById("ticket");
const birthday = document.getElementById("birthday");
const wishPage = document.getElementById("wishPage");
const starPage = document.getElementById("starPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");

const playButton = document.getElementById("playButton");
const start = document.getElementById("start");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

/* =====================================
   SFONDO CUORI
===================================== */

const hearts = document.getElementById("hearts");

const simboli = [
    "❤️",
    "🤍",
    "💕",
    "💖",
    "✨",
    "⭐",
    "🌹",
    "🦁"
];

function creaCuore(){

    if(!hearts) return;

    const cuore = document.createElement("div");

    cuore.className = "heart";

    cuore.innerHTML =
        simboli[
            Math.floor(Math.random()*simboli.length)
        ];

    cuore.style.left =
        Math.random()*100+"vw";

    cuore.style.fontSize =
        (18+Math.random()*38)+"px";

    cuore.style.animationDuration =
        (4+Math.random()*5)+"s";

    hearts.appendChild(cuore);

    setTimeout(()=>{
        cuore.remove();
    },9000);

}

setInterval(creaCuore,150);

/* =====================================
   PLAY
===================================== */

if(playButton){

    playButton.addEventListener("click",()=>{

        if(bgMusic){

    bgMusic.volume = 0.35;

    bgMusic.play()
        .then(() => {
            console.log("Musica partita!");
        })
        .catch((err) => {
            console.error("Errore audio:", err);
        });

}

}

/* =====================================
   CARICAMENTO
===================================== */

function avviaCaricamento(){

    let valore = 0;

    const timer = setInterval(()=>{

        valore++;

        if(bar)
            bar.style.width = valore + "%";

        if(percent)
            percent.innerHTML = valore + "%";

        if(valore >= 100){

            clearInterval(timer);

            percent.innerHTML =
            "✨ È tutto pronto 🤍";

            start.hidden = false;

        }

    },45);

}

/* =====================================
   INIZIA IL VIAGGIO
===================================== */

if(start){

    start.addEventListener("click",()=>{

        home.classList.add("hidden");

        ticket.classList.remove("hidden");

    });

}

/* =====================================
   PULSANTE NO 😂
===================================== */

function scappa(){

    if(!no) return;

    no.style.position = "fixed";

    no.style.left =
    Math.random() *
    (window.innerWidth - no.offsetWidth)
    + "px";

    no.style.top =
    Math.random() *
    (window.innerHeight - no.offsetHeight)
    + "px";

}

if(no){

    no.addEventListener("mouseenter",scappa);

    no.addEventListener("touchstart",(e)=>{

        e.preventDefault();

        scappa();

    });

}

/* =====================================
   PULSANTE SI ❤️
===================================== */

if(yes){

    yes.addEventListener("click",()=>{

        ticket.classList.add("hidden");

        birthday.classList.remove("hidden");

    });

}

/* =====================================
   CANDELINE
===================================== */

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

let candeline = 19;
let festaPartita = false;

function creaCandeline(){

    if(!candlesBox) return;

    candlesBox.innerHTML = "";

    for(let i=0; i<19; i++){

        const candela = document.createElement("div");
        candela.className = "candle";

        const fiamma = document.createElement("span");
        fiamma.className = "flame";
        fiamma.innerHTML = "🔥";

        candela.appendChild(fiamma);

        candela.addEventListener("click",()=>{

            if(fiamma.classList.contains("off"))
                return;

            fiamma.classList.add("off");

            const fumo = document.createElement("span");
            fumo.className = "smoke";
            fumo.innerHTML = "💨";

            candela.appendChild(fumo);

            candeline--;

            if(counter){

                counter.innerHTML =
                "Candeline rimaste: " + candeline;

            }

            if(candeline === 0 && !festaPartita){

                festaPartita = true;

                festaFinita();

            }

        });

        candlesBox.appendChild(candela);

    }

}

creaCandeline();

/* =====================================
   FINE CANDELINE
===================================== */

function festaFinita(){

    creaConfetti();

    setTimeout(()=>{

        birthday.classList.add("hidden");

        wishPage.classList.remove("hidden");

    },1200);

}

/* =====================================
   CORIANDOLI
===================================== */

function creaConfetti(){

    const area =
    document.getElementById("confetti");

    if(!area) return;

    const colori = [

        "#ff4d88",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff8fab",
        "#c77dff"

    ];

    for(let i=0; i<180; i++){

        const pezzo =
        document.createElement("div");

        pezzo.className =
        "confetti-piece";

        pezzo.style.left =
        Math.random()*100 + "vw";

        pezzo.style.background =
        colori[
            Math.floor(
                Math.random()*colori.length
            )
        ];

        pezzo.style.animationDuration =
        (2 + Math.random()*3) + "s";

        area.appendChild(pezzo);

        setTimeout(()=>{

            pezzo.remove();

        },6000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");
const wishStar = document.getElementById("wishStar");

if(sendWish){

    sendWish.addEventListener("click",()=>{

        if(wishInput.value.trim()===""){

            alert("Scrivi prima un desiderio 🤍");
            return;

        }

        wishPage.classList.add("hidden");
        starPage.classList.remove("hidden");

        setTimeout(()=>{

            starPage.classList.add("hidden");
            heartPage.classList.remove("hidden");

        },3000);

    });

}

/* =====================================
   CUORE
===================================== */

const heart = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");

let love = 0;

if(heart){

    heart.addEventListener("click",()=>{

        if(love>=100) return;

        love += 2;

        if(love>100) love=100;

        heartPercent.innerHTML = love + "%";

        if(love===100){

            heart.classList.add("complete");

            setTimeout(()=>{

                heartPage.classList.add("hidden");
                letterPage.classList.remove("hidden");

                apriLettera();

            },1200);

        }

    });

}

/* =====================================
   LETTERA
===================================== */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

const testoLettera = `Cara Aurora,

Qui scriverai tutta la tua lettera.

Ogni frase comparirà lentamente,
come se fosse scritta in quel momento.

Ti voglio bene. ❤️`;

function apriLettera(){

    if(envelope){

        envelope.classList.add("open");

    }

    setTimeout(()=>{

        if(envelope){

            envelope.style.opacity="0";

            envelope.style.transform="scale(.8)";

        }

        if(paper){

            paper.classList.add("show");

        }

        scriviLettera();

    },1200);

}

/* =====================================
   EFFETTO MACCHINA DA SCRIVERE
===================================== */

function scriviLettera(){

    let i=0;

    letterText.innerHTML="";

    const timer=setInterval(()=>{

        letterText.innerHTML += testoLettera.charAt(i);

        i++;

        if(i>=testoLettera.length){

            clearInterval(timer);

            avviaVocale();

        }

    },40);

}

/* =====================================
   VOCALE + FINALE
===================================== */

function avviaVocale(){

    if(!voiceMessage){

        mostraFinale();
        return;

    }

    if(bgMusic){

        bgMusic.volume = 0.10;

    }

    voiceMessage.play().catch(()=>{

        mostraFinale();

    });

    voiceMessage.onended = ()=>{

        if(bgMusic){

            bgMusic.volume = 0.35;

        }

        mostraFinale();

    };

}

/* =====================================
   FINALE
===================================== */

function mostraFinale(){

    setTimeout(()=>{

        if(letterPage){

            letterPage.classList.add("hidden");

        }

        if(finalPage){

            finalPage.classList.remove("hidden");

        }

        creaConfetti();

    },1000);

}

/* =====================================
   RICOMINCIA
===================================== */

const restart = document.getElementById("restart");

if(restart){

    restart.addEventListener("click",()=>{

        location.reload();

    });

}
