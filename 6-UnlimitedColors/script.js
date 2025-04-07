const body = document.querySelector("body");
const start = document.querySelector("#start");
const end = document.querySelector("#stop");
const statusText = document.querySelector(".status");

let colorInterval = null;

function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor() {
    body.style.backgroundColor = randomColor();
}

start.addEventListener('click', function () {
    if (!colorInterval) {
        colorInterval = setInterval(setColor, 1000);
        statusText.textContent = "🎉 Color changing started!";
    }
});

end.addEventListener('click', function () {
    clearInterval(colorInterval);
    colorInterval = null;
    body.style.backgroundColor = '#212121';
    statusText.textContent = "⏹️ Color changing stopped!";
});
