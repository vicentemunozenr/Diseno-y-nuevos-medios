var elEncabezado = document.querySelector("header");
var elColor, digimon;

function preload() {
    digimon = loadJSON("https://digimon-api.vercel.app/api/digimon");
}

function setup() {
    //hago algo con lo que precargué
    var lasOpciones = [];
    Object.values(digimon).forEach((p) => {
        if(p.level=="In Training"){
       lasOpciones.push(p.img);
     
    }
});
    console.log(lasOpciones);
    //selecciono el elemento con esta identidad
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
    //selecciono el elemento con esta identidad    
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createElement("h1", "Podrías dibujar a este Digimon?").parent(elEncabezado).id("title");
    createImg(random(lasOpciones),"...").addClass("chiqui");
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#eceff1");
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
    saveCanvas("Digibujo", "jpg");
}

function borrador() {
    background("#eceff1");
}