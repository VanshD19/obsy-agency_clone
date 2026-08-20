// ------------------------------
// LOCOMOTIVE SCROLL
// ------------------------------

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


// ------------------------------
// LOCOMOTIVE + SCROLLTRIGGER
// ------------------------------

scroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {

    scrollTop(value) {

        if (arguments.length) {
            scroll.scrollTo(value, 0, 0);
        }

        return scroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {

        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };

    },

    pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"

});


// Whenever ScrollTrigger refreshes,
// update Locomotive

ScrollTrigger.addEventListener("refresh", () => {
    scroll.update();
});


// Initial refresh

ScrollTrigger.refresh();


