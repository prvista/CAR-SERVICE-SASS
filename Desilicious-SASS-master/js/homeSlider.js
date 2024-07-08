
var slider = tns({
    container: ".serviceSlider__content",
    // rows: 2,
    items: 3,
    speed:600,
    gutter: 30,
    // slideBy: 1,
    autoplay: false,
    // containerControls: "#controls",
    prevButton: ".prev__home",
    nextButton: ".next__home",
    // axis: "horizontal",
    // mode: "carousel",
    // rewind: false,
    // loop:false,
    controls: true,
    controlsPosition: "bottom",
    controlsContainer: "#homeservice__controls",

    responsive: {
        1250: {
            items: 3,
            slideBy: 1,
        },

        200: {
            items:1,
        },
    }
});



