const printer = document.getElementById("printer");


function getPrinterCost() {

    const owned = items.printer.owned;

    // 0–49 printers: +$500 each
    if (owned < 50) {
        return items.printer.price +
               (owned * 500);
    }

    // 50–99 printers: +$1,000 each
    if (owned < 100) {
        return items.printer.price +
               (50 * 500) +
               ((owned - 50) * 1000);
    }

    // 100–499 printers: +$2,500 each
    if (owned < 500) {
        return items.printer.price +
               (50 * 500) +
               (50 * 1000) +
               ((owned - 100) * 2500);
    }

    // 500–999 printers: +$5,000 each
    if (owned < 1000) {
        return items.printer.price +
               (50 * 500) +
               (50 * 1000) +
               (400 * 2500) +
               ((owned - 500) * 5000);
    }

    // Maximum reached
    return Infinity;

}


function updateShop() {

    const owned = items.printer.owned;

    if (owned >= 1000) {

        printer.textContent =
            "🖨️ Printer - MAXIMUM (1,000)";

        printer.disabled = true;

        return;

    }

    const cost = getPrinterCost();

    printer.disabled = false;

    printer.textContent =
        "🖨️ Printer - $" +
        formatMoney(cost) +
        " (+$1/sec)";

}


printer.onclick = function() {

    const cost = getPrinterCost();

    if (
        money >= cost &&
        items.printer.owned < 1000
    ) {

        money -= cost;

        items.printer.owned++;

        updateDisplay();
        updateShop();

        saveGame();

    }

};


// Load the saved game first,
// then show the correct printer price.
loadGame();
updateShop();
