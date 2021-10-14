//ARRAY CON ELEMENTI DA USARE
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//SELEZIONO LA COLONNA CON IMG GRANDE
const imageBig = document.querySelector(".container .row .image-big");
imageBig.classList.add("image-big-container");

//INIZIALIZZO INDICE
let currentIndex = 0;

//INSERISCO IMG NEL CONTENITORE E METTO CLASSE ACTIVE
for (let i = 0; i < items.length; i++) {
    const currentImg = items[i];

    let classeActive = "";

    if (i === currentIndex) {
        classeActive = "active";
    }

    const img = `<img class="${classeActive}" src="${currentImg}" alt="immagine ${i}">`;
    imageBig.innerHTML += img;
}

//LISTA IMG SINISTRA
const imageList = document.querySelector(".row .image-list");
imageList.classList.add("image-list-container", "d-flex", "flex-column");

for (let i = 0; i < items.length; i++) {
    const currentImg = items[i];

    let classeActive = "";

    if (i === currentIndex) {
        classeActive = "active";
    }

    const img = `<img src="${currentImg}" alt="immagine ${i}">`;
    imageList.innerHTML += img;
}
