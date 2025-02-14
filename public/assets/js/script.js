// toggle script 
function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
  }

  function toggleSlide(Id, db) {
    var element = document.querySelector(Id);
    if (element.style.maxHeight) {
        element.style.maxHeight = null; // Collapse the element
    } else {
        element.style.maxHeight = element.scrollHeight + "px"; // Expand the element
    }
    element.classList.toggle(db); // Optional: Toggle a class
}
// swiper 1 start
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
// swiper 1 end

// swiper 2 start
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
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });
// swiper 2 end

  // swiper 3 start
var swiper = new Swiper(".mySwiper3", {
  loop: true,
slidesPerView: 2,
spaceBetween: 10,
navigation: {
  nextEl: ".next",
  prevEl: ".prev",
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  450: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
},
});
  // swiper 3 end

  // swiper 4 start
  var swiper = new Swiper(".mySwiper4", {
    loop: true,
    grabCursor: true,
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // swiper 4 end
// gallery-thumbs swiper start  
var galleryThumbs = new Swiper('.gallery-thumbs', {
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
// gallery-thumbs swiper end  
// favorite_sport swiper start 
var swiper = new Swiper(".favorite_sport", {
  slidesPerView: 1.3,
  loop: true,
  spaceBetween: 20,
  autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1536: {
      slidesPerView: 6,
    },
  },
});
// favorite_sport swiper end 

// faqs tab script start
  $(function() {
    $('.faqs_content').slideUp();
    $('.faqs_title.active').next().slideDown();
    $('.faqs_title').click(function(j) {   
      if ($(this).hasClass('active')) {
        $('.faqs_title').removeClass('active');
        $(this).next().slideUp();
      }
      else {
        $('.faqs_title').removeClass('active');
        $('.faqs_content').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
      }     
    });
  });
// faqs tab script ebd

// my booking tabs start
  $(document).ready(function () {
    $('.tab_book li a').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.tab_book li a').removeClass('active');
    $('.tab-main').removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
    });
    });

  $(document).ready(function () {
    $('.tab_book2 li a').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.tab_book2 li a').removeClass('active');
    $('.tab-main2').removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
    });
    });
// my booking tabs end

// smooth scroller js start 
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    smoothTouch: 0.5
})
// smooth scroller js end 

// on scroll header js start 
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("main_header");          

  if (prevScrollpos > currentScrollPos) {
  navbar?.classList.remove("header_down");
  navbar?.classList.add("header_up");
  } else {
  navbar?.classList.remove("header_up");
  navbar?.classList.add("header_down");
  }
  prevScrollpos = currentScrollPos;
}
if (window.innerWidth <= 450) {
  var prevScrollpos = window.pageYOffset;
};
// on scroll header js end 
