const printer = document.getElementById("printer");

function getPrinterCost() {
    return items.printer.price +
           (items.printer.owned * 5);
}

function updateShop() {

    let cost = getPrinterCost();

    printer.textContent =
        "DEBUG $" +
        cost +
        " | OWNED: " +
        items.printer.owned;

}
printer.onclick = function() {

    alert("PRINTER CLICK DETECTED");

    let cost = getPrinterCost();

    if (money >= cost) {

        money -= cost;

        items.printer.owned = items.printer.owned + 1;

        updateInventory();
        updateDisplay();
        updateShop();

        saveGame();
    }

};

updateShop();
