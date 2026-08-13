/*
variable script
*/

// this is used to let scrolltrigger use when downloaded locally 
gsap.registerPlugin(ScrollTrigger);

// variables being used by other scripts
var body = document.querySelector("body");

var timeline_1 = gsap.timeline();

var timeline_2 = gsap.timeline({
    paused: true
});

var loader_lines = document.querySelectorAll(".h1");
var counter = document.querySelector("#counter");
var page_1_lines = document.querySelectorAll(".page_1_h1");
var page_1_hover = document.querySelectorAll(".page_1_hover");



