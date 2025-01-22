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

// faqs tab script 
  $(function() {
    $('.inner_content').slideUp();
    $('.title_tab.active').next().slideDown();
    $('.title_tab').click(function(j) {   
      if ($(this).hasClass('active')) {
        $('.tab_main').addClass('active');
        $('.title_tab').removeClass('active');
        $('.tab_main').removeClass('active');
        $(this).next().slideUp();
      }
      else {
        $('.title_tab').removeClass('active');
        $('.tab_main').removeClass('active');
        $('.inner_content').slideUp();
        $(this).addClass('active');
        $('.tab_main').addClass('active');
        $(this).next().slideDown();
      }     
    });
  });
