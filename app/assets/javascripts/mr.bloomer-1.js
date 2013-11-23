var color = new Array("#3fa9f5","#93278f","#ff7bac","#ff931e","#ffe646","#7ac943","#58beb9");
var  i= 0;

function changeColor(){
  document.getElementById("colorful").style.color = color[i];
  i = ( i < color.length -1 ) ?  i + 1 : 0;
}

setInterval( "changeColor()", 3000);
