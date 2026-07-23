/* =====================================
   PROJECT SOFI V3
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
const constellationPage = document.getElementById("constellationPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const fingerprintPage = document.getElementById("fingerprintPage");
const finalPage = document.getElementById("finalPage");

const playButton = document.getElementById("playButton");
const start = document.getElementById("start");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

const wishInput = document.getElementById("wishInput");
const sendWish = document.getElementById("sendWish");
const wishStar = document.getElementById("wishStar");

const constellationSky = document.getElementById("constellationSky");
const constellationMessage = document.getElementById("constellationMessage");

const heart = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const continueFromLetter = document.getElementById("continueFromLetter");

const fingerprint = document.getElementById("fingerprint");
const fingerText = document.getElementById("fingerText");

const restart = document.getElementById("restart");

const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

/* =====================================
   VARIABILI
===================================== */

let candeline = 19;
let love = 0;
let festaPartita = false;
let holdTimer = null;

const testoLettera = `Cara Sofia,

Qui inseriremo la tua lettera definitiva.`;

/* =====================================
   SFONDO ANIMATO
===================================== */

const simboli = [

    "🤍",
    "❤️",
    "💖",
    "💕",
    "✨",
    "⭐"

];

function creaCuore(){

    if(!hearts) return;

    const cuore = document.createElement("div");

    cuore.className = "heart";

    cuore.innerHTML =
        simboli[
            Math.floor(
                Math.random()*simboli.length
            )
        ];

    cuore.style.left =
        Math.random()*100 + "vw";

    cuore.style.fontSize =
        (18 + Math.random()*30) + "px";

    cuore.style.animationDuration =
        (5 + Math.random()*4) + "s";

    hearts.appendChild(cuore);

    setTimeout(()=>{

        cuore.remove();

    },9000);

}

setInterval(creaCuore,180);

/* =====================================
   MUSICA + INTRO
===================================== */

if(playButton){

    playButton.addEventListener("click",()=>{

        if(bgMusic){

            bgMusic.volume = 0.35;

            bgMusic.play().catch(err=>{

                console.log(err);

            });

        }

        introPage.classList.add("hidden");

        home.classList.remove("hidden");

        avviaCaricamento();

    });

}

/* =====================================
   LOADING
===================================== */

function avviaCaricamento(){

    let valore = 0;

    const timer = setInterval(()=>{

        valore++;

        if(bar){

            bar.style.width =
            valore + "%";

        }

        if(percent){

            percent.innerHTML =
            valore + "%";

        }

        if(valore >= 100){

            clearInterval(timer);

            percent.innerHTML =
            "✨ È tutto pronto...";

            start.hidden = false;

        }

    },40);

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
   BIGLIETTO
===================================== */

function scappa(){

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

    no.addEventListener("mouseenter", scappa);

    no.addEventListener("touchstart",(e)=>{

        e.preventDefault();

        scappa();

    });

}

if(yes){

    yes.addEventListener("click",()=>{

        ticket.classList.add("hidden");

        birthday.classList.remove("hidden");

    });

}

/* =====================================
   CANDELINE
===================================== */

function creaCandeline(){

    if(!candlesBox) return;

    candlesBox.innerHTML = "";

    candeline = 19;

    for(let i=0;i<19;i++){

        const candela = document.createElement("div");

        candela.className = "candle";

        const fiamma = document.createElement("span");

        fiamma.className = "flame";

        fiamma.innerHTML = "🔥";

        candela.appendChild(fiamma);

        candela.addEventListener("click",()=>{

            if(fiamma.classList.contains("off")) return;

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
   COMPLEANNO FINITO
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

    if(!confetti) return;

    const colori=[

        "#ff4f8b",
        "#ffd166",
        "#ffffff",
        "#ff8ab6",
        "#c77dff"

    ];

    for(let i=0;i<180;i++){

        const pezzo=document.createElement("div");

        pezzo.className="confetti-piece";

        pezzo.style.left=Math.random()*100+"vw";

        pezzo.style.background=
            colori[
                Math.floor(
                    Math.random()*colori.length
                )
            ];

        pezzo.style.animationDuration=
            (2+Math.random()*3)+"s";

        confetti.appendChild(pezzo);

        setTimeout(()=>{

            pezzo.remove();

        },6000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

if(sendWish){

    sendWish.addEventListener("click",()=>{

        const desiderio = wishInput.value.trim();

        if(desiderio===""){

            alert("Scrivi prima un desiderio 🤍");

            return;

        }

        emailjs.send(

            "service_umr8t4k",

            "template_ag1927r",

            {

                wish:desiderio

            }

        )

        .then(()=>{

            wishPage.classList.add("hidden");

            starPage.classList.remove("hidden");

            setTimeout(()=>{

                starPage.classList.add("hidden");

                avviaCostellazione();

            },3000);

        })

        .catch(err=>{

            console.error(err);

            alert("Errore nell'invio del desiderio.");

        });

    });

}

/* =====================================
   COSTELLAZIONE
===================================== */

function avviaCostellazione(){

    constellationPage.classList.remove("hidden");

    constellationSky.innerHTML="";

    constellationMessage.classList.add("hidden");

    for(let i=0;i<30;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*96+"%";

        star.style.top=Math.random()*92+"%";

        star.addEventListener("click",()=>{

            scegliStella(star);

        });

        constellationSky.appendChild(star);

    }

}

/* =====================================
   STELLA SCELTA
===================================== */

function scegliStella(stella){

    document

    .querySelectorAll(".star")

    .forEach(s=>{

        s.style.pointerEvents="none";

    });

    stella.classList.add("selected");

    constellationMessage.classList.remove("hidden");

    setTimeout(()=>{

        constellationPage.classList.add("hidden");

        heartPage.classList.remove("hidden");

    },2500);

}

/* =====================================
   CUORE
===================================== */

if(heart){

    heart.addEventListener("click",()=>{

        if(love>=100) return;

        love+=2;

        if(love>100){

            love=100;

        }

        heartPercent.innerHTML=love+"%";

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

function apriLettera(){

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";

        paper.classList.add("show");

        scriviLettera();

    },1200);

}

/* =====================================
   MACCHINA DA SCRIVERE
===================================== */

function scriviLettera(){

    let i=0;

    letterText.innerHTML="";

    continueFromLetter.classList.add("hidden");

    const timer=setInterval(()=>{

        letterText.innerHTML+=testoLettera.charAt(i);

        i++;

        if(i>=testoLettera.length){

            clearInterval(timer);

            continueFromLetter.classList.remove("hidden");

        }

    },35);

}

/* =====================================
   CONTINUA
===================================== */

if(continueFromLetter){

    continueFromLetter.addEventListener("click",()=>{

        letterPage.classList.add("hidden");

        fingerprintPage.classList.remove("hidden");

    });

}

/* =====================================
   IMPRONTA
===================================== */

if(fingerprint){

    const avviaFinale = ()=>{

        fingerprint.classList.add("active");

        fingerText.innerHTML="Perfetto... 🤍";

        setTimeout(()=>{

            fingerprintPage.classList.add("hidden");

            avviaVocale();

        },700);

    };

    fingerprint.addEventListener("mousedown",()=>{

        holdTimer=setTimeout(avviaFinale,1000);

    });

    fingerprint.addEventListener("mouseup",()=>{

        clearTimeout(holdTimer);

    });

    fingerprint.addEventListener("mouseleave",()=>{

        clearTimeout(holdTimer);

    });

    fingerprint.addEventListener("touchstart",(e)=>{

        e.preventDefault();

        holdTimer=setTimeout(avviaFinale,1000);

    });

    fingerprint.addEventListener("touchend",()=>{

        clearTimeout(holdTimer);

    });

}

/* =====================================
   VOCALE
===================================== */

function avviaVocale(){

    if(bgMusic){

        bgMusic.volume=0.08;

    }

    if(!voiceMessage){

        mostraFinale();

        return;

    }

    voiceMessage.play().catch(()=>{

        mostraFinale();

    });

    voiceMessage.onended=()=>{

        if(bgMusic){

            bgMusic.volume=0.35;

        }

        mostraFinale();

    };

}

/* =====================================
   FINALE
===================================== */

function mostraFinale(){

    setTimeout(()=>{

        finalPage.classList.remove("hidden");

        creaConfetti();

    },800);

}

/* =====================================
   RICOMINCIA
===================================== */

if(restart){

    restart.addEventListener("click",()=>{

        location.reload();

    });

}

console.log("PROJECT SOFI V3 CARICATO ❤️");

