



function showCarbonOrange(){
   document.getElementById("infoOrange").style.display="";
}

function showCarbonBlack(){
   document.getElementById("infoBlack").style.display="";
}

//Se definen las variables
function comparacion(){
   let totalOrange=0;
   let TotalBlack=0;
//ciclo for
   for(let i=1; i<=4; i++){
       totalOrange += parseInt(   document.getElementById("descCarbonOrange"+i).value   )
       TotalBlack += parseInt(   document.getElementById("descCarbonBlack"+i).value   )
   }

   alert("La pala Varilon Carbon Orage 2021, acumula un puntaje total en el mundo de: " + totalOrange)
   alert("La pala Varilon Carbon Black 2022, acumula un puntaje total en el mundo de: " + TotalBlack)
// if else
   if(totalOrange < TotalBlack){ return "Ranking Mundial: Carbon Black Ganador de Mejor Paleta 2022"}
   else {return "Por mas que lo intentess, la nueva paleta Varilo Black 2022 es mejor que en todos los intems"}
}
// funcion
function compararPaletas(){
   alert( comparacion() );
}


//**Array de cuento stock de productos hay en la tienda */

const stockTotalTienda =["palas", 100,"padel"]
console.log(stockTotalTienda.length);