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
               }
              
          }
     });
   }
   
   
   function portfolio() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', portfolio);