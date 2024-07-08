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








