// CAMBIO SCENA

const scenes =
document.querySelectorAll(".scene");


function cambiaScena(id){

scenes.forEach(s=>{

s.classList.remove("active");

});


document.getElementById(id)
.classList.add("active");


}







// CUORI

const background =
document.getElementById("background");


const simboli=[
"❤️",
"🤍",
"😍",
"✨",
"💗"
];


function creaCuore(){


let cuore=document.createElement("div");


cuore.className="heart";


cuore.innerHTML=
simboli[
Math.floor(Math.random()*simboli.length)
];



cuore.style.left=
Math.random()*100+"vw";



cuore.style.fontSize=
(15+Math.random()*25)+"px";



cuore.style.animationDuration=
(4+Math.random()*6)+"s";



background.appendChild(cuore);



setTimeout(()=>{

cuore.remove();

},10000);


}


setInterval(creaCuore,250);








// CARICAMENTO


const progress =
document.getElementById("progress");


const percent =
document.getElementById("percent");


const start =
document.getElementById("start");


const loadingText =
document.getElementById("loadingText");



let valore=0;



let timer=setInterval(()=>{


valore++;


progress.style.width=
valore+"%";


percent.innerHTML=
valore+"%";



if(valore>=100){


clearInterval(timer);


loadingText.innerHTML=
"È tutto pronto per te ❤️";


percent.innerHTML=
"✨ 100% ✨";


start.hidden=false;


}


},50);







// INIZIO


start.onclick=()=>{


cambiaScena("question");


};







// SI


document.getElementById("yes")
.onclick=()=>{


cambiaScena("birthday");


};







// NO SCAPPA

const no =
document.getElementById("no");



function scappa(){


no.style.position="fixed";


no.style.left=
Math.random()*
(window.innerWidth-100)
+"px";


no.style.top=
Math.random()*
(window.innerHeight-50)
+"px";


}



no.addEventListener(
"mouseenter",
scappa
);



no.addEventListener(
"touchstart",
(e)=>{

e.preventDefault();

scappa();

}

);
