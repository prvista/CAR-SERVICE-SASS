var slider = tns({
    container: ".servicePage__slider",
    // rows: 2,
    items: 3,
    speed:300,
    gutter: 100,
    // slideBy: 1,
    autoplay: false,
    // containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    // axis: "horizontal",
    // mode: "carousel",
    // rewind: false,
    // loop:false,
    controls: true,
    controlsPosition: "bottom",
    controlsContainer: "#service__controls",

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