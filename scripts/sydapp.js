
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

// rice site redirect button

const riceButton = document.getElementById('riceButton');

// Add an event listener to the button
riceButton.addEventListener('click', function() {
    // Redirect to the desired website
    window.location.href = 'https://www.rice.edu';
});

// bills redirect button

const buffaloButton = document.getElementById('buffaloButton');

// Add an event listener to the button
buffaloButton.addEventListener('click', function() {
    // Redirect to the desired website
    window.location.href = 'https://www.buffalobills.com/';
});
