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
    iconAnchor: [29, 68]
})

let marker; 

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Passing lat and lng to form
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon before adding the right one
    marker && map.removeLayer(marker); // Caso marker exista, irá executar .removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

// Photos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images');

    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Realizar clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true); // true indica que deve pegar todos os filhos do elemento
    
    // Verificar se o campo está vazio, não adicionar ao container de fotos caso sim.
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return
    }

    // Limpar texto do campo
    input.value = '';

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldContainer = document.querySelectorAll('.new-upload');

    if (fieldContainer.length <= 1) {
        // Limpar o campo
        span.parentNode.children[0].value = ''
        return
    }

    // Deletar o campo
    span.parentNode.remove();

}

// Select yes or no
function toggleSelect(event) {
    // Retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active') );

    // Pegar o botão clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // Atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value;

}

function validate(event) {
    // Validar se lat e lng estão preenchidos]
    const lat = document.querySelector("input[name='lat']").value;
    const lng = document.querySelector("input[name='lng']").value;
    
    if (!lat || !lng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}