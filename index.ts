#!/usr/bin/env node

    // set count down date 
let countDownDate = new Date("jan 1 2025 15:40:10").getTime();

let updateCountdown= (()=>{

    // get today date and time
    let todayDate = new Date().getTime();

    // Find the distance between count down and today date
let difference = countDownDate - todayDate;

// check if the countdown ended
if (difference < 0){

    console.log("Countdown Finished");

    //clearInterval: Used to stop tasks when they are no longer needed, such as stopping a repeating timer or animation when a user navigates away from a page.
    clearInterval(intervalId);

    return
}

    // time calculation for days, hours, minutes and seconds
let days = Math.floor(difference / (1000 * 60 * 60 * 24));      //  (1000 * 60 * 60 * 24) means milisecond in a day
                          // milisec secods minutes hours

// (distance % (1000 * 60 * 60 * 24) this tells us how many milliseconds are left over after subtracting out the complete days.
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   //Division by (1000 * 60 * 60): This converts the remaining / left over milliseconds into hours.

// (distance % (1000 * 60 * 60) this tells us how many milliseconds are left after accounting for complete hours.
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));  // Division by (1000 * 60): This converts the remaining milliseconds into minutes.

// (distance % (1000 * 60) it tells us how many milliseconds are left over after subtracting the complete minutes.
let seconds = Math.floor((difference % (1000 * 60)) / 1000);   // Division by 1000: This converts the remaining milliseconds into seconds.

// output th countdown
console.log(`Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`);
   
})

                //setInterval: Commonly used for tasks that need to run at regular intervals, such as updating a clock, polling data, or creating animations.
let intervalId = setInterval(updateCountdown, 1000);