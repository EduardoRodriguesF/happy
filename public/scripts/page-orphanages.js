/*
Tipos de dados
    String  | ""
    Number  | 01
    Object  | {}
    Boolean | true/false
    Array   | []
*/

//Create Map
const map = L.map('mapid').setView([-24.1812405,-46.8013057], 13.75);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Parameters take infos directly out of the argument object and turn it into local variables
function addMarker({id, name, lat, lng}) {
    // Create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    // Create and add marker
    L
    .marker([lat, lng], { icon }) // { icon } = { icon: icon }
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage);
})