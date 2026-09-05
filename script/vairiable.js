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

// cursor for the website
const cursor = document.querySelector("#cursor");

// container of video and img on page 2
const page_2_container = document.querySelector("#video_container");

// circle cursor on page 2 video and img
const circle_cursor = document.querySelector("#page2_circle");

// used to store the left and top position of circle cursor on the page 2 to be used when being repositioned again
const initialLeft = circle_cursor.offsetLeft;
const initialTop = circle_cursor.offsetTop;

// variable used to help identify weather the cursor is in video container or not
let in_video_container = false;

// flag for making the video play and pause
let is_playing = false;

// img inside the page 2 
let img_page_2 = document.querySelector("#video_container>img");

// video inside the page 2
let video_page_2 = document.querySelector("#video_container>video");

// conatiner of images on page-3 for gooey effect
let gooey_container = document.querySelectorAll("#page3 #image-container-div .image_div");


