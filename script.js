// let lon = 3.35373065;
// let lat = -76.52194572;

var cordenadas = {
    caballos: {
        len: 3.352901,
        lat: -76.51889,
    },
};

var map = L.map("map").setView(
    [cordenadas.caballos.len, cordenadas.caballos.lat],
    20
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marcador1 = L.marker([cordenadas.caballos.len, cordenadas.caballos.lat], 14)
    .addTo(map)
    .bindPopup("Caballos")
    .openPopup();

// marker.on("click", function (e) {
//     alert("Funciono");
// });

marcador1.addEventListener("click", () => {
    alert("Funciono");
});
