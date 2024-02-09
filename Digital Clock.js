
//Creating the function for the clock to show the time and date

let ShowTime = () =>{

    //Initialising the variables hours, minutes, seconds, day, month (m1), year, etc

    let  clock = new Date();
    h = clock.getHours(); //0-23
    m = clock.getMinutes(); //0-59
    s = clock.getSeconds(); //0-59
    d = clock.getDay();
    m1 = clock.getMonth();
    y = clock.getFullYear();

    let session = "AM";

    if(h == 0) { 

        h = 12;

    }
    if (h > 12){

        //h = h - 12;
        session = "PM"

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    let date = d + "/" + m1 + "/" + y;

    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("DateDisplay").innerText = date;

    setTimeout(ShowTime, 1000)

}

ShowTime();