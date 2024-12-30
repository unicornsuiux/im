$('.portfolio-slider').owlCarousel({
    loop:true,
    center:true,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.5
        }
    }
})
$(".portfolio-slider .portfolio-slider-item").not(".cloned").each(function (index) {
    // Skip every second item (e.g., 1, 3, 5... in a 0-based index)
    if ((index + 1) % 2 === 0) {
        $(this).css({
            "margin-top": "30px" // Example style
        });
    }
});

// $('.testimonail-slider').owlCarousel({
//     loop:true,
//     center:true,
//     margin:20,
//     nav:false,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// })


if ($(window).width() > 1200) {
    function itemSize() {
      var OwlSlideItem = $(".testimonail-slider .testimonail-slide-item"),
        // OwlSlideItemmargin = 10,
        itemsLength = 5,
        owlFullScrnWidth = $(".testimonail-slider").width(),
        normItemWidth = owlFullScrnWidth / itemsLength - 9;
  
      OwlSlideItem.stop().animate({ width: normItemWidth + "px" }, 500);
    }
    itemSize();
  }
  
  function itemExpanded() {
    var OwlSlidemactive = $(".testimonail-slider .owl-item.active"),
      // OwlSlideItemmargin = $('.testimonail-slider .owl-item').css('marginRight').replace(/[A-Za-z]/g, ""),
      itemsLength = 5,
      owlFullScrnWidth = $(".testimonail-slider").width() - itemsLength,
      normItemWidth = owlFullScrnWidth / itemsLength - 10,
      lgItemWidth = normItemWidth * 2 + 20,
      smItemWidth = (normItemWidth * 3) / 4 - 3;
  
    OwlSlidemactive.hover(
      function () {
        var $this = $(this);
        $this
          .addClass("expanded")
          .removeClass("active")
          .find(".testimonail-slide-item")
          .stop()
          .animate({ width: lgItemWidth + "px" }, 500);
        $(".testimonail-slider .active")
          .find(".testimonail-slide-item")
          .stop()
          .animate({ width: smItemWidth + "px" }, 500);
      },
      function () {
        var $this = $(this);
        $this.removeClass("expanded").addClass("active");
        $(".testimonail-slider .active")
          .find(".testimonail-slide-item")
          .stop()
          .animate({ width: normItemWidth + "px" }, 500);
      }
    );
  }
  initialize_owl($(".testimonail-slider"));
  
  function initialize_owl(el) {
    el.owlCarousel({
      loop: false,
      margin: 10,
      navText: ["<i class='angle-left'></i>", "<i class='angle-right'></i>"],
      dots: false,
      autoPlay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.25
        },
        460: {
          items: 1.75
        },
        768: {
          items: 2.5
        },
        900: {
          items: 3.5
        },
        1200: {
          margin: 0,
          onInitialized: itemExpanded,
          onRefresh: itemExpanded,
          autoWidth: true,
          mouseDrag: false,
          items: 5
        }
      }
    });
  }
  