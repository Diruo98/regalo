/* =====================================
   PROJECT SOFI ❤️
   SCRIPT V2
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
const finalPage = document.getElementById("finalPage");

const playButton = document.getElementById("playButton");
const start = document.getElementById("start");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

/* =====================================
   VARIABILI
===================================== */

let typingTimer = null;
let heartValue = 0;
let candlesLeft = 19;

/* =====================================
   FUNZIONE CAMBIO PAGINA
===================================== */

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.add("hidden");

    });

    page.classList.remove("hidden");

}

/* =====================================
   INTRO
===================================== */

if(playButton){

    playButton.addEventListener("click",()=>{

        if(bgMusic){

            bgMusic.volume = 0.35;

            bgMusic.play().catch(err=>{

                console.log(err);

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

    let value = 0;

    const timer = setInterval(()=>{

        value++;

        bar.style.width = value + "%";

        percent.textContent = value + "%";

        if(value >= 100){

            clearInterval(timer);

            percent.innerHTML = "✨ È tutto pronto...";

            start.hidden = false;

        }

    },45);

}

/* =====================================
   INIZIA IL VIAGGIO
===================================== */

if(start){

    start.addEventListener("click",()=>{

        showPage(ticket);

    });

}

/* =====================================
   PULSANTE NO
===================================== */

function moveNoButton(){

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

    no.addEventListener("mouseenter",moveNoButton);

    no.addEventListener("touchstart",(e)=>{

        e.preventDefault();

        moveNoButton();

    });

}

/* =====================================
   PULSANTE SI
===================================== */

if(yes){

    yes.addEventListener("click",()=>{

        showPage(birthday);

        createCandles();

    });

}

/* =====================================
   SFONDO CUORI
===================================== */

const symbols = [

    "❤️",
    "🤍",
    "💕",
    "💖",
    "✨",
    "⭐",
    "🌹",
    "🦁"

];

function createFloatingHeart(){

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        symbols[
            Math.floor(Math.random()*symbols.length)
        ];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*35) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createFloatingHeart,180);

/* =====================================
   CANDELINE
===================================== */

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

function createCandles(){

    candlesLeft = 19;

    candlesBox.innerHTML = "";

    counter.textContent =
        "Candeline rimaste: " + candlesLeft;

    for(let i=0;i<19;i++){

        const candle = document.createElement("div");

        candle.className = "candle";

        const flame = document.createElement("span");

        flame.className = "flame";

        flame.innerHTML = "🔥";

        candle.appendChild(flame);

        candle.addEventListener("click",()=>{

            if(flame.classList.contains("off"))
                return;

            flame.classList.add("off");

            const smoke =
                document.createElement("span");

            smoke.className = "smoke";

            smoke.innerHTML = "💨";

            candle.appendChild(smoke);

            candlesLeft--;

            counter.textContent =
                "Candeline rimaste: " + candlesLeft;

            if(candlesLeft===0){

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

    const colors = [

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
            Math.random()*100 + "vw";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random()*colors.length
                )
            ];

        piece.style.animationDuration =
            (2+Math.random()*3)+"s";

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6000);

    }

}

/* =====================================
   DESIDERIO
===================================== */

const wishInput =
document.getElementById("wishInput");

const sendWish =
document.getElementById("sendWish");

if(sendWish){

    sendWish.addEventListener("click",()=>{

        const wish =
            wishInput.value.trim();

        if(wish===""){

            alert("Scrivi prima un desiderio 🤍");

            return;

        }

        emailjs.send(

            "service_umr8t4k",

            "template_ag1927r",

            {

                wish: wish

            }

        ).then(()=>{

            showPage(starPage);

            setTimeout(()=>{

                showPage(constellationPage);

                startConstellation();

            },3000);

        }).catch(()=>{

            alert("Errore nell'invio del desiderio.");

        });

    });

}

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationSky =
document.getElementById("constellationSky");

const constellationMessage =
document.getElementById("constellationMessage");

function startConstellation(){

    if(!constellationSky) return;

    constellationSky.innerHTML = "";

    if(constellationMessage){

        constellationMessage.classList.add("hidden");

    }

    for(let i=0;i<30;i++){

        const star =
        document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random()*95 + "%";

        star.style.top =
            Math.random()*90 + "%";

        star.addEventListener("click",()=>{

            chooseStar(star);

        });

        constellationSky.appendChild(star);

    }

}

function chooseStar(selectedStar){

    document
        .querySelectorAll(".star")
        .forEach(star=>{

            star.style.pointerEvents="none";

        });

    selectedStar.classList.add("selected");

    if(constellationMessage){

        constellationMessage.classList.remove("hidden");

    }

    setTimeout(()=>{

        showPage(heartPage);

        startHeart();

    },2500);

}

/* =====================================
   CUORE
===================================== */

const heart =
document.getElementById("heartFill");

const heartPercent =
document.getElementById("heartPercent");

function startHeart(){

    heartValue = 0;

    if(heart){

        heart.classList.remove("complete");

    }

    if(heartPercent){

        heartPercent.textContent = "0%";

    }

}

if(heart){

    heart.addEventListener("click",()=>{

        if(heartValue>=100) return;

        heartValue += 2;

        if(heartValue>100){

            heartValue = 100;

        }

        heartPercent.textContent =
            heartValue + "%";

        heart.style.transform="scale(1.08)";

        setTimeout(()=>{

            heart.style.transform="scale(1)";

        },120);

        createHeartSparkles();

        if(heartValue===100){

            heart.classList.add("complete");

            setTimeout(()=>{

                openLetter();

            },1200);

        }

    });

}

/* =====================================
   SCINTILLE
===================================== */

function createHeartSparkles(){

    if(!heart) return;

    for(let i=0;i<8;i++){

        const sparkle =
        document.createElement("span");

        sparkle.innerHTML="✨";

        sparkle.style.position="absolute";

        sparkle.style.left=
            (40+Math.random()*20)+"%";

        sparkle.style.top=
            (40+Math.random()*20)+"%";

        sparkle.style.fontSize=
            (12+Math.random()*12)+"px";

        sparkle.style.pointerEvents="none";

        sparkle.style.transition=
            "all .8s ease";

        heart.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform=
            `translate(${Math.random()*120-60}px,${Math.random()*120-60}px) scale(0)`;

            sparkle.style.opacity="0";

        },20);

        setTimeout(()=>{

            sparkle.remove();

        },900);

    }

}

/* =====================================
   LETTERA
===================================== */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

const letterContent = `Cara Sofia,

se stai leggendo queste parole significa che sei arrivata fino alla fine di questo piccolo viaggio.

Ogni pagina è stata realizzata pensando a te.

Ogni dettaglio è stato creato con il cuore.

Spero che questo compleanno possa regalarti tanti sorrisi e che tutti i tuoi sogni possano realizzarsi.

Grazie per essere una persona speciale.

Buon compleanno amore mio. ❤️

Con affetto,

Eddi 🤍`;

function openLetter(){

    showPage(letterPage);

    if(envelope){

        envelope.classList.add("open");

    }

    setTimeout(()=>{

        if(envelope){

            envelope.style.opacity = "0";
            envelope.style.transform = "scale(.8)";

        }

        if(paper){

            paper.classList.add("show");

        }

        writeLetter();

    },1200);

}

/* =====================================
   MACCHINA DA SCRIVERE
===================================== */

function writeLetter(){

    let index = 0;

    letterText.innerHTML = "";

    clearInterval(typingTimer);

    typingTimer = setInterval(()=>{

        if(index >= letterContent.length){

            clearInterval(typingTimer);

            showVoiceButton();

            return;

        }

        letterText.innerHTML += letterContent.charAt(index);

        letterText.scrollTop = letterText.scrollHeight;

        index++;

    },35);

}

/* =====================================
   PULSANTE VOCALE
===================================== */

function showVoiceButton(){

    if(document.getElementById("playVoice")) return;

    const button = document.createElement("button");

    button.id = "playVoice";

    button.className = "romantic-button";

    button.innerHTML = "🎙️ Ascolta la mia voce";

    paper.appendChild(button);

    button.addEventListener("click",()=>{

        button.disabled = true;

        playVoice();

    });

}

/* =====================================
   VOCALE
===================================== */

function playVoice(){

    if(!voiceMessage){

        showFinal();

        return;

    }

    fadeMusic(0.08);

    voiceMessage.play();

    voiceMessage.onended = ()=>{

        fadeMusic(0.35);

        setTimeout(()=>{

            showFinal();

        },1000);

    };

}

/* =====================================
   FADE MUSICA
===================================== */

function fadeMusic(target){

    if(!bgMusic) return;

    const timer = setInterval(()=>{

        if(bgMusic.volume > target){

            bgMusic.volume -= 0.01;

        }else if(bgMusic.volume < target){

            bgMusic.volume += 0.01;

        }

        if(Math.abs(bgMusic.volume-target) < 0.02){

            bgMusic.volume = target;

            clearInterval(timer);

        }

    },70);

}

/* =====================================
   FINALE
===================================== */

function showFinal(){

    showPage(finalPage);

    createConfetti();

    createFinalHearts();

}

/* =====================================
   CUORI FINALI
===================================== */

function createFinalHearts(){

    const list = [

        "❤️",
        "🤍",
        "✨",
        "⭐",
        "💕"

    ];

    for(let i=0;i<60;i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            list[Math.floor(Math.random()*list.length)];

        heart.style.left =
            Math.random()*100 + "vw";

        heart.style.fontSize =
            (20+Math.random()*20)+"px";

        heart.style.animationDuration =
            (4+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    }

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

console.log("PROJECT SOFI ❤️ caricato correttamente");

