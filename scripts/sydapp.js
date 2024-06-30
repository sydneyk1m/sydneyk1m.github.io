
function on() {
    // displays overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    // turn off vertical scrolls when overlay is displayed
    const overflow = document.querySelector("body");
    overflow.style.overflow = "hidden";
}

function off() {
    // displays overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    // turn off vertical scrolls when overlay is displayed
    const overflow = document.querySelector("body");
    overflow.style.overflow = "";
}