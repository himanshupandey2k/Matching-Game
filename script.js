const moves = document.getElementById("moves-counter");
const timeValue = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;
const items = [
    { name: "ant", image: "./img/ant.png"},
    { name: "bee", image: "./img/bee.png"},
    { name: "beetle", image: "./img/beetle.png"},
    { name: "bird", image: "./img/bird.png"},
    { name: "dragonfly", image: "./img/dragonfly.png"},
    { name: "ladybug", image: "./img/ladybug.png"},
    { name: "snail", image: "./img/snail.png"},
    { name: "tarantula", image: "./img/tarantula.png"},
];

let seconds = 0, minutes = 0;
let movesCount = 0, winCount = 0;

const timeGenerator = () => {
    seconds += 1;
    if(seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span>
    ${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

const generateRandom = (size = 4) => {
    let tempArr = [...items];
    let cardValues = [];
    size = (size*size) / 2
    for(let i=0;i<size;i++) {
        const randomIndex = Math.floor(Math.random() * tempArr.length);
        cardValues.push(tempArr[randomIndex]);
        tempArr.splice(randomIndex, 1);
    }
    return cardValues;
}

const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
};

initializer();
