const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const gifs = [
    "./gifs/Worried.gif",
    "./gifs/Scared.gif",
    "./gifs/Terrified.gif",
    "./gifs/really.gif",
    "./gifs/milk.gif",
    "./gifs/Please.gif",
    "./gifs/Sorry.gif",
    "./gifs/betrayal.gif",
    "./gifs/Mad.gif",
    "./gifs/NO.gif"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function changeGif(newSrc) {
    document.querySelector(".gif_container img").src = newSrc;
}

document.querySelector(".yes-button").addEventListener("mouseover", function() {
    changeGif("./gifs/Yes.gif"); // Change to a happy GIF
});

document.querySelector(".no-button").addEventListener("mouseover", function() {
    changeGif(gifs[messageIndex]); // Change to a sad GIF
});

// Optional: Reset the GIF when the mouse leaves both buttons
document.querySelector(".yes-button").addEventListener("mouseleave", function() {
    changeGif("./gifs/DancingRaccoons.gif"); // Default GIF
});

document.querySelector(".no-button").addEventListener("mouseleave", function() {
    changeGif("./gifs/DancingRaccoons.gif"); // Default GIF
});
