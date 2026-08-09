const printer = document.getElementById("printer");

function getPrinterCost() {
    return items.printer.price +
           (items.printer.owned * 5);
}

function updateShop() {

    let cost = getPrinterCost();

    printer.textContent =
        "Printer - $" +
        formatMoney(cost) +
        " (+$1/sec)";

    console.log("Printer cost:", cost);
    console.log("Printer text:", printer.textContent);
}
printer.onclick = function() {

    alert("PRINTER CLICK DETECTED");

    let cost = getPrinterCost();

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
