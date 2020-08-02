// //text inside canvas for wins & apples eaten
// function canvasText(){
// let canvas =document.getElementById('myCanvas')
// let text = canvas.getContext('2d');

// text.font = "12px Georgia";
// text.fillStyle ='red';

// text.fillText('Apples Ate:', 50, 15);
// text.fillText('Wins:', 5, 15);

// }
// canvasText();
//snake function which is the black sqaure
function snake() {
    let canvas = document.getElementById('myCanvas')
    let snake = canvas.getContext('2d');

    snake.beginPath();
    snake.rect(10, 5, 5, 5);
    snake.fill();
}
snake();

//apple function which is red square
function apple() {
    let canvas = document.getElementById('myCanvas')
    let apple = canvas.getContext('2d');

    apple.beginPath();
    apple.rect(50, 50, 5, 5);
    apple.fillStyle ='red';
    apple.fill();
}
apple();