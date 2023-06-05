//  const imagesList = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];



//  const mainElement = document.querySelector('div.main-content');
//  imagesList.forEach(function (imagesList) {
//          mainElement.innerHTML +=
//     `<div class="main-item">
//         <img src="./${imagesList.image}" alt="Slide image">
//         <div class="info">
//                 <h2>${imagesList.title}</h2>
//                 <p>${imagesList.text}</p>
//         </div> 
//     </div>`;
//      });

//  let activeIndex = 0;

//  document.querySelectorAll('div.main-item')[activeIndex].classList.add('active');

// const prevButton = document.querySelector('div.previous-button');
// prevButton.addEventListener('click', function(){
//     if (activeIndex == 0 ) {
//         activeIndex = imagesList.length - 1;
//     } else {
//         activeIndex = activeIndex - 1;
//     }

//     document.querySelector('div.main-item.active').classList.remove('active');
//     document.querySelectorAll('div.main-item')[activeIndex].classList.add('active');
// });

// const nextButton = document.querySelector('div.next-button');
// nextButton.addEventListener('click', function(){
//     if (activeIndex == imagesList.length - 1 ) {
//         activeIndex = 0;
//     } else {
//         activeIndex = activeIndex + 1;
//     }

//     document.querySelector('div.main-item.active').classList.remove('active');
//     document.querySelectorAll('div.main-item')[activeIndex].classList.add('active');
// });

const { createApp } = Vue;

createApp({
    data() {
        return{
            imagesList : [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp'
            ],

            activeIndex : 0,
        }  
    },
    methods: { 
        previousImage(){
            this.activeIndex--;
            if(this.activeIndex < 0){
                this.activeIndex = this.imagesList.length -1;
            }
        },
        nextImage(){
            this.activeIndex++;
            if(this.activeIndex > this.imagesList.length -1){
                this.activeIndex = 0;
            }
        }
    }
}).mount("#app")