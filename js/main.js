if (document.body.clientWidth < 640) {
  const number = document.body.querySelector('.number'),
        language = document.body.querySelector('.language');
        
  number.remove();
  language.remove();
}


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
    $(".nav__menu-list li a").click(function() {
      $("#menu").removeClass("responsive");
      $(".menu-btn").removeClass("active");
    });
  }
});

$(".menu-btn").on("click", function () {
  if ($(this).hasClass("active")) {
    $(".menu-btn").removeClass("active");
  } else {
    $(".menu-btn").addClass("active");
  }
});

// Smooth scroll naivgation
$(document).ready(function () {
  $("#menu, #reserv-btn").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});


