/*
Tipos de dados
    String  | ""
    Number  | 01
    Object  | {}
    Boolean | true/false
    Array   | []
*/

/* Desabilitando modificações do mapa */
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//Create Map
const map = L.map('mapid', options).setView([lat, lng], 15);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker

L
.marker([lat, lng], { icon }) // { icon } = { icon: icon }
.addTo(map)

/* image gallery */

function selectImage(event) {
    const btn = event.currentTarget;

    // Remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    })

    // Selecionar imagem clicada
    const image = btn.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // Atualizar o container de imagem
    imageContainer.src = image.src;

    // Adicionar a classe .active para este botão
    btn.classList.add('active');
}