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
    let images = `<img src="${items[i]}" alt="">`;
    // console.log(imagesLeft);
    let dot = `<div class ="container-img-right"><img src="${items[i]}" alt=""></div>`;

    carouselLeft.innerHTML += images;
    carouselRight.innerHTML += dot;
    // console.log(imagesLeft, imagesRight);
}


const imagesDom = document.querySelectorAll('.carousel-left img');
const dotDom = document.querySelectorAll('.carousel-right img');


imagesDom[0].classList.add('first', 'active');
imagesDom[imagesDom.length - 1].classList.add('last');
dotDom[0].classList.add('first', 'active');
dotDom[dotDom.length - 1].classList.add('last');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', function () {

    let imagesActive = document.querySelector('.container-img-left .active');
    let dotActive = document.querySelector('.container-img-right .active');

    let classes = imagesActive.classList;

    let last = false;

    for (let i = 0; i < classes.length; i++) {
        if (classes[i] == 'last') {
            last = true;
            console.log(classes[i]);
        }
    }

    if (last == false) {
        imagesActive.classList.remove('active');
        dotActive.classList.remove('active');

        const imgNext = imagesActive.nextElementSibling;
        imgNext.classList.add('active');
        const dotNext = dotActive.nextElementSibling;
        dotNext.classList.add('active');
    } else {
        nextButton.classList.remove('able');
    }

});
