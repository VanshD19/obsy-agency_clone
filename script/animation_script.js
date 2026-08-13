/*
animation script
*/

// animation for loader
timeline_1.from(loader_lines,{
    y:150,
    opacity:0,
    delay:0.7,
    stagger:0.2,
    duration:0.8
});

// animation for counter
timeline_1.from("#part1_counter",{
    scale:0,
    opacity:0,
    duration:0.8,
    onComplete: ()=>{

        // counting begins
        begin_count(()=>{

            // created a new short lived timeline to create one fter the other effect by gsap
            var tl = gsap.timeline();

            // first makes the loader disappear
            tl.to("#loader_content",{
                opacity:0,
                duration:2
            })
            
            // makes the loader go up creating an effect like page 1 in coming up
            tl.to("#loader",{
                onStart: ()=>{
                    timeline_2.play();
                },
                y:-2000,
                duration:4.1,
                ease:"power4.out",
            });
        });
    }
},"<");

// brings the a waiting message with the loader 
gsap.from("#wait_message",{
    scale:0,
    duration:1.2,
    delay:1.2,    
});

// animation for page 1 
timeline_2.from(page_1_lines,{
    y:200,
    opacity:0,
    stagger:0.2,
    duration:0.9,
    onComplete:()=>{

        // removes the loader once the counter finishes its time
        loader.remove();

        // updates the scroller as using locomotive 
        scroll.update();
    }
});







