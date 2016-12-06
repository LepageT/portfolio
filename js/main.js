$(document).ready(function () {



    $("#accueil").find(".animateInRight").animate({
        opacity: 1
    }, 1000, function () {
        $(".main-nav").animate({
            opacity: 1
        }, 1000);
    });


    $("#owl-example").owlCarousel({
        items: 1,
        mouseDrag: !1,
        touchDrag: !1,
        smartSpeed: 1000,
        fallbackEasing: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"
    });
    $(".owl-carousel").owlCarousel()

    //get carousel instance data and store it in variable owl
    var owl = $(".owl-carousel");

    $(".main-nav a").click(function (event) {
        var parent = $(this).parent().index();

        if (parent !== $(".main-nav-wrapper").find(".active").index()) {
            $(".main-nav-wrapper").removeClass("open");
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
            /* Animation of fade in after the translation */
            owl.on("translated.owl.carousel", function () {
                $(".owl-item:eq(" + parent + ")").find(".animateInRight").animate({
                    opacity: 1
                }, 1000);
            });

            /*Animation of fade out and change slide */
            $(".owl-item").find(".animateInRight").animate({
                opacity: 0
            }, 1000, function () {
                owl.trigger("to.owl.carousel", [parent]);
            });
        } else {
            $(".main-nav-wrapper").removeClass("open");
        }

    });

    $(".contactFromProject").click(function (event) {

        $(".main-nav").find("li").removeClass("active");
        $(".main-nav").find("li").last().addClass("active");
        owl.trigger("to.owl.carousel", [4]);

        owl.on("translated.owl.carousel", function () {
            $(".owl-item:eq(" + 4 + ")").find(".animateInRight").animate({
                opacity: 1
            }, 1000);
        });

        /*Animation of fade out and change slide */
        $(".owl-item").find(".animateInRight").animate({
            opacity: 0
        }, 1000, function () {
            owl.trigger("to.owl.carousel", [4]);
        });
    });

    $(".main-nav-toggle").on("click", function () {
        $(".main-nav-wrapper").addClass("open");
    });

    $(".main-nav-wrapper .close").on("click", function () {
        $(".main-nav-wrapper").removeClass("open");
    });
});