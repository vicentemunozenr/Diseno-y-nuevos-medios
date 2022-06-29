const datos = [
    {
        picsum: "img/expo1.jpg",
        title: "Podría ser",
        text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo dolor, iaculis vitae lectus ac, efficitur accumsan mauris.",
    },
    {
        picsum: "img/expo2.jpg",
        title: "Acá también",
        text: "Phasellus vel turpis tortor. Maecenas rhoncus est vel nibh molestie, vitae ultricies nisl dapibus. Curabitur luctus ante eu dolor consectetur, ut eleifend urna laoreet.",
    },
    {
        picsum: "img/expo3.png",
        title: "Estaría bien",
        text: "Pellentesque sagittis maximus accumsan. Duis ultrices risus iaculis urna convallis tempus. In rutrum nunc et sodales sagittis.",
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
