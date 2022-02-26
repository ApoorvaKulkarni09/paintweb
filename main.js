

var  lpx,lpy
var canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 color = "BLACK"
 Line = 2
 width = screen.width
 screenwidth = screen.width-70;
 screenheight =screen.height-300;

 if (width<992)
  { document.getElementById("myCanvas").width = screenwidth;
  document.getElementById("myCanvas").height = screenheight;
   document.body.style.overflow="hidden" 
 }

 canvas.addEventListener("touchstart" , touchstart );
 function touchstart(e){
     console.log("my touch start")
     lpx=e.touches[0].clientX-canvas.offsetLeft;
     lpy =e.touches[0].clientY-canvas.offsetTop;

 }
 
 
canvas.addEventListener("touchmove",touchmove);
function touchmove(e){

cpx = e.touches[0].clientX - canvas.offsetLeft;
cpy = e.touches[0].clientY- canvas.offsetTop ;
 ctx.beginPath()
  ctx.strokeStyle = color ;
  ctx.lineWidth= Line ;


   console.log ("last postion of X = " + lpx + "last position of y = " + lpy);
ctx.moveTo(lpx,lpy);
console.log ("current postion of X = " + cpx + "current position of y = " + cpy);
ctx.lineTo(cpx,cpy)
ctx.stroke()

lpy=cpy;
lpx=cpx;
   
}