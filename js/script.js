  const { createApp } = Vue

  createApp({
    data() {
      return {
        movie:{
            images:[
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',
            ],
            titles:[
                'Marvel\'s Spiderman Miles Morale',
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                "Marvel's Avengers",
            ],
            texts:[
                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            ]
        },
        activeImageIndex:0,
      }
    },

    methods:{
        nextSlide(){
            if(this.activeImageIndex < this.movie.images.length - 1){
                this.activeImageIndex++;
            }
            else {
                this.activeImageIndex=0;
            }     
        },

        prevSlide(){
            if(this.activeImageIndex==0){
                this.activeImageIndex=this.movie.images.length-1
            }else{this.activeImageIndex--;}
        }
    }
  }).mount('#app')