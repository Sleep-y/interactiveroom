console.log("Script is loaded");

const secondsHand = document.querySelector("[data-second]");
const minutesHand = document.querySelector("[data-minutes]");
const hoursHand = document.querySelector("[data-hours]");

function clockSet()
{
    console.log("Clock Changed.")

    const currentDate = new Date();
    let seconds = currentDate.getSeconds() / 60;
    let minutes = (currentDate.getMinutes() + seconds) / 60;
    let hours = currentDate.getHours();
    
    console.log("Seconds is " + seconds);

    setRotation(secondsHand, seconds);
    setRotation(minutesHand, minutes);
    setRotation(hoursHand, hours);
}

function setRotation(hand, rotatationDeg)
{
    hand.style.setProperty('--rotation', rotatationDeg * 360)
}

setInterval(clockSet, 1000)
clockSet()