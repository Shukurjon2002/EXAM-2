$('.owl-carousel').owlCarousel({
   loop:true,
   margin:20,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       400: {
           items: 2
       },
       900:{
           items:3
       },
       1000:{
           items:4
       }
   }
})