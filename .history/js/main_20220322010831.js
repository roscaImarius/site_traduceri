$(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height,
    backtop = $("#back-top");

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
    $("body,html").animate({
      scrollTop: 0,
    });
    return false;
  });
  /* ---------------------------------------------
  scroll body to 0px on click Ends
--------------------------------------------- */

  //   Sciome 5 click ACTIVE CLASS
  $(".navbar-nav .nav-item").on("click", function () {
    $(".nav-item").removeClass("active5");
    $(this).addClass("active5");
    $(".navbar-collapse").removeClass("show");
  });

  /* ---------------------------------------------
        Banner Toggle Starts
     --------------------------------------------- */

  // Sciome 5 on scroll change active class

  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".menu_nav .nav-item");

  function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 40 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active5"));
    links[index].classList.add("active5");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);

  /* ---------------------------------------------
        Header Scroll
     --------------------------------------------- */

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
});
