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


let autoClickerTarget = null;
let autoClickerInterval = null;
let selectingAutoTarget = false;


// Open / close panel
autoClickerButton.onclick = function () {

    if (autoClickerPanel.classList.contains("open")) {

        autoClickerPanel.classList.remove("open");

    } else {

        autoClickerPanel.classList.add("open");

    }

};


// Select a target
selectAutoTarget.onclick = function () {

    selectingAutoTarget = true;

    autoClickerStatus.textContent =
        "Tap a button to select it.";

    autoClickerPanel.classList.remove("open");

};


// Detect selected button
document.addEventListener("click", function (event) {

    if (!selectingAutoTarget) {
        return;
    }


    // Don't select the Auto Clicker controls
    if (
        event.target === autoClickerButton ||
        autoClickerPanel.contains(event.target)
    ) {
        return;
    }


    const target = event.target;


    // Only select things that can actually be activated
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


// Start auto clicking
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


// Stop auto clicking
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
