function createVueInstance() {
     new Vue({
          el: '#app',

          data: {
               'softskills': ['scrittura', 'determinazione', 'creativita'],
               'softskillInput': null,
               'skills': ['html','css', 'javascript', 'jquery', 'sass', 'vue', 'mysql', 'laravel'],
               'skillImage' : 'img/',
          },

          mounted: function() {
               // setInterval(this.switchLatestPost, 3000);
               console.log('vue mounted');
          },

          methods: {
               showSoftskills: function(index) {
                    this.softskillInput = index;
               }
              
          }
     });
   }
   
   
   function portfolio() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', portfolio);