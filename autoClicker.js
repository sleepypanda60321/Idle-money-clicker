document.addEventListener("DOMContentLoaded", function () {

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

    const autoSpeedInput =
        document.getElementById("autoSpeedInput");


    let autoClickerTarget = null;
    let autoClickerTimer = null;
    let selectingAutoTarget = false;

    let autoClickerSpeed = 10;


    // ===============================
    // OPEN / CLOSE
    // ===============================

    autoClickerButton.onclick = function () {

        autoClickerPanel.classList.toggle("open");

    };


    // ===============================
    // SELECT LOCATION
    // ===============================

    selectAutoTarget.onclick = function () {

        selectingAutoTarget = true;

        autoClickerStatus.textContent =
            "Tap a button to select it.";

        autoClickerPanel.classList.remove("open");

    };


    // ===============================
    // SELECT TARGET
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
    // SPEED INPUT
    // ===============================

    autoSpeedInput.onchange = function () {

        let speed = Number(this.value);


        if (!Number.isFinite(speed)) {
            speed = 10;
        }


        speed =
            Math.max(0.1, Math.min(100, speed));


        autoClickerSpeed = speed;

        this.value = speed;


        if (autoClickerTarget) {
            startAutoClicker();
        }

    };


    // ===============================
    // START AUTO CLICKER
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


    // ===============================
    // STOP BUTTON
    // ===============================

    stopAutoClicker.onclick = function () {

        stopAutoClickerFunction();

        autoClickerStatus.textContent =
            "Auto clicker stopped.";

    };

});
