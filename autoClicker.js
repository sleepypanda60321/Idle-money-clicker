// ===============================
// AUTO CLICKER
// ===============================

const autoClickerButton =
    document.getElementById("autoClickerButton");

const autoClickerPanel =
    document.getElementById("autoClickerPanel");

const selectAutoTarget =
    document.getElementById("selectAutoTarget");

const stopAutoClicker =
    document.getElementById("stopAutoClicker");

const autoClickerStatus =
    document.getElementById("autoClickerStatus");

const autoSpeedSlider =
    document.getElementById("autoSpeedSlider");

const autoSpeedInput =
    document.getElementById("autoSpeedInput");

const autoSpeedText =
    document.getElementById("autoSpeedText");


let autoClickerTarget = null;
let autoClickerTimer = null;
let selectingAutoTarget = false;

let autoClickerSpeed = 10;


// ===============================
// SPEED
// ===============================

function sliderToSpeed(value) {

    const min = Math.log10(0.1);
    const max = Math.log10(100);

    const position = Number(value) / 100;

    return Math.pow(
        10,
        min + (max - min) * position
    );

}


function updateSpeedDisplay() {

    let speed = autoClickerSpeed;

    if (speed >= 100) {

        autoSpeedText.textContent =
            Math.round(speed) + " clicks/sec";

    } else if (speed >= 1) {

        autoSpeedText.textContent =
            speed.toFixed(1).replace(".0", "") +
            " clicks/sec";

    } else {

        const seconds = 1 / speed;

        autoSpeedText.textContent =
            "1 click every " +
            seconds.toFixed(1).replace(".0", "") +
            " seconds";

    }

}


// ===============================
// SLIDER
// ===============================

autoSpeedSlider.oninput = function () {

    autoClickerSpeed =
        sliderToSpeed(this.value);

    autoSpeedInput.value =
        Number(autoClickerSpeed.toFixed(2));

    updateSpeedDisplay();

    if (autoClickerTarget) {
        startAutoClicker();
    }

};


// ===============================
// TEXT INPUT
// ===============================

autoSpeedInput.onchange = function () {

    let speed = Number(this.value);

    if (!Number.isFinite(speed)) {
        speed = 10;
    }

    speed = Math.max(0.1, Math.min(100, speed));

    autoClickerSpeed = speed;

    this.value = speed;

    updateSpeedDisplay();

    if (autoClickerTarget) {
        startAutoClicker();
    }

};


// ===============================
// OPEN / CLOSE PANEL
// ===============================

autoClickerButton.onclick = function () {

    if (autoClickerPanel.classList.contains("open")) {

        autoClickerPanel.classList.remove("open");

    } else {

        autoClickerPanel.classList.add("open");

    }

};


// ===============================
// SELECT TARGET
// ===============================

selectAutoTarget.onclick = function () {

    selectingAutoTarget = true;

    autoClickerStatus.textContent =
        "Tap a button to select it.";

    autoClickerPanel.classList.remove("open");

};


// ===============================
// TARGET DETECTION
// ===============================

document.addEventListener("click", function (event) {

    if (!selectingAutoTarget) {
        return;
    }


    if (
        event.target === autoClickerButton ||
        autoClickerPanel.contains(event.target)
    ) {
        return;
    }


    const target = event.target;


    if (typeof target.click !== "function") {

        selectingAutoTarget = false;

        autoClickerPanel.classList.add("open");

        autoClickerStatus.textContent =
            "That cannot be selected.";

        return;

    }


    autoClickerTarget = target;

    selectingAutoTarget = false;

    autoClickerStatus.textContent =
        "Target selected!";

    autoClickerPanel.classList.add("open");

    startAutoClicker();

}, true);


// ===============================
// AUTO CLICKING
// ===============================

function startAutoClicker() {

    stopAutoClickerFunction();


    if (!autoClickerTarget) {
        return;
    }


    function clickLoop() {

        if (!autoClickerTarget) {
            return;
        }


        autoClickerTarget.click();


        const delay =
            1000 / autoClickerSpeed;


        autoClickerTimer =
            setTimeout(clickLoop, delay);

    }


    clickLoop();

}


// ===============================
// STOP
// ===============================

function stopAutoClickerFunction() {

    if (autoClickerTimer !== null) {

        clearTimeout(autoClickerTimer);

        autoClickerTimer = null;

    }

}


stopAutoClicker.onclick = function () {

    stopAutoClickerFunction();

    autoClickerStatus.textContent =
        "Auto clicker stopped.";

};


// ===============================
// INITIAL SETTINGS
// ===============================

autoSpeedSlider.value = 50;

autoSpeedInput.value = 10;

updateSpeedDisplay();
