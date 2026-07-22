/* =====================================================
   PROJECT AURORA v10
   SCRIPT.JS
===================================================== */

/* ==========================
   ELEMENTI
========================== */

const introPage = document.getElementById("introPage");
const home = document.getElementById("home");
const ticket = document.getElementById("ticket");
const birthday = document.getElementById("birthday");
const wishPage = document.getElementById("wishPage");
const starPage = document.getElementById("starPage");
const heartPage = document.getElementById("heartPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");
const endingPage = document.getElementById("endingPage");

const playButton = document.getElementById("playButton");
const start = document.getElementById("start");

const bgMusic = document.getElementById("bgMusic");
const voiceMessage = document.getElementById("voiceMessage");

const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

/* ==========================
   SFONDO
========================== */

const simboli = [
    "❤️",
    "🤍",
    "💕",
    "💖",
    "💗",
    "✨",
    "⭐",
    "🌹",
    "🦁"
];

function creaEmoji() {

    if (!hearts) return;

    const cuore = document.createElement("div");

    cuore.className = "heart";

    cuore.innerHTML =
        simboli[
            Math.floor(
                Math.random() * simboli.length
            )
        ];

    cuore.style.left =
        Math.random() * 100 + "vw";

    cuore.style.fontSize =
        (15 + Math.random() * 35) + "px";

    cuore.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    hearts.appendChild(cuore);

    setTimeout(() => {

        cuore.remove();

    }, 9000);

}

setInterval(creaEmoji, 150);

/* ==========================
   PLAY
========================== */

if (playButton) {

    playButton.addEventListener("click", () => {

        if (bgMusic) {

            bgMusic.volume = 0.35;

            bgMusic.play().catch(() => {});

        }

        introPage.classList.add("hidden");

        home.classList.remove("hidden");

        avviaCaricamento();

    });

}

/* ==========================
   CARICAMENTO
========================== */

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

function avviaCaricamento() {

    let valore = 0;

    const timer = setInterval(() => {

        valore++;

        if (bar)
            bar.style.width = valore + "%";

        if (percent)
            percent.innerHTML = valore + "%";

        if (valore >= 100) {

            clearInterval(timer);

            if (percent)
                percent.innerHTML =
                    "✨ È tutto pronto 🤍";

            if (start)
                start.hidden = false;

        }

    }, 45);

}

/* =====================================================
   BIGLIETTO + CANDELINE
===================================================== */

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const candlesBox = document.getElementById("candles");
const counter = document.getElementById("counter");

let candeline = 19;
let festaPartita = false;

/* ==========================
   INIZIA IL VIAGGIO
========================== */

if (start) {

    start.addEventListener("click", () => {

        home.classList.add("hidden");
        ticket.classList.remove("hidden");

    });

}

/* ==========================
   BOTTONE NO
========================== */

function scappa() {

    if (!no) return;

    no.style.position = "fixed";

    no.style.left =
        Math.random() *
        (window.innerWidth - no.offsetWidth) + "px";

    no.style.top =
        Math.random() *
        (window.innerHeight - no.offsetHeight) + "px";

}

if (no) {

    no.addEventListener("mouseenter", scappa);

    no.addEventListener("touchstart", (e) => {

        e.preventDefault();
        scappa();

    });

}

/* ==========================
   BOTTONE SI
========================== */

if (yes) {

    yes.addEventListener("click", () => {

        ticket.classList.add("hidden");
        birthday.classList.remove("hidden");

    });

}

/* ==========================
   CREAZIONE CANDELINE
========================== */

function creaCandeline() {

    if (!candlesBox) return;

    candlesBox.innerHTML = "";

    for (let i = 0; i < 19; i++) {

        const candela = document.createElement("div");
        candela.className = "candle";

        const fiamma = document.createElement("span");
        fiamma.className = "flame";
        fiamma.innerHTML = "🔥";

        candela.appendChild(fiamma);

        candela.addEventListener("click", () => {

            if (fiamma.classList.contains("off"))
                return;

            fiamma.classList.add("off");

            const fumo = document.createElement("span");
            fumo.className = "smoke";
            fumo.innerHTML = "💨";

            candela.appendChild(fumo);

            candeline--;

            if (counter) {

                counter.innerHTML =
                    "Candeline rimaste: " + candeline;

            }

            if (candeline === 0 && !festaPartita) {

                festaPartita = true;

                festaFinita();

            }

        });

        candlesBox.appendChild(candela);

    }

}

creaCandeline();

/* =====================================================
   DESIDERIO + STELLA + CUORE
===================================================== */

const sendWish = document.getElementById("sendWish");
const wishInput = document.getElementById("wishInput");

const heartFill = document.getElementById("heartFill");
const heartPercent = document.getElementById("heartPercent");

let desiderioSalvato = "";
let percentualeCuore = 0;

/* ==========================
   FINE CANDELINE
========================== */

function festaFinita() {

    creaConfetti();

    setTimeout(() => {

        birthday.classList.add("hidden");
        wishPage.classList.remove("hidden");

    }, 1200);

}

/* ==========================
   CORIANDOLI
========================== */

function creaConfetti() {

    if (!confetti) return;

    const colori = [
        "#ff4d88",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff8fab",
        "#c77dff"
    ];

    for (let i = 0; i < 180; i++) {

        const pezzo = document.createElement("div");

        pezzo.className = "heart";

        pezzo.innerHTML = "🎉";

        pezzo.style.left =
            Math.random() * 100 + "vw";

        pezzo.style.fontSize =
            (10 + Math.random() * 18) + "px";

        pezzo.style.color =
            colori[
                Math.floor(Math.random() * colori.length)
            ];

        pezzo.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.appendChild(pezzo);

        setTimeout(() => {

            pezzo.remove();

        }, 5000);

    }

}

/* ==========================
   DESIDERIO
========================== */

if (sendWish) {

    sendWish.addEventListener("click", () => {

        desiderioSalvato =
            wishInput.value.trim();

        if (desiderioSalvato === "") {

            desiderioSalvato =
                "Un desiderio pieno d'amore 🤍";

        }

        localStorage.setItem(
            "auroraWish",
            desiderioSalvato
        );

        wishPage.classList.add("hidden");

        starPage.classList.remove("hidden");

        setTimeout(() => {

            starPage.classList.add("hidden");

            heartPage.classList.remove("hidden");

        }, 2500);

    });

}

/* ==========================
   CUORE
========================== */

if (heartFill) {

    heartFill.addEventListener("click", () => {

        if (percentualeCuore >= 100)
            return;

        percentualeCuore += 20;

        heartPercent.innerHTML =
            percentualeCuore + "%";

        heartFill.style.transform = "scale(1.15)";

        setTimeout(() => {

            heartFill.style.transform = "scale(1)";

        }, 150);

        if (percentualeCuore >= 100) {

            heartFill.innerHTML = "❤️";

            heartFill.classList.add("full");

            heartPercent.innerHTML =
                "100% 🤍";

            setTimeout(() => {

                mostraBusta();

            }, 1500);

        }

    });

}

/* =====================================================
   LETTERA + BUSTA + VOCALE
===================================================== */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

/* ==========================
   APRE LA BUSTA
========================== */

function mostraBusta() {

    if (heartPage)
        heartPage.classList.add("hidden");

    if (letterPage)
        letterPage.classList.remove("hidden");

    setTimeout(() => {

        if (envelope)
            envelope.classList.add("open");

    }, 700);

    setTimeout(() => {

        if (paper)
            paper.classList.add("show");

    }, 1700);

    /* la busta scompare */

    setTimeout(() => {

        if (envelope)
            envelope.classList.add("hide");

        if (paper)
            paper.classList.add("center");

    }, 3200);

    /* abbassa la musica */

    if (bgMusic) {

        bgMusic.volume = 0.12;

    }

    /* parte il vocale */

    if (voiceMessage) {

        setTimeout(() => {

            voiceMessage.play().catch(() => {});

        }, 3500);

    }

    /* scrittura */

    setTimeout(() => {

        scriviLettera();

    }, 3800);

}

/* ==========================
   LETTERA
========================== */

function scriviLettera() {

    if (!letterText)
        return;

    const desiderio =
        localStorage.getItem("auroraWish") ||
        "Un desiderio pieno d'amore 🤍";

    const testo = `

Amore mio 🤍

Questo piccolo viaggio
è stato creato soltanto per te.

Ogni pagina,
ogni animazione,
ogni piccolo dettaglio...

è un modo per dirti
quanto sei importante per me.

Hai spento le candeline,
hai affidato il tuo desiderio alle stelle
e hai riempito il mio cuore.

Il tuo desiderio:

✨ ${desiderio}

Spero che questo regalo
ti faccia sorridere almeno
quanto tu fai sorridere me.

Buon compleanno amore.

Ti voglio bene. 🤍

`;

    letterText.innerHTML = "";

    let indice = 0;

    function macchina() {

        if (indice >= testo.length) {

            setTimeout(() => {

                mostraFinale();

            }, 2000);

            return;

        }

        letterText.innerHTML += testo.charAt(indice);

        indice++;

        setTimeout(macchina, 40);

    }

    macchina();

}

/* =====================================================
   FINALE
===================================================== */

const loveButton =
document.getElementById("loveButton");

const endingMessage =
document.getElementById("endingMessage");

/* ==========================
   MOSTRA FINALE
========================== */

function mostraFinale(){

    if(letterPage)
        letterPage.classList.add("hidden");

    if(finalPage)
        finalPage.classList.remove("hidden");

}

/* ==========================
   TI AMO
========================== */

if(loveButton){

    loveButton.addEventListener(
        "click",
        ()=>{

            finalPage.classList.add("hidden");

            endingPage.classList.remove("hidden");

            setTimeout(()=>{

                endingMessage.style.opacity="1";

            },1800);

            pioggiaFinale();

        }
    );

}

/* ==========================
   PIOGGIA DI CUORI
========================== */

function pioggiaFinale(){

    setInterval(()=>{

        const cuore =
        document.createElement("div");

        cuore.className="heart";

        const emoji=[

            "❤️",
            "🤍",
            "💕",
            "💖",
            "💗",
            "✨"

        ];

        cuore.innerHTML=
        emoji[
            Math.floor(
                Math.random()*emoji.length
            )
        ];

        cuore.style.left=
        Math.random()*100+"vw";

        cuore.style.fontSize=
        (18+Math.random()*35)+"px";

        cuore.style.animationDuration=
        (4+Math.random()*4)+"s";

        hearts.appendChild(cuore);

        setTimeout(()=>{

            cuore.remove();

        },9000);

    },180);

}

/* =====================================================
   BLOCCO 6
   RIFINITURE FINALI
===================================================== */

/* ==========================
   VOLUME MUSICA
========================== */

if (voiceMessage && bgMusic) {

    voiceMessage.addEventListener("ended", () => {

        bgMusic.volume = 0.35;

    });

}

/* ==========================
   INVIO CON CTRL+INVIO
========================== */

if (wishInput && sendWish) {

    wishInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter" && e.ctrlKey) {

            e.preventDefault();
            sendWish.click();

        }

    });

}

/* ==========================
   BLOCCA DOPPI CLICK
========================== */

if (heartFill) {

    heartFill.addEventListener("dragstart", (e) => {

        e.preventDefault();

    });

}

/* ==========================
   PRECARICAMENTO IMMAGINE
========================== */

const preload = new Image();
preload.src = "foto.jpg";

/* ==========================
   MESSAGGIO FINALE
========================== */

console.log("🤍 Project Aurora v10 caricato con successo!");

}
