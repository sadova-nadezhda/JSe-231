let canv = document.querySelector('#box');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';

ctx.lineWidth = '5'

// Прямоугольник
// ctx.fillRect(50, 50, 500, 500)
// ctx.strokeRect(50, 50, 300, 200)
// ctx.rect(50, 50, 300, 200);
// ctx.stroke()
// ctx.clearRect(0, 0, canv.width, canv.height)
// ctx.clearRect(100, 100, 200, 200)

// Круг
// ctx.arc(300, 300, 100, 0, 2 * Math.PI)
// ctx.fill()
// ctx.stroke()

// Треугольник
// ctx.scale(3, 3)
// ctx.translate(canv.width / 2, canv.height / 2)
// ctx.rotate(-90 * Math.PI / 180)
// ctx.beginPath();
// ctx.moveTo(300, 100);
// ctx.lineTo(150, 300);
// ctx.lineTo(450, 300);
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();

// Text
let grad = ctx.createLinearGradient(0, 0, 200, 200)
grad.addColorStop('0', 'blue')
grad.addColorStop('.5', 'purple')
grad.addColorStop('1', 'red')
ctx.fillStyle = grad;
ctx.font = 'bold 40px Georgia';
ctx.fillText('Hello World!', 100, 100);
// ctx.strokeText('Hello World!', 50, 50)
