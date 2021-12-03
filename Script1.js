// JavaScript source code
var countdownElement = document.getElementById('txt');
var initialCountdownVal = countdownElement.innerHTML;
//to get the value of image
var bgImageElement = document.getElementById('bg-image');

setInterval(function () {
    if (initialCountdownVal > 0) {
        initialCountdownVal -= 1;
    }
    else {
        initialCountdownVal = 0;
    }
    countdownElement.innerHTML = initialCountdownVal;


    if (initialCountdownVal % 2 === 0) {
        var backimgpath = 'image1.png';
    }

    else {
        var backimgpath = 'image2.jpg';
    }
    bgImageElement.src = backimgpath;
},1000);


