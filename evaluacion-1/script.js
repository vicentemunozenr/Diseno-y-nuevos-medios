var elEncabezado = document.querySelector("header");
var elColor, disco;

function preload() {
    disco = loadJSON("https://raw.githubusercontent.com/vicentemunozenr/Diseno-y-nuevos-medios/main/JSON-1/JSON");
}

function setup() {  

    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
  
    var descarga = select("#borra");
    descarga.mousePressed(borrador);  


    createElement("h1", "Dibuja lo que recuerdas en el cuadrado").parent(elEncabezado).id("title");
    createCanvas(400, 400).addClass("centrado").style("z-index", -1);
    background("#FFF");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("CoverArt", "jpg");
}

function borrador() {
    background("#eceff1");
}
