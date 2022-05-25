const datos = [
    {
        picsum: "https://picsum.photos/id/237/3000/2000",
        title: "Podría ser",
        text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo dolor, iaculis vitae lectus ac, efficitur accumsan mauris.",
    },
    {
        picsum: "https://picsum.photos/id/23/3000/2000",
        title: "Acá también",
        text: "Phasellus vel turpis tortor. Maecenas rhoncus est vel nibh molestie, vitae ultricies nisl dapibus. Curabitur luctus ante eu dolor consectetur, ut eleifend urna laoreet.",
    },
    {
        picsum: "https://picsum.photos/id/1/3000/2000",
        title: "Estaría bien",
        text: "Pellentesque sagittis maximus accumsan. Duis ultrices risus iaculis urna convallis tempus. In rutrum nunc et sodales sagittis.",
    },
    {
        picsum: "https://picsum.photos/id/19/900/600",
        title: "Dale aquí",
        text: "Ut lobortis accumsan purus ut finibus. Nam nisl magna, volutpat ut faucibus eget, placerat in odio. Suspendisse molestie tortor eros, vitae mattis dui porttitor ac.",
    },

    {
        picsum: "https://picsum.photos/id/7/900/600",
        title: "Lo que querías",
        text: "Quisque suscipit tincidunt dui in iaculis. Morbi vel turpis at tortor commodo aliquam. Phasellus ultricies nulla erat, sed tincidunt mi dictum nec. Suspendisse sit amet lorem felis.",
    },
];
datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6  my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});
async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-6 col-md-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h3>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            ", " +
            p.location.country +
            "<br><i class='bi bi-envelope-plus fs-3'></i></p></div></div>";
    });
}
users().catch((error) => console.error(error));
