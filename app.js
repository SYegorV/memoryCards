const boxs = document.querySelectorAll('.box')
const box1s = document.querySelectorAll('.box1')
const box2s = document.querySelectorAll('.box2')
const box3s = document.querySelectorAll('.box3')
const box4s = document.querySelectorAll('.box4')

const XxX = getRandomNumber(0, 88) // Random Number (от  до)
console.log(XxX)

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}



























// var PIXI = require('pixi.js');

// var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.view);

// var stage = new PIXI.Stage;

// var zombieTexture = PIXI.Texture.fromImage('zombie.png'); 
// var zombie = new PIXI.Sprite(zombieTexture);

// zombie.position.x = window.innerWidth / 2 ;
// zombie.position.y = window.innerHeight / 2 ;

// stage.addChild(zombie);

// function draw() { renderer.render(stage); requestAnimationFrame(draw); }

// draw(); 








// создаем контейнер для клавиатуры:
// const output = document.querySelector('output')

// const div = document.createElement('div')
//div.classList.add('keyboard')
//document.querySelector('.calculator').appendChild(div)

// simbols:
// преобразуем строку в массив:
// let one = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'.split(' ')
//console.log(one)
//'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')
// для каждого символа создаем кнопку:
// записываем значение символа в атрибут "value" кнопки:
// .map(symbol => {
//     div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
// })

//поиск кнопки и добавление к кнопке обработчика события "клик":
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // по клику вызывается функция со значением кнопки в качестве параметра
        calc(this.value)           
        //boxss[0].classList.add('up')
    })
})
//boxs[0].remove() // удалить круг


// код читается снизу вверх
// функция принимает значение кнопки
function calc(value) {
    if (value === '1') {
        box1s[0].classList.add('up') // boxs это массив
        box1s[4].classList.add('up') // boxs это массив
    } else if (value === '2') {
        box1s[1].classList.add('up') // boxs это массив
        box1s[5].classList.add('up') // boxs это массив
    } else if (value === '3') {
        box1s[2].classList.add('up') // boxs это массив
        box1s[6].classList.add('up') // boxs это массив
    } else if (value === '4') {
        box1s[3].classList.add('up') // boxs это массив
        box1s[7].classList.add('up') // boxs это массив
    } else if (value === '5') {
        box2s[0].classList.add('up') // boxs это массив
        box2s[4].classList.add('up') // boxs это массив
    } else if (value === '6') {
        box2s[1].classList.add('up') // boxs это массив
        box2s[5].classList.add('up') // boxs это массив
    } else if (value === '7') {
        box2s[2].classList.add('up') // boxs это массив
        box2s[6].classList.add('up') // boxs это массив
    } else if (value === '8') {
        box2s[3].classList.add('up') // boxs это массив
        box2s[7].classList.add('up') // boxs это массив
    } else if (value === '9') {
        box3s[0].classList.add('up') // boxs это массив
        box3s[4].classList.add('up') // boxs это массив
    } else if (value === '10') {
        box3s[1].classList.add('up') // boxs это массив
        box3s[5].classList.add('up') // boxs это массив
    } else if (value === '11') {
        box3s[2].classList.add('up') // boxs это массив
        box3s[6].classList.add('up') // boxs это массив
    } else if (value === '12') {
        box3s[3].classList.add('up') // boxs это массив
        box3s[7].classList.add('up') // boxs это массив
    } else if (value === '13') {
        box4s[0].classList.add('up') // boxs это массив
        box4s[4].classList.add('up') // boxs это массив
    } else if (value === '14') {
        box4s[1].classList.add('up')
        box4s[5].classList.add('up') // boxs это массив
    } else if (value === '15') {
        box4s[2].classList.add('up')
        box4s[6].classList.add('up') // boxs это массив
    } else if (value === '16') {
        box4s[3].classList.add('up')
        box4s[7].classList.add('up') // boxs это массив
    }
}