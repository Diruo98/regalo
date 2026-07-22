/* =====================================
   PROJECT AURORA v7
   SCRIPT PARTE 1
===================================== */


// =====================================
// EMOJI CADENTI ❤️✨
// =====================================


const hearts =
document.getElementById("hearts");



const simboli = [

    "❤️",
    "🤍",
    "😍",
    "💕",
    "💗",
    "✨",
    "⭐",
    "🌹",
    "💖",
    "🦁"

];



function creaCuore(){


    if(!hearts)
    return;



    const cuore =
    document.createElement("div");



    cuore.className =
    "heart";



    cuore.innerHTML =
    simboli[
        Math.floor(
            Math.random()*simboli.length
        )
    ];



    cuore.style.left =
    Math.random()*100+"vw";



    cuore.style.fontSize =
    (12 + Math.random()*45)+"px";



    cuore.style.animationDuration =
    (3 + Math.random()*6)+"s";



    hearts.appendChild(cuore);



    setTimeout(()=>{


        cuore.remove();


    },10000);


}



// più emoji nello sfondo

setInterval(
    creaCuore,
    100
);









// =====================================
// CARICAMENTO ⏳
// =====================================


const bar =
document.getElementById("bar");


const percent =
document.getElementById("percent");


const start =
document.getElementById("start");



let valore = 0;



if(
bar &&
percent &&
start
){


const caricamento =
setInterval(()=>{


    valore++;



    bar.style.width =
    valore+"%";



    percent.innerHTML =
    valore+"%";



    if(valore>=100){


        clearInterval(caricamento);



        percent.innerHTML =
        "✨ È pronto per te 🤍";



        start.hidden =
        false;


    }



},50);


}









// =====================================
// PAGINE
// =====================================


const home =
document.getElementById("home");


const ticket =
document.getElementById("ticket");


const birthday =
document.getElementById("birthday");


const wishPage =
document.getElementById("wishPage");


const starPage =
document.getElementById("starPage");


const heartPage =
document.getElementById("heartPage");


const letterPage =
document.getElementById("letterPage");



const yes =
document.getElementById("yes");


const no =
document.getElementById("no");









// =====================================
// INIZIO VIAGGIO 💌
// =====================================


if(start){


start.addEventListener(
"click",
()=>{


home.classList.add("hidden");


ticket.classList.remove("hidden");


});


}









// =====================================
// NO CHE SCAPPA 😂
// =====================================


function scappa(){


if(!no)
return;



no.style.position =
"fixed";



no.style.left =
Math.random() *
(window.innerWidth-no.offsetWidth)
+"px";



no.style.top =
Math.random() *
(window.innerHeight-no.offsetHeight)
+"px";


}



if(no){


no.addEventListener(
"mouseenter",
scappa
);



no.addEventListener(
"touchstart",
(e)=>{


e.preventDefault();

scappa();


});


}









// =====================================
// CANDELINE 🕯️
// =====================================


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;


let festaPartita =
false;






function creaCandeline(){


if(!candlesBox)
return;



for(
let i=0;
i<19;
i++
){



const candela =
document.createElement("div");



candela.className =
"candle";



const fiamma =
document.createElement("span");



fiamma.className =
"flame";


fiamma.innerHTML =
"🔥";



candela.appendChild(
fiamma
);





candela.addEventListener(
"click",
()=>{


if(
fiamma.classList.contains("off")
)
return;



fiamma.classList.add(
"off"
);



const fumo =
document.createElement("span");



fumo.className =
"smoke";


fumo.innerHTML =
"💨";



candela.appendChild(
fumo
);



candeline--;



if(counter){

counter.innerHTML =
"Candeline rimaste: "
+
candeline;

}



if(
candeline===0 &&
!festaPartita
){


festaPartita=true;


festaFinita();


}



});


candlesBox.appendChild(
candela
);



}



}



creaCandeline();









// =====================================
// SI ❤️
// =====================================


if(yes){


yes.addEventListener(
"click",
()=>{


ticket.classList.add(
"hidden"
);


birthday.classList.remove(
"hidden"
);


});


}

/* =====================================
   PROJECT AURORA v7
   SCRIPT PARTE 2
===================================== */



// =====================================
// FINE CANDELINE 🎉
// =====================================


function festaFinita(){


    creaConfetti();



    setTimeout(()=>{


        if(birthday)
        birthday.classList.add("hidden");



        if(wishPage)
        wishPage.classList.remove("hidden");



    },500);


}









// =====================================
// CORIANDOLI 🎉
// =====================================


function creaConfetti(){


const area =
document.getElementById("confetti");



if(!area)
return;



const colori = [

"#ff4d88",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff",
"#ff8fab",
"#c77dff"

];



for(
let i=0;
i<200;
i++
){


const pezzo =
document.createElement("div");



pezzo.className =
"confetti-piece";



pezzo.style.left =
Math.random()*100+"vw";



pezzo.style.background =
colori[
Math.floor(
Math.random()*colori.length
)
];



pezzo.style.animationDuration =
(2+Math.random()*4)+"s";



area.appendChild(
pezzo
);



setTimeout(()=>{


pezzo.remove();


},6000);



}



}









// =====================================
// DESIDERIO ✨
// =====================================


const sendWish =
document.getElementById("sendWish");


const wishInput =
document.getElementById("wishInput");



let desiderioSalvato = "";





if(sendWish){


sendWish.addEventListener(
"click",
()=>{


desiderioSalvato =
wishInput.value.trim();



if(desiderioSalvato===""){


desiderioSalvato =
"Un desiderio pieno d'amore 🤍";


}



localStorage.setItem(
"auroraWish",
desiderioSalvato
);




wishPage.classList.add(
"hidden"
);



starPage.classList.remove(
"hidden"
);




setTimeout(()=>{


if(wishStar){

wishStar.classList.add(
"fly"
);

}



},300);





setTimeout(()=>{


apriCuore();



},2500);



});


}









// =====================================
// CUORE DA RIEMPIRE ❤️
// =====================================


function apriCuore(){



starPage.classList.add(
"hidden"
);



if(heartPage){


heartPage.classList.remove(
"hidden"
);


}



}





const heartFill =
document.getElementById("heartFill");


let riempimento = 0;



function riempiCuore(){


if(!heartFill)
return;



riempimento += 5;



heartFill.style.height =
riempimento+"%";



if(riempimento>=100){


cuoreCompleto();


}



}







document.addEventListener(
"click",
(e)=>{


if(
heartPage &&
!heartPage.classList.contains("hidden")
){


riempiCuore();


}



});









// =====================================
// CUORE COMPLETO 💖
// =====================================


function cuoreCompleto(){



heartPage.classList.add(
"hidden"
);



mostraBusta();


}









// =====================================
// BUSTA ROSA 💌
// =====================================


function mostraBusta(){



if(letterPage){


letterPage.classList.remove(
"hidden"
);


}



const envelope =
document.getElementById("envelope");



setTimeout(()=>{


if(envelope){


envelope.classList.add(
"open"
);


}



},500);





setTimeout(()=>{


scriviLettera();



},1800);



}









// =====================================
// LETTERA MACCHINA DA SCRIVERE ⌨️
// =====================================


function scriviLettera(){



const letterText =
document.getElementById(
"letterText"
);



if(!letterText)
return;




const testo = `

Amore mio 🤍


Questo piccolo viaggio è stato creato
solo per regalarti un sorriso.


Hai spento tutte le candeline,
hai affidato il tuo desiderio alle stelle
e hai riempito il mio cuore.


Il tuo desiderio:

✨ ${desiderioSalvato}


Spero che tutti i tuoi sogni
possano diventare realtà.


Ti voglio bene 🤍


`;





letterText.innerHTML="";



let indice=0;



function scrivi(){



if(indice < testo.length){


letterText.innerHTML +=
testo.charAt(indice);



indice++;



setTimeout(
scrivi,
45
);



}



}



scrivi();


}
