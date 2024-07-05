var slider = tns({
    container: ".homeSlider__slider",
    items: 1,
    speed:700,
    gutter: 100,
    slideBy: "page",
    autoplay: false,
    navPosition: "bottom",
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    axis: "vertical",
    mode: "gallery",

    responsive: {
        1250: {
            items: 1,
        },

        200: {
            items:1,
        },
    }
});




var slider = tns({
    container: ".serviceSlider__content",
    items: 3,
    speed:700,
    gutter: 100,
    slideBy: "page",
    autoplay: false,
    navPosition: "bottom",
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    axis: "horizontal",
    mode: "carousel",

    responsive: {
        1250: {
            items: 3,
        },

        200: {
            items:1,
        },
    }
});


