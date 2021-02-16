canvas = document.getElementById("myCanvas");
var mouseEvent = "empty";
var lastx, lasty;
ctx = canvas.getContext("2d");
color = "yellow";
line_width = 3;
canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.line_Width = line_width
    ctx.arc(mouse_x, mouse_y,20,0,360) 
        ctx.stroke()
    }
    

}
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {
    mouseEvent = "mouseUP"

}

canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e) {
    mouseEvent = "mouseleave"
}