canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastpositionofx,lastpositionofy;
color = "slate_blue";
widthofline = 3;

canvas.addEventListener("mousedown",createtheyfunctionmy_mousedown);
function createtheyfunctionmy_mousedown(e){
    color=document.getElementById("thisidisclearlynotworkingsothisistheid").value;
    console.log(color);
    widthofline=document.getElementById("givetheidwidthofline").value;
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseup",createtheyfunctionmy_mouseup);
function createtheyfunctionmy_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",createtheyfunctionmy_mouseleave);
function createtheyfunctionmy_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",createtheyfunctionmy_mousemove);
function createtheyfunctionmy_mousemove(e){
    givethevariablenamecurrentpositionofmouse_x=e.clientX-canvas.offsetLeft;
    givethevariablenamecurrentpositionofmouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent== "mouseDown"){
        ctx.beginPath();
        ctx.stokeStyle=color;
        ctx.arc(givethevariablenamecurrentpositionofmouse_x, givethevariablenamecurrentpositionofmouse_y, 50, 0, 2*Math.PI);
        ctx.stroke();
    }
  }

function clear(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}