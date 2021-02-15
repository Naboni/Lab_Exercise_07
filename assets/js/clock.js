const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hrDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;
    
    // We can see the actual degree in the console
    // console.log(sec*360, min*360, hour*360);
	secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	hrDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();