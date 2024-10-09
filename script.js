// let lon = 3.35373065;
// let lat = -76.52194572;

var cordenadas = {
    caballos: {
        len: 3.352901,
        lat: -76.51889,
    },
    lombrices: {
        len: 3.351854,
        lat: -76.519132,
    },
    enrredadera: {
        len: 3.353808,
        lat: -76.521583,
    },
    azucena: {
        len: 3.353538,
        lat: -76.521913,
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

// Marcador caballos
var marCaballos = L.marker(
    [cordenadas.caballos.len, cordenadas.caballos.lat],
    14
)
    .addTo(map)
    .bindPopup("Caballos");

// Marcador lombrices
var marLombrices = L.marker(
    [cordenadas.lombrices.len, cordenadas.lombrices.lat],
    14
)
    .addTo(map)
    .bindPopup("Lombrices");

// Marcador enrredadera
var marEnredadera = L.marker(
    [cordenadas.enrredadera.len, cordenadas.enrredadera.lat],
    14
)
    .addTo(map)
    .bindPopup("Enrredadera");

// Marcador Azucena
var marAzucena = L.marker([cordenadas.azucena.len, cordenadas.azucena.lat], 14)
    .addTo(map)
    .bindPopup("Azucena");

// Abrir el popup de caballo
marCaballos.on("mouseover", function () {
    this.openPopup(); // Abre el popup
});
// Cerrar el popup de caballo
marCaballos.on("mouseout", function () {
    this.closePopup(); // Cierra el popup
});

// Abrir el popup de lombrices
marLombrices.on("mouseover", function () {
    this.openPopup(); // Abre el popup
});
// Cerrar el popup de lombrices
marLombrices.on("mouseout", function () {
    this.closePopup(); // Cierra el popup
});

// Abrir el popup de enredadera
marEnredadera.on("mouseover", function () {
    this.openPopup(); // Abre el popup
});
// Cerrar el popup de enredadera
marEnredadera.on("mouseout", function () {
    this.closePopup(); // Cierra el popup
});

// Abrir el popup de azucena
marAzucena.on("mouseover", function () {
    this.openPopup(); // Abre el popup
});
// Cerrar el popup de azucena
marAzucena.on("mouseout", function () {
    this.closePopup(); // Cierra el popup
});

//? Eventos
marCaballos.addEventListener("click", () => {
    window.location.href = "pages/caballos.html";
});

marLombrices.addEventListener("click", () => {
    window.location.href = "pages/lombrices.html";
});

marEnredadera.addEventListener("click", () => {
    window.location.href = "pages/enredadera.html";
});

marAzucena.addEventListener("click", () => {
    window.location.href = "pages/azucena.html";
});
