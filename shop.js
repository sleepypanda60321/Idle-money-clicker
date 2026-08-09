const printer = document.getElementById("printer");


function getPrinterCost() {

    const owned = items.printer.owned;

    if (owned < 100) {
        return items.printer.price + owned;
    }

    if (owned < 1000) {
        return items.printer.price +
               100 +
               ((owned - 100) * 5);
    }

    if (owned < 5000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               ((owned - 1000) * 10);
    }

    if (owned < 100000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               (4000 * 10) +
               ((owned - 5000) * 50);
    }

    if (owned < 1000000) {
        return items.printer.price +
               100 +
               (900 * 5) +
               (4000 * 10) +
               (95000 * 50) +
               ((owned - 100000) * 100);
    }

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
        "Printer - $" +
        formatMoney(cost) +
        " (+$0.01/sec)";

}


printer.onclick = function() {

    if (items.printer.owned >= 1000000) {
        return;
    }

    const cost = getPrinterCost();

    if (money >= cost) {

        money -= cost;

        items.printer.owned++;

        updateInventory();
        updateDisplay();
        updateShop();

        saveGame();

    }

};


updateShop();
loadGame();
