/* Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre. */

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
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const imageContainer = document.querySelector('.slider .col-left');
const thumbContainer = document.querySelector('.slider .col-right');

for (let i = 0; i < items.length; i++) {
    
    let classElement = '';

    if (i == 0) {
        classElement = 'first active';
    } else if (i == items.length - 1) {
        classElement = 'last';
    }
    
    const image = `
        <div class="img-container ${classElement}">
            <img src="${items[i]}" alt="">
             <div class="text-container">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
        </div>
    `;
    const thumb = `
    <div class="thumb-container ${classElement}">
        <img src="${items[i]}" alt="">
    </div>
    `;

    imageContainer.innerHTML += image;
    thumbContainer.innerHTML += thumb;
}

const nextButton = document.querySelector('.slider .col-right .next');
const prevButton = document.querySelector('.col-right .prev');

nextButton.addEventListener('click', 
function() {
    const elementActive = document.querySelector('.slider .col-left .img-container.active');
    const thumbActive = document.querySelector('.slider .col-right .thumb-container.active');

    const listClasses = elementActive.classList;
    // console.log(listClasses);

    let last = false;
  for (let i = 0; i < listClasses.length; i++) {

      if (listClasses[i] == 'last') {
          last = true;
      }   
    }

    let lastThumb = thumbActive.classList.contains('last');

    // console.log(lastThumb);

    if (last == false) {
        elementActive.classList.remove('active');

        const elementNext = elementActive.nextElementSibling;

        elementNext.classList.add('active');
    } 

    if (lastThumb == false) {
        thumbActive.classList.remove('active');
        const thumbNext = thumbActive.nextElementSibling;
        thumbNext.classList.add('active');

    } 

});

prevButton.addEventListener('click', 
function() {
    const elementActive = document.querySelector('.slider .col-left .img-container.active');
    const thumbActive = document.querySelector('.slider .col-right .thumb-container.active');
    
    const listClasses = elementActive.classList;
    // console.log(listClasses);

    let first = false;
  for (let i = 0; i < listClasses.length; i++) {

      if (listClasses[i] == 'first') {
          first = true;
      }   
    }

    let lastThumb = thumbActive.classList.contains('first');

    // console.log(lastThumb);

    if (first == false) {
        elementActive.classList.remove('active');

        const elementNext = elementActive.previousElementSibling;

        elementNext.classList.add('active');
    } 

    if (lastThumb == false) {
        thumbActive.classList.remove('active');
        const thumbNext = thumbActive.previousElementSibling;
        thumbNext.classList.add('active');

    } 


});