function setDiv1() {
    var element = document.getElementById("first_div");
    setColor(element);
}
function setDiv2() {
    var element = document.getElementById("second_div");
    setColor(element);
}
function setDiv3() {
    var element = document.getElementById("third_div");
    setColor(element);
}
function setDiv4() {
    var element = document.getElementById("fourth_div");
    setColor(element);
}
function setDiv5() {
    var element = document.getElementById("fifth_div");
    setColor(element);
}
function setDiv6() {
    var element = document.getElementById("last_div");
    setColor(element);
}

function setColor(element){
    var computedStyle = window.getComputedStyle(element);
    var backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor === 'rgb(0, 0, 255)') {
        element.style.backgroundColor = 'rgb(255, 165, 0)';
    } else if (backgroundColor === 'rgb(0, 128, 0)') {
        element.style.backgroundColor = 'rgb(0, 0, 255)';
    }else if (backgroundColor === 'rgb(255, 0, 0)') {
        element.style.backgroundColor = 'rgb(0, 128, 0)';
    }else if (backgroundColor === 'rgb(255, 255, 0)') {
        element.style.backgroundColor = 'rgb(255, 0, 0)';
    }else if (backgroundColor === 'rgb(128, 0, 128)') {
        element.style.backgroundColor = 'rgb(255, 255, 0)';
    }else if (backgroundColor === 'rgb(255, 165, 0)') {
        element.style.backgroundColor = 'rgb(128, 0, 128)';
    }
}

var intervalId1;
var intervalId2;
var intervalId3;
var intervalId4;
var intervalId5;
var intervalId6;

function startToggling() {
    intervalId1 = setInterval(setDiv1, 1500);
    intervalId2 = setInterval(setDiv2, 1500);
    intervalId3 = setInterval(setDiv3, 1500);
    intervalId4 = setInterval(setDiv4, 1500);
    intervalId5 = setInterval(setDiv5, 1500);
    intervalId6 = setInterval(setDiv6, 1500);
}

function stopToggling() {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    clearInterval(intervalId5);
    clearInterval(intervalId6);
}

var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", startToggling);
stopButton.addEventListener("click", stopToggling);