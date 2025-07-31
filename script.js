//alright,imma add references from the index.html file
const timerdisplay =document.getElementById("timerdisplay");
const startbutton = document.getElementById("startbutton");
const pausebutton = document.getElementById("pausebutton");
const workbtn = document.getElementById("workbtn");
const breakbtn = document.getElementById("breakbtn");


//initail setup
let minutes =25;
let seconds=0;
let timerInterval; //this is whats gonna store the interval ID
let curretMode ='work'//can be work or break


function updatetimerdisplay(){
    //
}