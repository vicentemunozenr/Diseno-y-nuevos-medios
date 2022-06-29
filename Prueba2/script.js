const datos = [
    {
        picsum: "img/expo1.webp",
        title: "Casa Galería",
        text: "Intervención de mi propio hogar, 2018",
    },
    {
        picsum: "img/expo2.webp",
        title: "Exposición de los estudiantes",
        text: "En el 2017, los estudiantes tuvieron la oportunidad de colar sus trabajo de ese año en el colegio Epullay.",
    },
    {
        picsum: "img/expo3.webp",
        title: "Centro Lyon",
        text: "Luego del exito de la Casa Galería, en el 2019 fui invitada a formar parte del Centro Lyon",
    },
];
datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-4 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-4 offset-md-2 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-4 offset-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-4 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});

users().catch((error) => console.error(error));


