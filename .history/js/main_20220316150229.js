$(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height,
    backtop = $("#back-top");

  /* ---------------------------------------------
        Wow js Start
     --------------------------------------------- */
  new WOW({
    mobile: false,
  }).init();
  /* ---------------------------------------------
        Wow js End
     --------------------------------------------- */

  /* ---------------------------------------------
        Preloader Start
     --------------------------------------------- */
  $(window).on("load", function () {
    $(".se-pre-con").fadeOut("slow");
  });
  /* ---------------------------------------------
        Preloader End
     --------------------------------------------- */

  /* ---------------------------------------------
        scroll body to 0px on click Starts
     --------------------------------------------- */
  $("#back-top a").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
  /* ---------------------------------------------
  scroll body to 0px on click Ends
--------------------------------------------- */

  /* ---------------------------------------------
        Initiate superfish on nav menu Starts
     --------------------------------------------- */
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Sciome 5
  $(".navbar-nav .nav-item").on("click", function () {
    $(".nav-item").removeClass("active5");
    $(this).addClass("active5");
  });
  /* ---------------------------------------------
        Navbar Active Class End
     --------------------------------------------- */

  /* ---------------------------------------------
        Banner Toggle Starts
     --------------------------------------------- */
  //  Open Socail Icons
  $(".open-social").on("click", function (e) {
    e.preventDefault();
    $(".social-profile").toggleClass("hide");
  });

  // Sciome 5
  $(window)
    .on("scroll", function () {
      if ($(window).scrollTop() >= 100) {
        $("section").each(function (i) {
          if ($(this).position().top <= $(window).scrollTop() - 0) {
            $(".nav5 .nav-item.active5").removeClass("active5");
            $(".nav5 .nav-item").eq(i).addClass("active5");
          }
        });
      } else {
        $(".nav5 .nav-item.active5").removeClass("active5");
        $(".nav5 .nav-item:first").addClass("active5");
      }
    })
    .scroll();
  /* ---------------------------------------------
        Scrollyfy Ends
     --------------------------------------------- */

  /* ---------------------------------------------
        Header Scroll
  
  // Sciome 5
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > window_height - 60) {
      $("#header5").addClass("header-scrolled");
      backtop.addClass("back-top-animation");
    } else {
      $("#header5").removeClass("header-scrolled");
      backtop.removeClass("back-top-animation");
    }
  });
  /* ---------------------------------------------
        Header Scroll Ends
     --------------------------------------------- */

  /* ---------------------------------------------
        Owl Carousel
     --------------------------------------------- */
  $(".active-review-carusel").owlCarousel({
    items: 1,
    margin: 30,
    autoplay: true,
    loop: true,
    dots: true,
    stagePadding: 180,
    dots: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      1024: {
        items: 1,
        stagePadding: 180,
      },
    },
  });

  $(".active-review-carusel5").owlCarousel({
    items: 1,
    margin: 30,
    autoplay: true,
    loop: true,
    dots: true,
    dots: true,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
  });

  $(".active-feedback-carusel").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    nav: true,
    dots: false,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 300,
    paginationSpeed: 500,
    navText: [
      "<span class='lnr lnr-arrow-up'></span>",
      "<span class='lnr lnr-arrow-down'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 2,
      },
    },
  });

  $(".active-project-carusel").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 300,
    paginationSpeed: 500,
  });

  $(".blog-banner-carusel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 300,
    paginationSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".blog-post-carusel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 300,
    paginationSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".slider_widget").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: 2500,
    slideSpeed: 300,
    paginationSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  /* ---------------------------------------------
        Owl Carousel Ends
     --------------------------------------------- */

  /* ---------------------------------------------
        Progress Bar Starts
     --------------------------------------------- */
  // Version4
  var $progressBars = $(".progress-bars");
  $progressBars.find(".progress-bar").each(function () {
    var $t4 = $(this);
    $t4.css("width", 0);
    $t4.waypoint(
      function () {
        $t4.css("width", $t4.data("value") + "%");
      },
      {
        triggerOnce: true,
        offset: "bottom-in-view",
      }
    );
  });
  /* ---------------------------------------------
        Progress Bar Ends
     --------------------------------------------- */

  /* ---------------------------------------------
        Counter js Starts
     --------------------------------------------- */
  $(window).on("load", function () {
    $(".counter").counterUp({
      delay: 10,
      time: 1500,
    });
  });
  /* ---------------------------------------------
        Counter js Ends
     --------------------------------------------- */

  /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
  $(window).on("load", function () {
    $(".work-filter ul li").on("click", function () {
      $(".work-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data,
      });
    });

    if (document.getElementById("portfolio")) {
      var $workGrid = $(".work-grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all",
        },
      });
    }
  });
  /* ---------------------------------------------
            Isotope js Ends
         --------------------------------------------- */

  /* ---------------------------------------------
            Fullpage js Starts
         --------------------------------------------- */
  //  Sciome 2
  if ($(window).width() < 1024) {
    $("#main2").removeAttr("id");
  }
  if (document.getElementById("main2")) {
    $("#main2").fullpage({
      sectionSelector: ".vertical-scrolling",
      navigation: false,
      slidesNavigation: true,
      controlArrows: false,
      keyboardScrolling: true,
      anchors: [
        "firstSection",
        "secondSection",
        "thirdSection",
        "fourthSection",
        "fifthSection",
      ],
      menu: "#menu",
    });
  }

  /* ---------------------------------------------
            Fullpage js Ends
         --------------------------------------------- */

  /* ---------------------------------------------
            Magnific Popup js Starts
         --------------------------------------------- */
  $(".img-gal").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".play-btn").magnificPopup({
    type: "iframe",
    mainClass: "mfp-bg",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });
  /* ---------------------------------------------
            Magnific Popup js Ends
         --------------------------------------------- */
});
