

var endDate = new Date("Dec 6, 2021 12:07:00").getTime();
//Put value of image in bgImageElement
var bgImageElement = document.getElementById('bg-img');

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>Day(s)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>Hr(s)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>Min(s)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
            "<span class='label'>Sec(s)</span>";

        //update the image every odd and even seconds
        if (secs % 2 === 0) {
            var backimg = 'image1.png';

        }
        else {
            var backimg = 'image2.jpg';
        }
        bgImageElement.src = backimg;
    
    } else {

        document.getElementById("timer").innerHTML = "Yay....The countdown is over!";
    
    }

    // print value in the console 
    var tt = document.getElementById("timer").innerHTML;
    
    console.log(tt);

    //to stop the interval after ending the timer
    if (t <= 0) {
        clearInterval(timer);
    }
    
}, 1000);