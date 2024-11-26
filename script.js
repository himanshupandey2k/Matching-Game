const moves = document.getElementById("moves-counter");
const timeValue = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.getElementById(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;
const item = [
    { name: "ant", image: "./img/ant.png"},
    { name: "bee", image: "./img/bee.png"},
    { name: "beetle", image: "./img/beetle.png"},
    { name: "bird", image: "./img/bird.png"},
    { name: "dragonfly", image: "./img/dragonfly.png"},
    { name: "ladybug", image: "./img/ladybug.png"},
    { name: "snail", image: "./img/snail.png"},
    { name: "tarantula", image: "./img/tarantula.png"},
];