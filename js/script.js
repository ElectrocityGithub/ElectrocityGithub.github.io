window.addEventListener("scroll", function(event) {
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll("[data-type='parallax']");

  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute("data-depth");
    movement = -(topDistance * depth);
    translate3d = "translate3d(0, " + movement + "px, 0)";
    layer.style["-webkit-transform"] = translate3d;
    layer.style["-moz-transform"] = translate3d;
    layer.style["-ms-transform"] = translate3d;
    layer.style["-o-transform"] = translate3d;
    layer.style.transform = translate3d;
    //layer.style.transition="linear 0.1s";
  }
});
var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-scene2');
var parallax = new Parallax(scene);


$(document).ready(function() {
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
    $("#myNav").toggleClass("overlayaf");
  });
});

$(document).ready(function() {
  $("open").click(function() {
    $(".overlay").css("width", "0%");
    $("#nav-icon1").toggleClass("open");
  });
});

$(document).ready(function() {
  $(".overlay-content").click(function() {
    $("#myNav").toggleClass("overlayaf");
    $("#nav-icon1").toggleClass("open");
  });
});

let height = window.innerHeight;
$(window).scroll(function() {
  if ($(document).scrollTop() > height -40) {
    $("#nav-icon1").addClass("fixed");
  } else {
    $("#nav-icon1").removeClass("fixed");
  }250
});


  
$(document).ready(function() {
    setTimeout(function(){
  $('body').css("overflow","visible");
    },1200);
  });

$(document).ready(function() {
 $("#elec").click(function() {
   $(".section-2:nth-child(2)").toggleClass("even");
   $(".nothing").toggleClass("appear");
 });
});

$(document).ready(function() {
 $("#tele").click(function() {
   $(".section-2:nth-child(3)").toggleClass("odd");
   $(".nothing2").toggleClass("appear");
 });
});
$(document).ready(function() {
 $("#secu").click(function() {
   $(".section-2:nth-child(6)").toggleClass("even");
   $(".nothing3").toggleClass("appear");
 });
});
$(document).ready(function() {
 $("#ecla").click(function() {
   $(".section-2:nth-child(7)").toggleClass("odd");
   $(".nothing4").toggleClass("appear");
 });
});
$(document).ready(function() {
 $("#info").click(function() {
   $(".section-2:nth-child(10)").toggleClass("even");
   $(".nothing5").toggleClass("appear");
 });
});



//scroll to...
$('a[href^="#electricite"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top 
        },
        1000
      );
  }
});
$('a[href^="#telecom"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top 
        },
        1000
      );
  }
});
$('a[href^="#securite"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top 
        },
        1000
      );
  }
});
$('a[href^="#eclairage"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top 
        },
        1000
      );
  }
});
$('a[href^="#informatique"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top 
        },
        1000
      );
  }
}); 