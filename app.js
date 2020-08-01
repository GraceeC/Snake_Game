
function canvasText(){
let canvasDisplay =document.getElementById('myCanvas')
let text = canvasDisplay.getContext('2d');
text.font = "12px Georgia";
text.fillStyle ='red';
text.fillText('Apples Ate:', 200, 15);
text.fillText('Wins:', 5, 15);

}
canvasText();

