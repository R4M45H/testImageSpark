if (document.body.clientWidth < 640) {
  const number = document.body.querySelector('.number'),
        language = document.body.querySelector('.language');
        
  number.remove();
  language.remove();
}

  // let makeInfo = document.body.querySelector('.weMake__item-info');
  //     makeInfo.textContent = "Консалтинг и аудит сайтов.";
      


$('.owl-carousel').owlCarousel({
  loop: false,
  smartSpeed: 1000,
  margin: 10,
  touchDrag: false,
  navText: ["<img src='images/sliderArrowPrev.png'>", "<img src='images/sliderArrowNext.png'>"],
  responsive: {
    320: {
      dots: true,
      nav: false,
      touchDrag: true,
      mouseDrag: true,
      items: 1
    },
    1000: {
      nav: true,
      touchDrag: false,
      mouseDrag: false,
      items: 1
    }
  }
});

//Menu-btn
$(".menu-btn").on("click", function () {
  if ($('#menu').hasClass("responsive")) {
    $("#menu").removeClass("responsive");
  } else {
    $("#menu").addClass("responsive");
  }
});
$(".menu-btn").on("click", function () {
  if ($(this).hasClass("active")) {
    $(".menu-btn").removeClass("active");
  } else {
    $(".menu-btn").addClass("active");
  }
});
//Closed menu after clicking outside the menu area

/* if ($(document).width() < 450)
  $(document).mouseup(function (e) {
    if (!$(e.target).closest(".header__wrapper").length) {
      $(".nav").slideUp();
      $(".menu-btn").removeClass("active");
    }
    e.stopPropagation();
  }); */

