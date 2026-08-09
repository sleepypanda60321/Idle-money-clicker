const printer = document.getElementById("printer");
const coinCollector = document.getElementById("coinCollector");


// ======================================
// PRINTER
// ======================================

function getPrinterCost() {

    const owned = items.printer.owned;

    // 0–49 printers: +$500 each
    if (owned < 50) {
        return items.printer.price + (owned * 500);
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

    return Infinity;
}


function updatePrinterShop() {

    const owned = items.printer.owned;

    if (owned >= 1000) {

        printer.textContent =
            "🖨️ Printer - MAXIMUM (1,000)";

        printer.disabled = true;

        return;
    }

    printer.disabled = false;

    printer.textContent =
        "🖨️ Printer - $" +
        formatMoney(getPrinterCost()) +
        " (+$1/sec)";
}


// ======================================
// COIN COLLECTOR
// ======================================

function getCoinCollectorCost() {

    const owned = items.coinCollector.owned;

    // 0–99: +$5 each
    if (owned < 100) {
        return items.coinCollector.price +
               (owned * 5);
    }

    // 100–150: +$10 each
    if (owned < 151) {
        return items.coinCollector.price +
               (100 * 5) +
               ((owned - 100) * 10);
    }

    // 151–199: +$50 each
    if (owned < 200) {
        return items.coinCollector.price +
               (100 * 5) +
               (51 * 10) +
               ((owned - 151) * 50);
    }

    // 200–249: +$75 each
    if (owned < 250) {
        return items.coinCollector.price +
               (100 * 5) +
               (51 * 10) +
               (49 * 50) +
               ((owned - 200) * 75);
    }

    return Infinity;
}


function updateCoinCollectorShop() {

    const owned = items.coinCollector.owned;

    if (owned >= 250) {

        coinCollector.textContent =
            "🪙 Coin Collector - MAXIMUM (250)";

        coinCollector.disabled = true;

        return;
    }

    coinCollector.disabled = false;

    coinCollector.textContent =
        "🪙 Coin Collector - $" +
        formatMoney(getCoinCollectorCost()) +
        " (+$0.50/sec)";
}


// ======================================
// PURCHASES
// ======================================

printer.onclick = function() {

    const cost = getPrinterCost();

    if (
        money >= cost &&
        items.printer.owned < 1000
    ) {

        money -= cost;

        items.printer.owned++;

        updateDisplay();
        updatePrinterShop();

        saveGame();
    }
};


coinCollector.onclick = function() {

    const cost = getCoinCollectorCost();

    if (
        money >= cost &&
        items.coinCollector.owned < 250
    ) {

        money -= cost;

        items.coinCollector.owned++;

        updateDisplay();
        updateCoinCollectorShop();

        saveGame();
    }
};


// ======================================
// STARTUP
// ======================================

loadGame();

updatePrinterShop();
updateCoinCollectorShop();
