// =====================================
// TORTA 🎂
// =====================================


const cake =
document.getElementById("cake");


const candlesBox =
document.getElementById("candles");


const counter =
document.getElementById("counter");



let candeline = 19;





function creaTorta(){


    if(!cake || !candlesBox)
    return;



    const base =
    document.createElement("div");


    base.className =
    "cake-base";


    cake.appendChild(base);





    const cream =
    document.createElement("div");


    cream.className =
    "cake-cream";


    cake.appendChild(cream);







    // POSIZIONI 19 CANDELINE 🎂
    // più ordinate e distanziate


    const posizioni = [

        // fila dietro (4)
        [90,155],
        [145,155],
        [200,155],
        [255,155],



        // fila centrale (7)
        [55,120],
        [95,120],
        [135,120],
        [175,120],
        [215,120],
        [255,120],
        [295,120],



        // fila davanti (8)
        [45,85],
        [85,85],
        [125,85],
        [165,85],
        [205,85],
        [245,85],
        [285,85],
        [325,85]

    ];







    posizioni.forEach((pos)=>{



        const candela =
        document.createElement("div");



        candela.className =
        "candle";



        candela.style.left =
        pos[0] + "px";



        candela.style.bottom =
        pos[1] + "px";







        const fiamma =
        document.createElement("span");



        fiamma.className =
        "flame";


        fiamma.innerHTML =
        "🔥";



        candela.appendChild(fiamma);








        candela.addEventListener(
        "click",
        ()=>{


            if(
            fiamma.classList.contains("off")
            )
            return;



            fiamma.classList.add("off");




            const fumo =
            document.createElement("span");



            fumo.className =
            "smoke";


            fumo.innerHTML =
            "💨";



            candela.appendChild(fumo);





            candeline--;



            counter.innerHTML =
            "Candeline rimaste: "
            +
            candeline;







            if(candeline === 0){


                setTimeout(()=>{


                    alert(
                    "✨ Esprimi un desiderio ❤️"
                    );


                },800);


            }


        });





        candlesBox.appendChild(candela);



    });



}



creaTorta();
