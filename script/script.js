/*
function script
*/

// use for making scrolling smoother used when locomotive is used
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// function for the loader page to count from 00 to 100
function begin_count(callback){
    let cnt = Number(counter.textContent);

    var set_interval = setInterval(function(){
        if(cnt === 100){
            clearInterval(set_interval);

            setTimeout(()=>{
                callback();
            },1700)

            return;
        }

        cnt++;
        counter.textContent = String(cnt).padStart(2,"0");
    },50);
}

// makes magnet effecton page 1
Shery.makeMagnet(".magnet");

// to make "web" and "graphics" transparent on hovering in page 1
page_1_hover.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
        element.style.color = "transparent";
        element.style.webkitTextStroke = "1px white";
        element.style.textDecoration = "none";
    });
});

// to make "web" and "graphics" white from transparent on leaving hovering in page 1
page_1_hover.forEach((element)=>{
    element.addEventListener("mouseleave",()=>{
        element.style.color = "white";
        element.style.webkitTextStroke = "0px";
        element.style.textDecoration = "underline";
    });
});


