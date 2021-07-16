function createVueInstance() {
     new Vue({
          el: '#app',

          data: {
               'softskills': ['scrittura', 'determinazione', 'creativita'],
               'softskillInput': null,
               'skills1': ['html','css', 'javascript', 'vue'],
               'skills2': ['sass', 'jquery', 'mysql', 'laravel'],
               'skillImage' : 'img/',
               'hamburgerFlag' : false,
               'carousel': {
                    'images': 
                    [
                         "img/boolzapp.png",
                         "img/proj.png",
                         "img/boolflix.png",
                         "img/Spotify.png",
                         "img/DeliverBoo1.png",
                         "img/DeliverBoo2.png",
                         "img/DeliverBoo3.png",
                         "img/digitalOcean1.png",
                         "img/DigitalOcean2.png",
                         "img/Hubspot1.png",
                         "img/Hubspot2.png",
                         "img/Hubspot3.png"
                    ],
                    'currentSlide': 0,
                    'slideDirection': 1,
                    'transitionName' : 'fade',
                    'showImage': true,
               }
          },

          mounted: function() {
               // setInterval(this.switchLatestPost, 3000);
               console.log('vue mounted');
          },

          methods: {
               showSoftskills: function(index) {
                    this.softskillInput = index;
               },

               showHamburger: function() {
                    this.hamburgerFlag = !this.hamburgerFlag;
               },

               slideNext: function () {

                    this.carousel.transitionName = 'slides-next'; 
                    if (this. carousel.currentSlide == this.carousel.images.length - 1) {
                         this.carousel.currentSlide = 0;
                    } else {
                         this.carousel.currentSlide++;
                    }
               },

               slidePrev: function() {
                    this.carousel.transitionName = 'slides-prev';
                    if(this.carousel.currentSlide == 0) {
                         this.carousel.currentSlide = this.carousel.images.length -1;
                         console.log(this.carousel.currentSlide);
                    } else {
                         this.carousel.currentSlide--;
                    }
               }
              
          }
     });
   }
   
   
   function portfolio() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', portfolio);