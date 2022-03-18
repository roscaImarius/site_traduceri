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

  //   Sciome 5
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
  //  Open Social Icons
  $(".open-social").on("click", function (e) {
    e.preventDefault();
    $(".social-profile").toggleClass("hide");
  });

  // Sciome 5 on scroll change active class

  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-item");
  console.log(sections);
  function changeLinkState() {
    let index = sections.length + 1;
    console.log(index);
    while (--index && window.scrollY + 1500 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active5"));
    links[index].classList.add("active5");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);

  //   $(window)
  //     .on("scroll", function () {
  //       if ($(window).scrollTop() >= 100) {
  //         $("section").each(function (i) {
  //           if ($(this).position().top <= $(window).scrollTop() - 0) {
  //             $(".nav5 .nav-item.active5").removeClass("active5");
  //             $(".nav5 .nav-item").eq(i).addClass("active5");
  //           }
  //         });
  //       } else {
  //         $(".nav5 .nav-item.active5").removeClass("active5");
  //         $(".nav5 .nav-item:first").addClass("active5");
  //       }
  //     })
  //     .scroll();
  /* ---------------------------------------------
        Scrollyfy Ends
     --------------------------------------------- */

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
});
