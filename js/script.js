/* Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata. */

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


const carouselLeft = document.querySelector('.carousel-left .container-img-left');
const carouselRight = document.querySelector('.carousel-right');


for (let i = 0; i < items.length; i++) {
    let imagesLeft = `<img src="${items[i]}" alt="">`;
    // console.log(imagesLeft);
    let imagesRight = `<div class ="container-img-right"><img src="${items[i]}" alt=""></div>`;

    carouselLeft.innerHTML += imagesLeft;
    carouselRight.innerHTML += imagesRight;
}

const imagesLeftDom = document.querySelectorAll('.carousel-left img');
const imagesRightDom = document.querySelectorAll('.carousel-right img');
// console.log(imagesLeftDom);

imagesLeftDom[0].classList.add('first', 'active');
imagesLeftDom[imagesLeftDom.length - 1].classList.add('last');
imagesRightDom[0].classList.add('first', 'active');
imagesRightDom[imagesRightDom.length - 1].classList.add('last');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', 
function() {
    const imageLeftActive = document.querySelector('.carousel-left .active');
    const imageRightActive = document.querySelector('.carousel-right .active');

    let classes = imageLeftActive.classList;

    let last = false;
    for (let i = 0; i < classes.length; i++) {

        if (classes == 'last') {
            last = true;
        } 
    }

    if (last == false) {
        imageLeftActive.classList.remove('active');

        const imgLeftNext = imageLeftActive.nextElementSibling;
    } else {
        nextButton.classList.remove('able');
    }
});
