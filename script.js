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

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationMessage =
document.getElementById("constellationMessage");

function startConstellation(){

    if(!constellationSky) return;

    constellationSky.innerHTML = "";

    if(constellationMessage){

        constellationMessage.classList.add("hidden");

    }

    for(let i=0;i<30;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*95 + "%";

        star.style.top = Math.random()*90 + "%";

        star.style.animationDelay =
            Math.random()*2 + "s";

        star.addEventListener("click",()=>{

            selectStar(star);

        });

        constellationSky.appendChild(star);

    }

}

function selectStar(selectedStar){

    document
    .querySelectorAll(".star")
    .forEach(star=>{

        star.style.pointerEvents = "none";

        if(star !== selectedStar){

            star.style.opacity = ".35";

        }

    });

    selectedStar.classList.add("selected");

    setTimeout(()=>{

        if(constellationMessage){

            constellationMessage.classList.remove("hidden");

        }

    },800);

    setTimeout(()=>{

        showPage(heartPage);

    },3200);

}

/* =====================================
   COSTELLAZIONE
===================================== */

const constellationMessage =
document.getElementById("constellationMessage");

function startConstellation(){

    if(!constellationSky) return;

    constellationSky.innerHTML = "";

    if(constellationMessage){

        constellationMessage.classList.remove("show");

    }

    for(let i=0;i<30;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*95 + "%";
        star.style.top = Math.random()*90 + "%";

        star.style.animationDelay =
            (Math.random()*2)+"s";

        star.addEventListener("click",()=>{

            chooseStar(star);

        });

        constellationSky.appendChild(star);

    }

    createShootingStar();

}

function chooseStar(selectedStar){

    document.querySelectorAll(".star").forEach(star=>{

        star.style.pointerEvents = "none";

        if(star !== selectedStar){

            star.style.opacity = ".25";

        }

    });

    selectedStar.classList.add("selected");

    if(constellationMessage){

        setTimeout(()=>{

            constellationMessage.classList.add("show");

        },800);

    }

    setTimeout(()=>{

        showPage(heartPage);

    },3500);

}

/* =====================================
   STELLA CADENTE
===================================== */

function createShootingStar(){

    if(!constellationSky) return;

    const shooting = document.createElement("div");

    shooting.className = "shooting-star";

    shooting.style.left =
        Math.random()*30 + "%";

    shooting.style.top =
        Math.random()*20 + "%";

    constellationSky.appendChild(shooting);

    setTimeout(()=>{

        shooting.remove();

    },2000);

}

/* =====================================
   CUORE
===================================== */

function startHeart(){

    heartValue = 0;

    if(heartPercent){

        heartPercent.textContent = "0%";

    }

    if(heart){

        heart.classList.remove("complete");

    }

}

if(heart){

    heart.addEventListener("click",()=>{

        if(heartValue >= 100) return;

        heartValue += 2;

        if(heartValue > 100){

            heartValue = 100;

        }

        heartPercent.textContent = heartValue + "%";

        heart.style.transform = "scale(1.08)";

        setTimeout(()=>{

            heart.style.transform = "scale(1)";

        },120);

        createHeartSparkles();

        if(heartValue === 100){

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

        const sparkle = document.createElement("span");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "absolute";

        sparkle.style.left = (40 + Math.random()*20) + "%";

        sparkle.style.top = (40 + Math.random()*20) + "%";

        sparkle.style.fontSize = (12 + Math.random()*12) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.transition = "all .8s ease";

        heart.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform =
                `translate(${Math.random()*120-60}px,${Math.random()*120-60}px) scale(0)`;

            sparkle.style.opacity = "0";

        },20);

        setTimeout(()=>{

            sparkle.remove();

        },900);

    }

}

/* =====================================
   APERTURA LETTERA
===================================== */

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
   LETTERA
===================================== */

function writeLetter(){

    if(letterText){

        letterText.innerHTML = "";

    }

    let index = 0;

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

    let button = document.getElementById("playVoice");

    if(button) return;

    button = document.createElement("button");

    button.id = "playVoice";

    button.className = "romantic-button";

    button.innerHTML = "🎙️ Ascolta la mia voce";

    paper.appendChild(button);

    button.addEventListener("click",()=>{

        button.disabled = true;

        playVoiceMessage();

    });

}

/* =====================================
   VOCALE
===================================== */

function playVoiceMessage(){

    if(!voiceMessage){

        showFinal();

        return;

    }

    fadeMusic(0.08);

    voiceMessage.play().catch(()=>{

        showFinal();

    });

    voiceMessage.onended = ()=>{

        fadeMusic(0.35);

        setTimeout(()=>{

            showFinal();

        },1200);

    };

}

/* =====================================
   FADE MUSICA
===================================== */

function fadeMusic(targetVolume){

    if(!bgMusic) return;

    const step = targetVolume > bgMusic.volume ? 0.01 : -0.01;

    const timer = setInterval(()=>{

        bgMusic.volume += step;

        if(
            (step > 0 && bgMusic.volume >= targetVolume) ||
            (step < 0 && bgMusic.volume <= targetVolume)
        ){

            bgMusic.volume = targetVolume;

            clearInterval(timer);

        }

    },80);

}

/* =====================================
   LETTERA
===================================== */

const letterContent = `Cara Sofia,

se stai leggendo queste parole significa che sei arrivata fino alla fine di questo piccolo viaggio.

Ho cercato di racchiudere qui dentro un po' di noi, un po' dei sorrisi che mi hai regalato e dei momenti che porterò sempre con me.

Forse questo sito non sarà perfetto...

ma ogni singola pagina è stata pensata e realizzata con il cuore.

Perché quando una persona diventa importante, anche il tempo dedicato a renderla felice diventa un regalo.

Spero che questo compleanno possa regalarti tutto ciò che desideri.

Che ogni tuo sogno trovi il coraggio di diventare realtà.

Che tu possa continuare a sorridere come fai sempre, perché quel sorriso riesce a migliorare le giornate di chi ti sta vicino.

Grazie per essere la persona che sei.

E grazie per aver condiviso con me un pezzetto del tuo cammino.

Buon compleanno amore mio. ❤️

Con tutto il mio affetto,

Eddi 🤍`;


