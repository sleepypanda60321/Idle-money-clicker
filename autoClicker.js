// ===============================
// AUTO CLICKER
// ===============================

const autoClickerButton = document.getElementById("autoClickerButton");
const autoClickerPanel = document.getElementById("autoClickerPanel");
const selectAutoTarget = document.getElementById("selectAutoTarget");
const stopAutoClicker = document.getElementById("stopAutoClicker");
const autoClickerStatus = document.getElementById("autoClickerStatus");

let autoClickerTarget = null;
let autoClickerInterval = null;
let selectingAutoTarget = false;


// Open / close the Auto Clicker panel
autoClickerButton.onclick = function () {

    if (autoClickerPanel.style.display === "block") {
        autoClickerPanel.style.display = "none";
    } else {
        autoClickerPanel.style.display = "block";
    }

};


// Select a target
selectAutoTarget.onclick = function () {

    selectingAutoTarget = true;

    autoClickerStatus.textContent =
        "Tap a button to select it.";

    autoClickerPanel.style.display = "none";

};


// Detect the selected element
document.addEventListener("click", function (event) {

    if (!selectingAutoTarget) {
        return;
    }

    // Don't select the Auto Clicker itself
    if (
        event.target === autoClickerButton ||
        autoClickerPanel.contains(event.target)
    ) {
        return;
    }

    const target = event.target;

    // Only allow things that actually have a click function
    if (typeof target.click !== "function") {

        selectingAutoTarget = false;

        autoClickerPanel.style.display = "block";

        autoClickerStatus.textContent =
            "That cannot be selected.";

        return;
    }

    autoClickerTarget = target;

    selectingAutoTarget = false;

    autoClickerPanel.style.display = "block";

    autoClickerStatus.textContent =
        "Target selected!";

    startAutoClicker();

}, true);


// Start clicking
function startAutoClicker() {

    stopAutoClickerFunction();

    if (!autoClickerTarget) {
        return;
    }

    autoClickerInterval = setInterval(function () {

        if (
            autoClickerTarget &&
            typeof autoClickerTarget.click === "function"
        ) {

            autoClickerTarget.click();

        }

    }, 100);

}


// Stop clicking
function stopAutoClickerFunction() {

    if (autoClickerInterval !== null) {

        clearInterval(autoClickerInterval);

        autoClickerInterval = null;

    }

}


// Stop button
stopAutoClicker.onclick = function () {

    stopAutoClickerFunction();

    autoClickerStatus.textContent =
        "Auto clicker stopped.";

};
