/*
function script
*/


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

// in page-3 the gooey effect is done by shery js 
function sheryjs(){
    Shery.imageEffect(".image_div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.16,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272682394421903},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.06,"range":[0,10]},"metaball":{"value":0.47,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
        gooey: true,
    })
}

sheryjs();






