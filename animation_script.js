
timelime_1.from(loader_lines,{
    y:150,
    opacity:0,
    delay:0.7,
    stagger:0.2,
    duration:0.8
});

timelime_1.from("#part1_counter",{
    scale:0,
    opacity:0,
    duration:0.8,
    onComplete: ()=>{
        begin_count(()=>{

            loader.remove();

            gsap.from("#page1",{
                opacity:0,
                y:1600,
                duration:1.2,
                ease:"power4.out"
            });
        });
    }
},"<");

gsap.from("#wait_message",{
    scale:0,
    duration:1.2,
    delay:1.2,    
});







