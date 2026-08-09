const printer = document.getElementById("printer");


function getPrinterCost() {

    const owned = items.printer.owned;

    // 0–99 printers: +$1 each
    if (owned < 100) {
        return items.printer.price + owned;
    }

    // 100–999 printers: +$5 each
    if (owned < 1000) {
        return items.printer.price +
               100 +
               ((owned - 100) * 5);
    }

    // 1,000–4,999 printers: +$10 each
    if (owned < 5000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               ((owned - 1000) * 10);
    }

    // 5,000–99,999 printers: +$50 each
    if (owned < 100000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               (4000 * 10) +
               ((owned - 5000) * 50);
    }

    // 100,000–999,999 printers: +$100 each
    if (owned < 1000000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               (4000 * 10) +
               (95000 * 50) +
               ((owned - 100000) * 100);
    }

    // Maximum reached
    return Infinity;

}


function updateShop() {

    const owned = items.printer.owned;

    if (owned >= 1000000) {

        printer.textContent =
            "Printer - MAXIMUM (1,000,000)";

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
        items.printer.owned < 1000000
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
