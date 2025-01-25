// toggle script 
function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
    }
// swiper 1 
var swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    speed: 1500,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2.01,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2.01,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        }
    });
// swiper 2 
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1500,
    grabCursor: true,
    
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  // swiper 4 
var swiper = new Swiper(".mySwiper4", {
  loop: true,
slidesPerView: 7,
spaceBetween: 10,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  640: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
},
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  centeredSlides: true,
    spaceBetween: 16,
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 1,
    loop: true,
    loopedSlides: 1, //looped slides should be the same
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  var swiper = new Swiper(".mySwiper5", {
    loop: true,
    grabCursor: true,
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// faqs tab script 
  $(function() {
    $('.inner_content').slideUp();
    $('.title_tab.active').next().slideDown();
    $('.title_tab').click(function(j) {   
      if ($(this).hasClass('active')) {
        $('.title_tab').removeClass('active');
        $(this).next().slideUp();
      }
      else {
        $('.title_tab').removeClass('active');
        $('.inner_content').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
      }     
    });
  });

