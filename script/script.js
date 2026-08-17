/*
function script
*/

// use for making scrolling smoother used when locomotive is used
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// making the circular cursor on the website move with mouse and making it move smoother
window.addEventListener("mousemove", (e)=>{
    gsap.to(cursor,{
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
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

// making the orange button move when when entering the video and img container
page_2_container.addEventListener("mousemove",(e)=>{

    // making the normal cursor go away
    cursor.style.display = "none";
    
    // marking the flag true
    in_video_container = true;
    
    // conatins the details about the video container in page 2
    const rect = page_2_container.getBoundingClientRect();
    
    gsap.to(circle_cursor,{
        // makes the circle cursor move
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        duration: 0.1,
    });
});

// making the cursor move back to its orignal position
page_2_container.addEventListener("mouseleave",()=>{
    // marking the flag false
    in_video_container = false;

    // bringing the normal cursor back
    cursor.style.display = "block";

    // moving the circle cursor on page 2 back to its original position by smooth transition 
    gsap.to(circle_cursor,{
        left: initialLeft,
        top: initialTop,
        duration: 0.6,
    });
});

// on click the video inside the container plays and the img goes back 
page_2_container.addEventListener("click", ()=>{
    if(!is_playing){
        video_page_2.style.display = "block";
        img_page_2.style.display = "none";
        video_page_2.play();
        is_playing = true;
    }
    else{
        img_page_2.style.display = "block";
        video_page_2.pause();
        video_page_2.style.display = "none";
        is_playing = false;
    }
});






