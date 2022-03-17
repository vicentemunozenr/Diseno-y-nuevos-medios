//pregunto la fecha y hora

var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Holanda";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "¿Cómo andamio?";
} else {
    elSaludo = "¿Qué Talca?";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "Darth Vader").parent("vinculos");
    createA("page.html", "Kenobi").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabía usted que " + starWars.results[3].name + " mide " + starWars.results[3].height + " cm?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
    var index = 0;

    var listaimg = ["vader-0.png", "vader-1.webp", "vader-2.jpg"];

$(function() {
  
    setInterval(changeImage, 4000);
  
});
function changeImage() {
  
 
   $('body').css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 3)
      index = 0;
}

}
function pagina() {
    createSpan(" ¿Sabía usted que " + starWars.results[9].name + " mide " + starWars.results[9].height + " cm?").style("color", "#0a0a0a").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");

     var index = 0;

    var listaimg = ["kenobi-0.jpg", "kenobi-1.jpg", "kenobi-2.png"];

$(function() {
  
    setInterval(changeImage, 4000);
  
});
function changeImage() {
  
 
   $('body').css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 3)
      index = 0;
}
}